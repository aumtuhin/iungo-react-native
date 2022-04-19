import { View, StyleSheet, Image } from "react-native";
import React from "react";
import IconButton from "../IconButton";
import Avatar from "../Avatar";

const coverImage =
  "https://images.unsplash.com/photo-1615196677587-ecb0a8b68352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";
  
export default function CoverPhoto({ navigation, avatar }) {
  const navigateBack = () => {
    navigation.navigate("Home");
  };

  const openInbox = () => {
    navigation.navigate("Inbox");
  };

  return (
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
  );
}

const coverHeight = 200;

const styles = StyleSheet.create({
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
});
