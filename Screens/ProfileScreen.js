import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import IconButton from "../components/IconButton";

const bgImgUrl =
  "https://images.unsplash.com/photo-1615196677587-ecb0a8b68352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";
const profileImg =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";

export default function ProfileScreen({ navigation }) {
  const navigateBack = () => {
    navigation.navigate("Home");
  };

  const openInbox = () => {
    navigation.navigate("Inbox");
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
          source={{ uri: bgImgUrl }}
          resizeMode="cover"
        />
        <View style={styles.profile}>
          <TouchableOpacity>
            <Image style={styles.profileImage} source={{ uri: profileImg }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Inside</Text>
      </View>
    </View>
  );
}

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
    height: 200,
    width: "100%",
  },
  headerContainer: {},
  profile: {},
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 70,
  },
});
