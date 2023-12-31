import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  useWindowDimensions,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Linking from "expo-linking";

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

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const emptyFieldValidation = async (fieldName, value) => {
    let errorMessage = "";

    if (value === "") {
      errorMessage = `${fieldName} can't be empty.`;
    }

    switch (fieldName) {
      case "Name":
        setNameError(errorMessage);
        break;
      case "Email":
        setEmailError(errorMessage);
        break;
      case "Password":
        setPasswordError(errorMessage);
        break;
    }
  };

  const passwordValidation = async () => {
    // Check if password and confirmPassword are empty
    if (password === "" || confirmPassword === "") {
      setPasswordError("");
      return;
    }

    // Check if password matches confirmPassword
    if (password !== confirmPassword) {
      setPasswordError("Password does not match.");
    } else {
      setPasswordError(""); // Reset the password error if passwords match
    }
  };

  const emailValidation = async () => {
    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== "" && !emailRegex.test(email)) {
      setEmailError("Invalid email");
    } else {
      setEmailError(""); // Reset the password error if passwords match
    }
  };

  useEffect(() => {
    passwordValidation();
  }, [password, confirmPassword]);

  useEffect(() => {
    emailValidation();
  }, [email]);

  useEffect(() => {
    // Enable or disable the button based on if there's any error
    setIsButtonDisabled(
      emailError !== "" ||
        passwordError !== "" ||
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    );
  }, [name, email, password, confirmPassword, emailError, passwordError]);

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

    const url =
      "http://ec2-43-218-143-86.ap-southeast-3.compute.amazonaws.com:8080/api/v1/accounts";
    // const url ="https://02429ca9-b7b3-474a-8f58-96d7f3ed4cd7.mock.pstmn.io/api/v1/accounts";

    const requestBody = {
      email: email,
      username: name,
      phone_number: phoneNumber,
      password: password,
    };

    try {
      const link = Linking.createURL('/verify-account')
      console.log('verfy base url: ' + link);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Verify-Url": link,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (data.error) {
        Alert.alert("Error", data.error);
      } else {
        navigation.navigate("SuccessfulRegister");
      }

      // Handle the response data as needed (e.g., show a success message or error)
      console.log(data);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        { width, paddingVertical: 20, alignItems: "center" },
      ]}
    >
      <Image source={image} style={[styles.image, { resizeMode: "contain" }]} />
      <View style={styles.textInputContainer}>
        <PrimaryTextInput
          style={[styles.textInput, { width }]}
          placeholder="Nama Lengkap"
          onChangeText={(value) => {
            setName(value);
            setNameError("");
          }}
          onBlur={() => emptyFieldValidation("Name", name)}
          error={nameError}
        />
        <PrimaryTextInput
          style={[styles.textInput, { width }]}
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
          onBlur={() => emptyFieldValidation("Email", email)}
          isEmail={true}
          error={emailError}
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
          onBlur={() => emptyFieldValidation("Password", password)}
          isPassword={true}
          isNewPassword={true}
          error={passwordError}
        />
        <PrimaryTextInput
          style={[styles.textInput, { width }]}
          placeholder="Konfirmasi Password"
          onChangeText={(value) => {
            setConfirmPassword(value);
            setConfirmPasswordError("");
          }}
          onBlur={() =>
            emptyFieldValidation("Confirm Password", confirmPassword)
          }
          isPassword={true}
          error={confirmPasswordError}
        />
      </View>
      <View style={[styles.buttonContainer, { width: width * 0.9 }]}>
        <PrimaryButton
          style={[styles.button]}
          text="Mendaftar"
          pressFunction={handleRegister}
          disabled={isButtonDisabled}
        />
      </View>
      <View style={styles.footer}>
        <Text>Sudah punya akun? silahkan</Text>
        <TouchableOpacity
          style={styles.registerLinkContainer}
          onPress={() => {
            navigation.replace("Login");
          }}
        >
          <Text style={styles.registerLinkText}> masuk</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 40,
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
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  registerLinkContainer: {},
  registerLinkText: {
    color: "#3498DB",
  },
});
