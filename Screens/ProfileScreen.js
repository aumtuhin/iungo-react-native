import { View, StyleSheet } from "react-native";
import ProfileContents from "../components/Profile/ProfileContents";
import CoverPhoto from "../components/Profile/CoverPhoto";
import DetailsArea from "../components/Profile/DetailsArea";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CoverPhoto navigation={navigation} />
      <DetailsArea />
      <ProfileContents navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
