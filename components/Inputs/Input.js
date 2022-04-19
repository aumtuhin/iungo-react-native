import { StyleSheet, TextInput } from "react-native";

export default function Input({ isSecureText, placeHolderText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeHolderText}
      secureTextEntry={isSecureText}
      placeholderTextColor="#fff"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingHorizontal: 15,
    width: "80%",
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 10,
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: "rgba(245, 243, 242, .2)",
    color: "#fff",
  },
});
