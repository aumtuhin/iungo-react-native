import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

export default function User({ avatar, size }) {
  return (
    <TouchableOpacity>
      <Image
        style={[styles.avatar, { height: size, width: size }]}
        source={{ uri: avatar }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderColor: "#a874ff",
    borderWidth: 2,
    borderRadius: 25,
  },
});
