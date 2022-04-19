import { StyleSheet, FlatList, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Posts, NewPosts } from "../shared/dummyData";
import PostCard from "../components/PostCard";
import HomeHeader from "../components/HomeHeader";
import { colors } from "../shared/style";
import { useState } from "react";

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState(Posts);
  const [refreshig, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setPosts(NewPosts);
    setRefreshing(false);
  };

  const loadMoreResults = (info) => {
    if (info.distanceFromEnd < 0) return;
    console.log(info);
  };

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
        refreshControl={
          <RefreshControl
            refreshing={refreshig}
            onRefresh={onRefresh}
            colors={[colors.purple]}
          />
        }
        onEndReachedThreshold={0.01}
        onEndReached={(info) => {
          loadMoreResults(info);
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={posts}
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
