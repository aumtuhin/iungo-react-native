import { View, Image, StyleSheet } from "react-native";

export default function Saved({ Photos }) {
  return (
    <View style={styles.container}>
      {Photos.map((photo) => {
        return (
          <View style={styles.item} key={photo.id}>
            <Image
              style={styles.image}
              source={{ uri: photo.url }}
              resizeMode="cover"
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: Platform.OS === 'android' ? 12: null,
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
