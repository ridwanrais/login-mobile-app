import {
  StyleSheet,
  View,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";

export default function SecondaryButton({ text = 'default', pressFunction }) {
  // const { width } = useWindowDimensions();

  return (
    <Pressable
      onPress={pressFunction}
      hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      android_ripple={{ color: "#3498DB" }}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? "#ADD8E6" : "#FFFFFF" },
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
    backgroundColor: "#FFFFFF",
    borderColor: "#3498DB",
    borderWidth: 2,
    borderRadius: 5,
  },
  text: {
    fontWeight: "400",
    color: "#3498DB",
  },
});
