import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { GetProductById } from "../../services/product.service";
import Swiper from "react-native-swiper"; // Import react-native-swiper
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

type RootStackParamList = {
  ProductDetail: { productId: string };
};

type CatalogScreenRouteProp = RouteProp<RootStackParamList, "ProductDetail">;

type CatalogScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ProductDetail"
>;

type ProductDetailsProps = {
  route: CatalogScreenRouteProp;
  navigation: CatalogScreenNavigationProp;
};

const ProductDetailPage: React.FC<ProductDetailsProps> = ({
  route,
  navigation,
}) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { productId } = route.params;
  console.log(" productId", productId);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await GetProductById(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>No product found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Swiper style={styles.swiper} showsButtons={true}>
        {product.images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </Swiper>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <Text style={styles.details}>Brand: {product.brand}</Text>
      <Text style={styles.details}>Category: {product.category}</Text>
      <Text style={styles.details}>Rating: {product.rating}</Text>
      <Text style={styles.details}>Stock: {product.stock}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  swiper: {
    height: "100%",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProductDetailPage;
