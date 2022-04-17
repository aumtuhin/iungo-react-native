import { useState, useEffect } from "react";
import { Image, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

export default function ImagePreview({ uri, onPressHandle }) {
  const [ready, setReady] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      rotate90andFlip();
      setReady(true);
    })();
  }, []);

  const rotate90andFlip = async () => {
    const manipResult = await manipulateAsync(
      uri,
      [{ rotate: 180 }, { flip: FlipType.Vertical }],
      { compress: 1, format: SaveFormat.JPEG }
    );
    setImage(manipResult);
  };

  const createButtonAlert = () =>
    Alert.alert("Discard Media?", "If you go back now you will lose any changes you've made.", [
      {
        text: "Discard",
        onPress: () => onPressHandle(),
        style: 'destructive',
      },
      {
        text: "Save Draft",
        onPress: () => onPressHandle(),
        style: "default",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);

  return (
    <View style={{ backgroundColor: "#000", height: "100%" }}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, {backgroundColor: "rgba(0, 0, 0, 1)"}]} onPress={createButtonAlert}>
          <Ionicons name="chevron-back" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: "#fff"}]}>
        <Feather name="arrow-right" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {ready && image && (
          <Image
            source={{ uri: image.localUri || image.uri }}
            style={styles.image}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "99%",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 1000,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 30,
  },
});
