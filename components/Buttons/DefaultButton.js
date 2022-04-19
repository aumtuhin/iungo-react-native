import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../shared/style";

export default function DefaultButton({
  navigation,
  btnText,
  onPressHandle,
  color,
}) {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: color }]}
      onPress={() => onPressHandle()}
    >
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    height: 45,
    width: "80%",
    justifyContent: "center",
    borderRadius: 4,
    borderColor: colors.purple,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
});
