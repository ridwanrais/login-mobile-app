import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const image = require("../../assets/onboarding/motorcycle.png");

const AccountVerification = () => {
  const route = useRoute();
  const { params } = route;

  console.log("params", params);

  const handleVerification = async (id) => {
    const url =
      `http://ec2-43-218-143-86.ap-southeast-3.compute.amazonaws.com:8080/api/v1/accounts/verify?id=${encodeURIComponent(id)}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Verification successful:", data);
    } else {
      console.error("Verification failed:", response.statusText);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={image} style={[styles.image, { resizeMode: "contain" }]} />
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Selamat!</Text>
          <Text style={[styles.title, { fontSize: 18 }]}>
            Akun Anda telah terverifikasi
          </Text>
        </View>
        <Text style={styles.description}>
          Sayangnya, tidak ada yang bisa Anda lihat setelah ini. Kunjungi page
          GitHub saya untuk melihat project-project lainnya.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text>Ingin menggunakan akun lain?</Text>
        <View style={styles.linkContainer}>
          <Text>Silahkan</Text>
          <TouchableOpacity
            style={styles.registerLink}
            onPress={() => {
              navigation.replace("Login");
            }}
          >
            <Text style={styles.registerLinkText}> masuk </Text>
          </TouchableOpacity>
          <Text>atau</Text>
          <TouchableOpacity
            style={styles.registerLink}
            onPress={() => {
              navigation.replace("Register");
            }}
          >
            <Text style={styles.registerLinkText}> mendaftar </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AccountVerification;

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
  footer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  linkContainer: {
    flexDirection: "row", // This sets the child elements to be in a row
    flexWrap: "wrap", // This allows the child elements to wrap to the next line when they exceed the container width
    alignItems: "center", // This centers the child elements vertically
    justifyContent: "center", // This centers the child elements horizontally
    marginTop: 5, // You can adjust the spacing as needed
  },
  registerLink: {
    marginHorizontal: 2, // Add horizontal spacing between links
  },
  registerLinkText: {
    fontWeight: "bold",
    color: "#3498DB",
  },
});
