import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { colors } from "../../shared/style";

const image =
  "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80";
const image2 =
  "https://images.unsplash.com/photo-1650139504331-9bc867a86b3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";

export default function ProfileContents() {
  const [allTab, setAllTab] = useState(true);
  const [photoTab, setPhtoTab] = useState(false);
  const [videoTab, setVideoTab] = useState(false);

  const showAll = () => {
    setAllTab(true);
    setPhtoTab(false);
    setVideoTab(false);
  };

  const showPhoto = () => {
    setAllTab(false);
    setPhtoTab(true);
    setVideoTab(false);
  };

  const showVideo = () => {
    setAllTab(false);
    setPhtoTab(false);
    setVideoTab(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.type}>
        <TouchableOpacity
          style={[styles.textBtn, { marginLeft: 0 }]}
          onPress={showAll}
        >
          <Text style={allTab ? styles.activeTab : styles.text}>All</Text>
          <View style={allTab ? styles.activeDot : null}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textBtn} onPress={showPhoto}>
          <Text style={photoTab ? styles.activeTab : styles.text}>Photo</Text>
          <View style={photoTab ? styles.activeDot : null}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textBtn} onPress={showVideo}>
          <Text style={videoTab ? styles.activeTab : styles.text}>Video</Text>
          <View style={videoTab ? styles.activeDot : null}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {allTab && (
          <View style={styles.all}>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{ uri: image }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{ uri: image2 }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{ uri: image }}
                resizeMode="cover"
              />
            </View>
          </View>
        )}
        {photoTab && (
          <View style={styles.all}>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{ uri: image2 }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{ uri: image }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{ uri: image2 }}
                resizeMode="cover"
              />
            </View>
          </View>
        )}
         {videoTab && (
          <View style={styles.all}>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{ uri: image2 }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{ uri: image2}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{ uri: image }}
                resizeMode="cover"
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  type: {
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 20,
  },
  textBtn: {
    padding: 10,
    marginLeft: 20,
    flexDirection: "column",
    alignContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.lightGrey,
  },
  activeTab: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.black,
  },
  activeDot: {
    height: 5,
    width: 5,
    backgroundColor: colors.purple,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 2,
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    marginTop: 20,
  },
  all: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 5,
  },
});
