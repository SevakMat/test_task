import React, { useState, useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { GetProductsByCategoryName } from "../../services/product.service";

type RootStackParamList = {
  Catalog: { itemName: string };
  ProductDetail: { productId: string };
};

type CatalogScreenRouteProp = RouteProp<RootStackParamList, "Catalog">;

type CatalogScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Catalog"
>;

type Props = {
  route: CatalogScreenRouteProp;
  navigation: CatalogScreenNavigationProp;
};

const CatalogPage: React.FC<Props> = ({ route, navigation }) => {
  const { itemName } = route.params;
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await GetProductsByCategoryName(itemName);
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [itemName]);

  const handleProductPress = (productId: string) => {
    navigation.navigate("ProductDetail", { productId });
  };

  return (
    <ScrollView>
      <View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            {products.map((product) => {
              return (
                <TouchableOpacity
                  key={product.id}
                  style={styles.productContainer}
                  onPress={() => handleProductPress(product.id)}
                >
                  <Image
                    style={styles.thumbnail}
                    source={{ uri: product.thumbnail }}
                  />
                  <Text style={styles.title}>{product.title}</Text>
                  <Text style={styles.brand}>{product.brand}</Text>
                  <Text style={styles.price}>${product.price}</Text>
                </TouchableOpacity>
              );
            })}
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  brand: {
    marginBottom: 5,
  },
  price: {
    fontWeight: "bold",
  },
});

export default CatalogPage;
