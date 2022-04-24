import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import IconButton from '../Buttons/IconButton';
import Avatar from "../Profile/Avatar";
import { useState, useCallback } from "react";
import { colors } from "../../shared/styles";

export default function PostCard({
  user,
  content,
  actions,
  navigation,
  postID,
}) {
  const [like, setLike] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const [lastPressed, setLastPressed] = useState(0);
  const onMoreAction = () => {
    console.log("More action");
  };
  const onLike = () => {
    setLike(!like);
  };

  const doubleTap = useCallback(() => {
    const DOUBLE_PRESS_DELAY = 200;
    const time = new Date().getTime();
    const delta = time - lastPressed;
    setLastPressed(time);
    if (lastPressed) {
      if (delta < DOUBLE_PRESS_DELAY) {
        setLike(true);
      }
    }
  }, [lastPressed]);

  const onBookmark = () => {
    setIsBookmark(!isBookmark);
  };

  const onPressComment = () => {
    navigation.navigate("Comments", {
      postID: postID,
    });
  };

  const navigateProfile = () => {
    let navigateTo = "";
    if (user.currentUser) navigateTo = "Profile";
    if (!user.currentUser) navigateTo = "UserProfile";

    navigation.navigate(navigateTo, {
      user,
      content,
      actions,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardTopContainer}>
        <View style={styles.user}>
          <Avatar
            avatar={user.avatar}
            size={35}
            onPressHandler={() => navigateProfile(user)}
          />
          <TouchableOpacity
            style={styles.nameBtn}
            onPress={() => navigateProfile(user)}
          >
            <Text style={styles.name}>{user.name}</Text>
          </TouchableOpacity>
        </View>
        <IconButton
          onPressHandle={onMoreAction}
          iconName="more-horizontal"
          iconBg="transparent"
        />
      </View>
      <View style={styles.content}>
        <TouchableWithoutFeedback onPress={doubleTap}>
          <Image
            style={styles.image}
            source={{ uri: content.url }}
            resizeMode="cover"
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.actions}>
        <View style={styles.leftButtons}>
          <View style={[styles.actionBtn, { marginLeft: 0 }]}>
            <TouchableOpacity onPress={onLike}>
              {!like && <AntDesign name="hearto" size={26} color="black" />}
              {like && <AntDesign name="heart" size={26} color="black" />}
            </TouchableOpacity>
            <Text style={styles.actionText}>{actions.likes}</Text>
          </View>
          <View style={styles.actionBtn}>
            <TouchableOpacity onPress={onPressComment}>
              <FontAwesome5 name="comment" size={25} color="black" />
            </TouchableOpacity>
            <Text style={styles.actionText}>{actions.comments}</Text>
          </View>
        </View>
        <View style={styles.rightButtons}>
          <View style={styles.actionBtn}>
            <TouchableOpacity onPress={onBookmark}>
              {!isBookmark && (
                <Ionicons name="ios-bookmark-outline" size={25} color="black" />
              )}
              {isBookmark && (
                <Ionicons name="ios-bookmark" size={25} color="black" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  cardTopContainer: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  user: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  nameBtn: {
    marginLeft: 10,
  },
  name: {
    color: colors.grey,
    fontSize: 14,
  },
  content: {
    width: "90%",
    alignSelf: "center",
    // borderTopWidth: 1,
    // borderTopColor: "#dbdbdb",
  },
  image: {
    height: 300,
    borderRadius: 10,
  },
  actions: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftButtons: {
    flex: 1,
    flexDirection: "row",
  },
  actionBtn: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 5,
    color: colors.grey,
    fontWeight: "400",
  },
});
