import React, { useState } from "react";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleNavigation = (route: string) => {
    navigation.navigate(route);
    setSelectedItem(route); // Update selected item after navigation
  };

  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20, // Added paddingHorizontal for spacing
        backgroundColor: "#FFFFFF",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Appbar.Action
          icon="home"
          color={selectedItem === "Home" ? "#7867BE" : "#CACACA"}
          onPress={() => handleNavigation("Home")}
        />
        <Text
          style={{
            fontSize: 12,
            marginTop: -5,

            color: selectedItem === "Home" ? "#7867BE" : "#CACACA",
          }}
        >
          Home
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Appbar.Action
          icon="view-comfy"
          color={selectedItem === "Categories" ? "#7867BE" : "#CACACA"}
          onPress={() => handleNavigation("Categories")}
        />
        <Text
          style={{
            marginTop: -5,
            color: selectedItem === "Categories" ? "#7867BE" : "#CACACA",
          }}
        >
          Categories
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Appbar.Action
          icon="heart"
          color={selectedItem === "Wishlist" ? "#7867BE" : "#CACACA"}
          onPress={() => handleNavigation("Wishlist")}
        />
        <Text
          style={{
            fontSize: 12,
            marginTop: -5,
            color: selectedItem === "Wishlist" ? "#7867BE" : "#CACACA",
          }}
        >
          Wishlist
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Appbar.Action
          icon="account"
          color={selectedItem === "Profile" ? "#7867BE" : "#CACACA"}
          onPress={() => handleNavigation("Profile")}
        />
        <Text
          style={{
            fontSize: 12,
            marginTop: -5,
            color: selectedItem === "Profile" ? "#7867BE" : "#CACACA",
          }}
        >
          Profile
        </Text>
      </View>
    </View>
  );
};

export default Footer;
