import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../components/Input";
import DefaultButton from "../components/DefaultButton";
import LinkButton from "../components/LinkButton";

export default function LoginScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    navigation.navigate("App");
  };

  const navigate = () => {
    navigation.navigate("Signup");
  };

  return (
    <LinearGradient
      style={styles.gradientBg}
      colors={["rgb(87, 185, 255)", "rgb(168, 116, 255)"]}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.logoText}>Login</Text>
        <Input placeHolderText="Username" />
        <Input isSecureText={true} placeHolderText="Password" />
        {isLoading ? (
          <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />
        ) : (
          <DefaultButton btnText="Login" onPressHandle={submit} />
        )}
        <LinkButton
          btnText="Don't you have account? Signup."
          onPressHandle={navigate}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBg: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 30,
    color: "#fff",
    paddingBottom: 10,
  },
  loading: {
    marginTop: 15
  }
});
