import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import ButtonRadius from '../Buttons/ButtonRadius';
import { colors } from "../../shared/style";

export default function Actions({ navigation, currentUser }) {
  const [isItME, setIsItMe] = useState(currentUser);
  const [isFollowing, setIsFollowing] = useState(false);

  const follow = () => {
    setIsFollowing(!isFollowing);
  };

  const sendMessage = () => {
    navigation.navigate("Inbox");
  };

  const editProfile = () => {
    console.log("edit");
  };

  return (
    <View style={styles.actionsContainer}>
      {isItME && (
        <ButtonRadius
          navigation={navigation}
          onPressHandle={editProfile}
          btnText="Edit"
          bgColor={colors.purple}
          color={colors.white}
          width="80%"
        />
      )}
      {!isItME && (
        <ButtonRadius
          navigation={navigation}
          btnText={isFollowing ? "Unfollow" : "Follow"}
          onPressHandle={follow}
          bgColor={colors.purple}
          color={colors.white}
          width="45%"
        />
      )}
      {!isItME && (
        <ButtonRadius
          navigation={navigation}
          btnText="Message"
          onPressHandle={sendMessage}
          bgColor={colors.white}
          color={colors.grey}
          width="45%"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    marginTop: 8,
    marginLeft: "10%",
    marginRight: "10%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
