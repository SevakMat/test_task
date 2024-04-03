import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { loginEffect } from "../../store/effects/auth/auth.effects";

const LoginPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = async () => {
    dispatch(loginEffect({ email: "email", password: "password" }, navigation));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#1E1D1D"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#1E1D1D"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "#1E1D1D",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  inputContainer: {
    width: 343,
    height: 52,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    color: "#1E1D1D",
  },
  loginButton: {
    width: 343,
    height: 44,
    backgroundColor: "#7867BE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
});

export default LoginPage;
