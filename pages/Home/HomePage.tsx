import React from "react";
import Swiper from "react-native-swiper";

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeProducts from "./HomeProducts";

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

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <>
      <Swiper style={styles.swiper} showsButtons={true}>
        {categories.map((category, index) => (
          <View key={index}>
            <Text>{category.name}</Text>
            <Image
              source={category.imageSource}
              style={styles.image}
              resizeMode="cover"
            />
            <Text>{category.name}</Text>
          </View>
        ))}
      </Swiper>
      <HomeProducts />
    </>
  );
};

const styles = StyleSheet.create({
  swiper: {
    height: "100%",
  },
  image: {
    width: 300,
    height: 400,
    backgroundColor: "red",
  },
});

export default HomePage;
