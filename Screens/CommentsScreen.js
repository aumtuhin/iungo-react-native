import { Text, View } from "react-native";

export default function CommentsScreen({ route }) {
  const { postID } = route.params;
  return (
    <View>
      <Text>CommentsScreen</Text>
      <Text>Post id : {postID}</Text>
    </View>
  );
}
