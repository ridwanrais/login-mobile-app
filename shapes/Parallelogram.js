import { View, StyleSheet } from "react-native";
import TriangleUp from "./triangle";
import TriangleDown from "./triangleDown";

export default function Parallelogram() {
  return (
    <View style={styles.parallelogram}>
      <TriangleUp style={styles.parallelogramRight} />
      <View style={styles.parallelogramInner} />
      <TriangleDown style={styles.parallelogramLeft} />
    </View>
  );
}

const styles = StyleSheet.create({
  parallelogram: {
    width: 150,
    height: 100,
  },
  parallelogramInner: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "red",
    width: 150,
    height: 100,
  },
  parallelogramRight: {
    top: 0,
    right: -50,
    position: "absolute",
  },
  parallelogramLeft: {
    top: 0,
    left: -50,
    position: "absolute",
  },
});
