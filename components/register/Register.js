import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  useWindowDimensions,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

import PrimaryTextInput from "../textInputs/PrimaryTextInput";
import PrimaryButton from "../buttons/PrimaryButton";

const image = require("../../assets/onboarding/motorcycle.png");

const Register = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");

  const passwordValidation = async () => {
    // Check if password and confirmPassword are empty
    if (password === '' || confirmPassword === '') {
      setPasswordError('');
      return;
    }
  
    // Check if password matches confirmPassword
    if (password !== confirmPassword) {
      setPasswordError("Password does not match.");
      return;
    } else {
      setPasswordError(""); // Reset the password error if passwords match
    }
  };

  useEffect(() => {
    passwordValidation();
  }, [password, confirmPassword])

  const handleRegister = async () => {
    console.log("name", name);
    console.log("email", email);
    console.log("phoneNumber", phoneNumber);
    console.log("password", password);
    console.log("confirmPassword", confirmPassword);

    if (password !== confirmPassword) {
      Alert.alert(
        "Error",
        "Password does not match the confirmation password."
      );
      return;
    }

    const url = "http://ec2-43-218-143-86.ap-southeast-3.compute.amazonaws.com:8080/api/v1/accounts";

    const requestBody = {
      email: email,
      username: name,
      phone_number: phoneNumber,
      password: password,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (data.error) {
        Alert.alert(
          "Error",
          data.error
        );
      } else {
        Alert.alert(
          "Success",
          "Registration Successful"
        );
      }

      console.log('data', data);

      // Handle the response data as needed (e.g., show a success message or error)
      console.log(data);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={[{ width, paddingVertical: 20 }]}>
      <Image source={image} style={[styles.image, { resizeMode: "contain" }]} />
      <View style={styles.textInputContainer}>
        <PrimaryTextInput
          style={[styles.textInput, { width }]}
          placeholder="Nama Lengkap"
          onChangeText={(value) => setName(value)}
        />
        <PrimaryTextInput
          style={[styles.textInput, { width }]}
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
          isEmail={true}
        />
        <PrimaryTextInput
          style={[styles.textInput, { width }]}
          placeholder="Nomor HP"
          onChangeText={(value) => setPhoneNumber(value)}
        />
        <PrimaryTextInput
          style={[styles.textInput, { width }]}
          placeholder="Password"
          onChangeText={(value) => {
            setPassword(value);
          }}
          isPassword={true}
          isNewPassword={true}
          error={passwordError}
        />
        <PrimaryTextInput
          style={[styles.textInput, { width }]}
          placeholder="Konfirmasi Password"
          onChangeText={(value) => {
            setConfirmPassword(value);
          }}
          isPassword={true}
        />
      </View>
      <View style={[styles.buttonContainer, { width: width * 0.9 }]}>
        <PrimaryButton
          style={[styles.button]}
          text="Mendaftar"
          pressFunction={handleRegister}
        />
      </View>
      <Text style={styles.footer}>Sudah punya akun? silahkan masuk</Text>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputContainer: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    marginTop: 80,
    marginBottom: 20,
    height: 300,
    alignSelf: "center",
  },
  buttonContainer: {
    alignSelf: "center",
  },
  button: {
    width: "90%",
  },
  textInput: {
    marginBottom: 20,
  },
  footer: {
    marginTop: 10,
    textAlign: "center",
  },
});
