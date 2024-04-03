import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Surface, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { AppDispatch, RootState, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { logOutEffect } from "../../store/effects/auth/auth.effects";

const ProfilePage: React.FC = () => {
  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logOutEffect(navigation));
  };

  const { user } = useAppSelector((state: RootState) => state.auth);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: user?.image,
          }}
          resizeMode="cover"
        />
      </View>
      <Text>{user?.firstName}</Text>
      <Text>{user?.gender}</Text>
      <View style={styles.logoutContainer}>
        <Appbar.Action icon="logout" onPress={handleLogout} />
        <Text style={styles.logoutText}>Log out</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  logoutContainer: {
    alignItems: "center",
  },
  logoutText: {
    fontSize: 12,
    marginTop: -5,
  },
});

export default ProfilePage;
