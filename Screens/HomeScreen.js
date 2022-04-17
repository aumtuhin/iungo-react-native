import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Posts } from "../shared/dummyData";
import PostCard from "../components/PostCard";
import HomeHeader from "../components/HomeHeader";

export default function HomeScreen({ navigation }) {
  const renderPost = ({ item }) => (
    <PostCard
      navigation={navigation}
      postID={item.id}
      user={item.user}
      content={item.content}
      actions={item.actions}
    />
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <HomeHeader navigation={navigation} />
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={Posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
