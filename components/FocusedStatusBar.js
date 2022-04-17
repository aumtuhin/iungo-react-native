import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/core";

export default function FocusedStatusBar() {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} /> : null;
}
