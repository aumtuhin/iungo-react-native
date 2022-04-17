import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function LinkButton({ btnText, onPressHandle }) {
  return (
    <TouchableOpacity
      onPress={() => onPressHandle()}
      style={styles.btnLink}
    >
      <Text style={styles.btnLinkText}>{btnText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnLink: {
    position: "absolute",
    bottom: 50,
  },
  btnLinkText: {
    color: "#fff",
    fontSize: 18,
  },
});
