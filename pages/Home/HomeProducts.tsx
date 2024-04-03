import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GetAllProducts } from "../../services/product.service";
import { addWishListItem } from "../../store/actions/auth/auth.actions";
import { AppDispatch, RootState, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}

const HomeProducts: React.FC = () => {
  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();

  const { wishlist } = useAppSelector((state: RootState) => state.auth);

  const isSelectedIdInList = (
    selectedId: number,
    objectList: any[]
  ): boolean => {
    return objectList.some((obj) => obj.id === selectedId);
  };

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetAllProducts();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const separateByCategory = (products?: Product[]) => {
    const separated: { [key: string]: Product[] } = {};
    products?.length &&
      products.forEach((product) => {
        if (!separated[product.category]) {
          separated[product.category] = [];
        }
        separated[product.category].push(product);
      });
    return separated;
  };

  const separatedProducts = separateByCategory(products);

  const handleProductPress = (productId: number) => {
    navigation.navigate("ProductDetail", { productId });
  };

  const toggleFavorite = (product: any) => {
    dispatch(addWishListItem(product));
  };

  const favoriteImagePath = (isFavorite: boolean) => {
    return isFavorite
      ? require("../../images/favorite/favorite.jpg")
      : require("../../images/favorite/not_favorite.jpg");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {Object.entries(separatedProducts).map(([category, items]) => (
        <View key={category}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}
          >
            {category}
          </Text>
          <View style={styles.productContainer}>
            {items.map((product, index) => (
              <TouchableOpacity
                key={product.id}
                onPress={() => handleProductPress(product.id)}
              >
                <View style={styles.productItem}>
                  <Image
                    source={{ uri: product.thumbnail }}
                    style={styles.productImage}
                  />
                  <Text style={styles.title}>{product.title}</Text>
                  <Text style={styles.price}>Price: ${product.price}</Text>
                  <TouchableOpacity onPress={() => toggleFavorite(product)}>
                    <Image
                      source={favoriteImagePath(
                        isSelectedIdInList(product.id, wishlist)
                      )}
                      style={styles.favoriteImage}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productItem: {
    width: 164,
    marginBottom: 20,
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  description: {
    marginBottom: 10,
  },
  price: {
    fontWeight: "bold",
  },
  productImage: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  favoriteImage: {
    width: 15,
    height: 15,
    position: "absolute",
    right: 15,
    top: 15,
  },
});

export default HomeProducts;
