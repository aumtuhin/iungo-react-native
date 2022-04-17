import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../shared/style";

export default function ButtonRadius({
  navigation,
  btnText,
  onPressHandle,
  bgColor,
  color,
  width
}) {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: bgColor, width: width, }]}
      onPress={() => onPressHandle()}
    >
      <Text style={[styles.btnText, { color: color }]}>{btnText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 8,
    borderRadius: 40,
    justifyContent: "center",
    borderColor: colors.purple,
    borderWidth: 1,
  },
  btnText: {
    textAlign: "center",
    fontSize: 16
  },
});
