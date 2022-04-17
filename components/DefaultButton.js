import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function DefaultButton({ navigation, btnText, onPressHandle }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => onPressHandle()}>
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    height: 45,
    width: "80%",
    backgroundColor: "rgb(168, 116, 255)",
    justifyContent: "center",
    borderRadius: 4,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
});
