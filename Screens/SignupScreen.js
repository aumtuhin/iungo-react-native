import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../components/Input";
import DefaultButton from "../components/DefaultButton";
import LinkButton from "../components/LinkButton";

export default function SignupScreen({ navigation }) {
  const submit = async () => {
    console.log("Submitted");
  };

  const navigate = () => {
    navigation.navigate("Login");
  };

  return (
    <LinearGradient
      style={styles.gradientBg}
      colors={["rgb(87, 185, 255)", "rgb(168, 116, 255)"]}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.logoText}>Signup</Text>
        <Input placeHolderText="Username" />
        <Input placeHolderText="Email" />
        <Input isSecureText={true} placeHolderText="Password" />
        <DefaultButton btnText="Signup" onPressHandle={submit} />
        <LinkButton
          btnText="Do you have account? Login."
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
  input: {
    height: 50,
    paddingHorizontal: 15,
    width: "80%",
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 10,
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: "rgba(245, 243, 242, .2)",
    color: "#fff",
  },
  btn: {
    marginTop: 10,
    height: 45,
    width: "80%",
    backgroundColor: "rgba(23, 187, 146, 0.9)",
    justifyContent: "center",
    borderRadius: 4,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
  btnLink: {
    position: "absolute",
    bottom: 50,
  },
  btnLinkText: {
    color: "#fff",
    fontSize: 15,
  },
});
