import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../shared/styles";

export default function Search({ placeHolderText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeHolderText}
        placeholderTextColor={colors.black}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginTop: 20,
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
  },
  input: {
    height: 40,
    paddingHorizontal: 15,
    width: "90%",
    borderWidth: 1,
    borderColor: colors.lightRed,
    marginTop: 10,
    borderRadius: 4,
    fontSize: 16,
    color: colors.black,
    backgroundColor: colors.lightRed
  },
});
