import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ImagePreview from "../components/Camera/ImagePreview";

export default function CameraScreen({ navigation }) {
  const camera = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isFlash, setIsFlash] = useState(false);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [uri, setUri] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const setFlashMode = () => {
    if (isFlash) {
      setFlash(Camera.Constants.FlashMode.off);
      setIsFlash(false);
    } else {
      setFlash(Camera.Constants.FlashMode.on);
      setIsFlash(true);
    }
  };

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const onSnap = async () => {
    if (camera.current) {
      const options = { quality: 0.7, base64: true };
      const data = await camera.current.takePictureAsync(options);
      setUri(data.uri);
      setIsPreview(true);
    }
  };

  const cancelPreview = async () => {
    setIsPreview(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isPreview && (
        <Camera
          type={type}
          style={styles.camera}
          ratio="16:9"
          ref={camera}
          onCameraReady={onCameraReady}
          flashMode={flash}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Home")}
            >
              <AntDesign name="close" size={30} color="white" />
            </TouchableOpacity>
            {isFlash ? (
              <TouchableOpacity style={styles.button} onPress={setFlashMode}>
                <Ionicons name="ios-flash" size={30} color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={setFlashMode}>
                <Ionicons name="ios-flash-off" size={30} color="white" />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={() => switchCamera()}
            >
              <AntDesign name="retweet" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.captureButton}
            activeOpacity={0.7}
            disabled={!isCameraReady}
            onPress={onSnap}
          ></TouchableOpacity>
        </Camera>
      )}
      {isPreview && (
        <ImagePreview uri={uri} onPressHandle={cancelPreview} navigation={navigation} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  camera: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  buttonContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    height: 40,
    width: 40,
  },
  captureButton: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    alignSelf: "center",
    bottom: 30,
    height: 65,
    width: 65,
    borderRadius: 50,
    backgroundColor: "#fff",
    opacity: 0.7,
  },
  cancelPreviewbutton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  imagePreviewContainer: {
    height: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  previewButtonContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 1000,
  },
  previewButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 1)",
  }
});
