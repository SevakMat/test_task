import React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const categories = [
  {
    name: "Automotive",
    imageSource: require("../../images/categories/automotive.jpg"),
  },
  {
    name: "Fragrances",
    imageSource: require("../../images/categories/fragrances.jpg"),
  },
  {
    name: "Furniture",
    imageSource: require("../../images/categories/furniture.jpg"),
  },
  {
    name: "Groceries",
    imageSource: require("../../images/categories/groceries.jpg"),
  },
  {
    name: "Home Decoration",
    imageSource: require("../../images/categories/home-decoration.jpg"),
  },
  {
    name: "Laptops",
    imageSource: require("../../images/categories/laptops.jpg"),
  },
  {
    name: "Lighting",
    imageSource: require("../../images/categories/lighting.jpg"),
  },
  {
    name: "Men's Shirts",
    imageSource: require("../../images/categories/mens-shirts.jpg"),
  },
];

const CategoriesPage = () => {
  const navigation = useNavigation();

  const navigateToCatalog = (itemName: string) => {
    navigation.navigate("Catalog", { itemName });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryContainer}
          onPress={() => navigateToCatalog(category.name)}
        >
          <Image
            source={category.imageSource}
            resizeMode="cover"
            style={styles.image}
          />
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryContainer: {
    position: "relative",
    marginBottom: 10,
  },
  image: {
    width: 345,
    height: 130,
    borderRadius: 10,
  },
  categoryText: {
    position: "absolute",
    width: 129,
    height: 19,
    left: 36,
    bottom: 10,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    textTransform: "uppercase",
    color: "#FFFFFF",
    zIndex: 1,
  },
});

export default CategoriesPage;
