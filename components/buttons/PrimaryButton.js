import { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";

export default function PrimaryButton({ text = 'default', pressFunction }) {
  // const { width } = useWindowDimensions();

  return (
    <Pressable
      onPress={pressFunction}
      hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      android_ripple={{ color: "#00f" }}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? "#ADD8E6" : "#3498DB" },
        // { width: width * 0.9 },
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#3498DB",
    borderColor: "#3498DB",
    borderWidth: 2,
    borderRadius: 5,
  },
  text: {
    fontWeight: "400",
    color: "#FFFFFF",
  },
});
