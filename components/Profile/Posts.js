import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { colors } from "../../shared/style";
import { Data } from "../../shared/dummyData";
import All from "./All";
import Photos from "./Photos";
import Videos from "./Viedeos";
import Saved from "./Saved";

export default function Posts() {
  const [allTab, setAllTab] = useState(true);
  const [photoTab, setPhtoTab] = useState(false);
  const [videoTab, setVideoTab] = useState(false);
  const [savedTab, setSavedTab] = useState(false);

  const showAll = () => {
    setAllTab(true);
    setPhtoTab(false);
    setVideoTab(false);
    setSavedTab(false);
  };

  const showPhoto = () => {
    setAllTab(false);
    setPhtoTab(true);
    setVideoTab(false);
    setSavedTab(false);
  };

  const showVideo = () => {
    setAllTab(false);
    setPhtoTab(false);
    setVideoTab(true);
    setSavedTab(false);
  };

  const showSaved = () => {
    setAllTab(false);
    setPhtoTab(false);
    setVideoTab(false);
    setSavedTab(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.type}>
        <View style={styles.leftBtns}>
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
        <View style={styles.rightBtns}>
          <TouchableOpacity style={styles.textBtn} onPress={showSaved}>
            <Text style={savedTab ? styles.activeTab : styles.text}>Saved</Text>
            <View style={savedTab ? styles.activeDot : null}></View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        {allTab && <All Photos={Data} />}
        {photoTab && <Photos Photos={Data} />}
        {videoTab && <Videos Photos={Data} />}
        {savedTab && <Saved Photos={Data} />}
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
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  leftBtns: {
    flexDirection: "row",
  },
  textBtn: {
    padding: 10,
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
    marginLeft: 15,
    marginRight: 15,
  },
});
