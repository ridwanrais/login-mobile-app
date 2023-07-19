import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState, useEffect, useRef } from "react";

export default function PrimaryTextInput({ placeholder = 'default' }) {
  const [name, SetName] = useState("");

  return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(value) => SetName(value)}
      />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 50,
    borderWidth: 3,
    borderColor: "#555",
    borderRadius: 10,
    opacity: 0.5,
    // textAlign: "center",
    paddingLeft: 15,
    fontSize: 17,
    marginBottom: 15
  },
});
