import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import InboxHeader from "../components/Inbox/InboxHeader";
import Search from "../components/Inputs/Search";
import { useState } from "react";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { colors } from "../shared/styles";

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
          <Swipeable>
            <TouchableHighlight underlayColor={colors.lightRed}>
              <View style={styles.container}>
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
