import { View, StyleSheet, ScrollView } from "react-native";
import CoverPhoto from "../components/Profile/CoverPhoto";
import DetailsArea from "../components/Profile/DetailsArea";
import Posts from "../components/Profile/Posts";
import Actions from "../components/Profile/Actions";

export default function CurrentUserProfileScreen({ navigation, route }) {

  const { user } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <CoverPhoto navigation={navigation} avatar={user.avatar} />
        <DetailsArea name={user.name} motto={user.motto} />
        <Actions navigation={navigation} currentUser={user.currentUser} />
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
