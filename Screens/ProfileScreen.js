import { View, StyleSheet, ScrollView } from "react-native";
import CoverPhoto from "../components/Profile/CoverPhoto";
import DetailsArea from "../components/Profile/DetailsArea";
import Posts from "../components/Profile/Posts";
import Actions from "../components/Profile/Actions";

export default function ProfileScreen({ navigation, route }) {

  const { user } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <CoverPhoto navigation={navigation} user={user} />
        <DetailsArea />
        <Actions navigation={navigation} />
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
