import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CommentsScreen({ route }) {
  const { postID } = route.params;
  return (
    <SafeAreaView>
      <Text>CommentsScreen</Text>
      <Text>Post id : {postID}</Text>
    </SafeAreaView>
  );
}
