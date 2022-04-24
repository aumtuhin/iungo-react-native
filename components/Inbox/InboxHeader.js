import { View, StyleSheet, Text, Platform } from "react-native";
import IconButton from "../Buttons/IconButton";

export default function InboxHeader({ navigation }) {
  const openCamera = () => {
    navigation.navigate("Camera");
  };

  const openInbox = () => {
    navigation.navigate("Inbox");
  };
  return (
    <View style={styles.header}>
      <IconButton
        onPressHandle={openCamera}
        iconName="camera"
        iconBg="#eaeaea"
      />
      <Text style={styles.LogoText}>iungo</Text>
      <IconButton
        onPressHandle={openInbox}
        iconName="message-circle"
        iconBg="#eaeaea"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  LogoText: {
    fontSize: 22,
    fontFamily:
      Platform.OS === "android" ? null : "AvenirNextCondensed-DemiBoldItalic",
  },
});
