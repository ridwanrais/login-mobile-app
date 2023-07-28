import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native"; // Import Text and View from react-native
import EyeIcon from "../icons/EyeIcon";

export default function PrimaryTextInput({
  value,
  onChangeText,
  placeholder = "default",
  isPassword = false,
  isNewPassword = false,
  isSecureTextEntry = false,
  isEmail = false,
  error = "", // New prop to hold the error message
  style,
  onBlur,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevValue) => !prevValue);
  };

  return (
    <View style={[style, styles.container]}>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput
        style={[styles.input, error ? styles.errorInput : null]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...(isNewPassword ? { autoComplete: "new-password" } : {})}
        {...(isEmail ? { autoComplete: "email" } : {})}
        secureTextEntry={!isPasswordVisible}
        onBlur={onBlur}
      />
      {isPassword ? (
        <EyeIcon
          style={styles.eyeIcon}
          onPress={togglePasswordVisibility}
          isVisible={isPasswordVisible}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 3,
    borderColor: "#555",
    borderRadius: 10,
    opacity: 0.5,
    paddingLeft: 15,
    fontSize: 17,
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    left: 20,
    alignSelf: "flex-start",
    color: "red",
    fontSize: 14,
    top: -18,
    marginBottom: 8,
    position: "absolute",
  },
  eyeIcon: {
    position: "absolute",
    right: 30,
    top: "50%", // Add this line to vertically center the icon
    marginTop: -12, // Add this line to vertically center the icon
    opacity: 0.5,
  },
});
