import { TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function IconButton({ iconName, onPressHandle, iconBg }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: iconBg }]}
      onPress={() => onPressHandle()}
      activeOpacity={0.6}
    >
      <Feather name={iconName} size={20} color="grey" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
