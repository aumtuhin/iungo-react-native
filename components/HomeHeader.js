import { View, StyleSheet } from "react-native";
import IconButton from "./IconButton";

export default function HomeHeader({ navigation }) {
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
});
