import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../shared/style";

export default function DetailsArea() {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.countContainer}>
        <TouchableOpacity style={styles.countBtn} activeOpacity={0.5}>
          <Text style={styles.count}>43k</Text>
          <Text style={styles.countText}>Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.countBtn} activeOpacity={0.5}>
          <Text style={styles.count}>4k</Text>
          <Text style={styles.countText}>Following</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.intro}>
        <Text style={styles.name}>Sophia Maria</Text>
        <Text style={styles.motto}>
          "I love photography. It makes me feel one with nature"
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginTop: 8,
    marginLeft: 50,
    marginRight: 50,
    paddingBottom: 10,
  },
  countContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countBtn: {
    alignItems: "center",
  },
  count: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.grey,
  },
  countText: {
    color: colors.grey,
  },
  intro: {
    marginTop: 20,
    alignItems: "center",
  },
  name: {
    textAlign: "center",
    color: colors.grey,
    fontSize: 18,
    fontWeight: "500",
  },
  motto: {
    textAlign: "center",
    color: colors.grey,
    marginTop: 5,
    fontSize: 15,
  },
});
