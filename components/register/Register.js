import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";

import PrimaryTextInput from "../textInputs/PrimaryTextInput";
import PrimaryButton from "../buttons/PrimaryButton";

const image = require("../../assets/onboarding/motorcycle.png");

const Register = ({ navigation }) => {
  const { width } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={[{ width }]}>
      <Image source={image} style={[styles.image, { resizeMode: "contain" }]} />
      <View style={styles.textInputContainer}>
        <PrimaryTextInput style={styles.textInput} placeholder="Nama Lengkap" />
        <PrimaryTextInput style={styles.textInput} placeholder="Email" />
        <PrimaryTextInput style={styles.textInput} placeholder="Nomor HP" />
        <PrimaryTextInput style={styles.textInput} placeholder="Password" />
        <PrimaryTextInput
          style={styles.textInput}
          placeholder="Konfirmasi Password"
        />
      </View>
      <View style={[styles.buttonContainer, { width: width * 0.9 }]}>
        <PrimaryButton style={[styles.button]} text="Mendaftar" />
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
    marginVertical: 20
  },
  image: {
    marginTop: 100,
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
    // marginBottom: 20
  },
  footer: {
    marginTop: 10,
    textAlign: "center",
  },
});
