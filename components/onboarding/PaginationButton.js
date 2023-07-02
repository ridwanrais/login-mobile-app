import { useEffect, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function PaginationButton({
  text,
  scrollNext,
  scrollPrev,
  isButtonVisible
}) {
  return (
    <View style={styles.container}>
      {isButtonVisible && (
        <TouchableOpacity onPress={scrollNext ? scrollNext : scrollPrev}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "400",
    color: "#3498DB",
  },
});
