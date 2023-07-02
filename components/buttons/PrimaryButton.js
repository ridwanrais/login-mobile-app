import { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

export default function PrimaryButton({ text, pressFunction }) {
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity onPress={pressFunction}>
      <View style={[styles.container, { width: width * 0.9 }]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
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
