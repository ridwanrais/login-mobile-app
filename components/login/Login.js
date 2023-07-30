import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import PrimaryTextInput from "../textInputs/PrimaryTextInput";
import PrimaryButton from "../buttons/PrimaryButton";

const image = require("../../assets/onboarding/handshake.png");

const Login = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emptyFieldValidation = async (fieldName, value) => {
    let errorMessage = "";

    if (value === "") {
      errorMessage = `${fieldName} can't be empty.`;
    }

    switch (fieldName) {
      case "Email":
        setEmailError(errorMessage);
        break;
      case "Password":
        setPasswordError(errorMessage);
        break;
    }
  };

  return (
    <View style={[styles.container, { width }]}>
      <Image source={image} style={[styles.image, { resizeMode: "contain" }]} />
      <View style={styles.textInputContainer}>
        <PrimaryTextInput
          style={[styles.textInput, { width }]}
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
          onBlur={() => emptyFieldValidation("Email", email)}
          isEmail={true}
          error={emailError}
        />
        <PrimaryTextInput
          style={[styles.textInput, { width, marginBottom: 5 }]}
          placeholder="Password"
          onChangeText={(value) => {
            setPassword(value);
          }}
          onBlur={() => emptyFieldValidation("Password", password)}
          isPassword={true}
          error={passwordError}
        />
        <Text style={styles.forgetPassword}>Lupa password?</Text>
      </View>
      <View style={[styles.buttonContainer, { width: width * 0.9 }]}>
        <PrimaryButton text="Masuk" />
      </View>
      <View style={styles.footer}>
        <Text>Belum punya akun?</Text>
        <TouchableOpacity
          style={styles.registerLinkContainer}
          onPress={() => {
            navigation.replace("Register");
          }}
        >
          <Text style={styles.registerLinkText}> Mendaftar </Text>
        </TouchableOpacity>
        <Text>sekarang</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  image: {
    marginTop: 80,
    marginBottom: 20,
    height: 300,
    alignSelf: "center",
  },
  textInputContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  textInput: {
    marginBottom: 20,
  },
  forgetPassword: {
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    fontSize: 12,
  },
  buttonContainer: {
    alignSelf: "center",
  },
  button: {
    width: "90%",
  },
  footer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  registerLinkContainer: {
  },
  registerLinkText: {
    color: "#3498DB"
  }
});
