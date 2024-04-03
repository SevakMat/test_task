import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { RootState, useAppSelector } from "../../store";

const WishlistPage = () => {
  const { wishlist } = useAppSelector((state: RootState) => state.auth);
  const navigation = useNavigation();

  const handleProductPress = (productId: number) => {
    navigation.navigate("ProductDetail", { productId });
  };

  if (!wishlist.length) return <Text>You have not selected Product</Text>;
  return (
    <View style={styles.productContainer}>
      {wishlist.map((product: any, index) => (
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
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default WishlistPage;
