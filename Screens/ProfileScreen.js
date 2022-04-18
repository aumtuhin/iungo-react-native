import { View, StyleSheet, ScrollView } from "react-native";
import CoverPhoto from "../components/Profile/CoverPhoto";
import DetailsArea from "../components/Profile/DetailsArea";
import Posts from "../components/Profile/Posts";

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <CoverPhoto navigation={navigation} />
        <DetailsArea />
        <Posts navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
