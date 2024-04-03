import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import HomePage from "../pages/Home/HomePage";
import CategoriesPage from "../pages/Categories/CategoriesPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import WishlistPage from "../pages/Wishlist/WishlistPage";
import LoginPage from "../pages/Login/LoginPage";
import { RootState, useAppSelector } from "../store";
import Footer from "../components/Footer";
import CatalogPage from "../pages/Catalog/CatalogPage";
import ProductDetailPage from "../pages/ProductDetail/ProductDetailPage";

const Stack = createStackNavigator();

const Routers = () => {
  const { isLoggedIn } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const navigation = useNavigation();

  useEffect(() => {
    if (!isLoggedIn && navigation.isFocused()) {
      navigation.navigate("Login");
    }
  }, [isLoggedIn, navigation]);

  return (
    <>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Categories" component={CategoriesPage} />
            <Stack.Screen name="Profile" component={ProfilePage} />
            <Stack.Screen name="Wishlist" component={WishlistPage} />
            <Stack.Screen name="Catalog" component={CatalogPage} />
            <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Categories" component={CategoriesPage} />
          </>
        )}
      </Stack.Navigator>
      <Footer />
    </>
  );
};

export default Routers;
