import { StyleSheet } from "react-native";
import Triangle from "./triangle";

export default function TriangleDown() {
  return <Triangle style={styles.triangleDown} />;
}

const styles = StyleSheet.create({
  triangleDown: {
    transform: [{ rotate: "180deg" }],
  },
});
