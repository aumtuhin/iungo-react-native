import { ScrollView, StyleSheet, SafeAreaView, Text } from "react-native";
import InboxHeader from "../components/Inbox/InboxHeader";
import Search from "../components/Inputs/Search";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const chats = [
  {
    id: 1,
    text: "John",
  },
  {
    id: 2,
    text: "Doe",
  },
  {
    id: 3,
    text: "Kabir",
  },
  {
    id: 4,
    text: "Jannatul",
  },
];

export default function InboxScreen() {
  const [listViewData, setListViewData] = useState(chats);
  return (
    <SafeAreaView style={StyleSheet.container}>
      <InboxHeader navigation />
      <Search placeHolderText="Search" />
      <ScrollView>
        <GestureHandlerRootView>
          <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
              <View style={styles.container}>
                <Image style={styles.image} source={image} />
                <View>
                  <Text style={styles.title}>title</Text>
                  <Text style={styles.subTitle}>subtitle</Text>
                </View>
              </View>
            </TouchableHighlight>
          </Swipeable>
        </GestureHandlerRootView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
