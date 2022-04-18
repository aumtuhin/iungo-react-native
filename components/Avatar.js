import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { colors } from "../shared/style";

export default function Avatar({ avatar, size, onPressHandler }) {
  return (
    <TouchableOpacity
      style={[
        styles.avatarBtn,
        { height: size + 8, width: size + 8, borderRadius: size },
      ]}
      activeOpacity={0.6}
      onPress={onPressHandler}
    >
      <Image
        style={[
          styles.avatar,
          { height: size, width: size, borderRadius: size },
        ]}
        source={{ uri: avatar }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatarBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.purple,
    borderWidth: 2,
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
  },
});
