import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import IconButton from "../components/IconButton";
import Avatar from "../components/Avatar";
import { colors } from "../shared/style";
import { useState } from "react";
import ButtonRadius from "../components/ButtonRadius";
import ProfileContents from "../components/ProfileContents";

const coverImage =
  "https://images.unsplash.com/photo-1615196677587-ecb0a8b68352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";
const avatar =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";

export default function ProfileScreen({ navigation }) {
  const [isItME, setIsItMe] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const navigateBack = () => {
    navigation.navigate("Home");
  };

  const openInbox = () => {
    navigation.navigate("Inbox");
  };

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
    <View style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <View style={styles.header}>
          <IconButton
            onPressHandle={navigateBack}
            iconName="arrow-left"
            iconBg="#eaeaea"
          />
          <IconButton
            onPressHandle={openInbox}
            iconName="message-circle"
            iconBg="#eaeaea"
          />
        </View>
        <Image
          style={styles.coverPhoto}
          source={{ uri: coverImage }}
          resizeMode="cover"
        />
        <View style={styles.avatarContainer}>
          <Avatar avatar={avatar} size={100} />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.countContainer}>
          <TouchableOpacity style={styles.countBtn} activeOpacity={0.5}>
            <Text style={styles.count}>43k</Text>
            <Text style={styles.countText}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.countBtn} activeOpacity={0.5}>
            <Text style={styles.count}>4k</Text>
            <Text style={styles.countText}>Following</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.intro}>
          <Text style={styles.name}>Sophia Maria</Text>
          <Text style={styles.motto}>
            "I love photography. It makes me feel one with nature"
          </Text>
        </View>
      </View>
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
      <ProfileContents />
    </View>
  );
}

const coverHeight = 200;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    zIndex: 100,
    padding: 20,
    width: "100%",
    top: 30,
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coverPhotoContainer: {
    width: "100%",
  },
  coverPhoto: {
    height: coverHeight,
    width: "100%",
  },
  avatarContainer: {
    zIndex: 200,
    position: "absolute",
    alignSelf: "center",
    top: coverHeight - 50,
  },
  detailsContainer: {
    marginTop: 8,
    marginLeft: 50,
    marginRight: 50,
    paddingBottom: 10,
  },
  countContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countBtn: {
    alignItems: "center",
  },
  count: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.grey,
  },
  countText: {
    color: colors.grey,
  },
  intro: {
    marginTop: 20,
    alignItems: "center",
  },
  name: {
    textAlign: "center",
    color: colors.grey,
    fontSize: 18,
    fontWeight: "500",
  },
  motto: {
    textAlign: "center",
    color: colors.grey,
    marginTop: 5,
    fontSize: 15,
  },
  actionsContainer: {
    marginTop: 8,
    marginLeft: "10%",
    marginRight: "10%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
