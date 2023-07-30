import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";

const image = require("../../assets/onboarding/motorcycle.png");

const SuccessfulRegister = ({ navigation }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image source={image} style={[styles.image, { resizeMode: "contain" }]} />
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Selamat!</Text>
          <Text style={styles.title}>Anda sudah berhasil mendaftar</Text>
        </View>
        <Text style={styles.description}>
          Silahkan periksa email anda untuk melakukan verifikasi sebelum
          melakukan Login.
        </Text>
      </View>
    </View>
  );
};

export default SuccessfulRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 3,
    marginTop: 80,
    marginBottom: 20,
    height: 300,
    alignSelf: "center",
  },
  textContainer: {
    flex: 3,
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 0,
    color: "#000000",
    textAlign: "center",
    paddingHorizontal: 60,
  },
  description: {
    fontWeight: "500",
    color: "#000000",
    textAlign: "center",
    paddingHorizontal: 60,
  },
});
