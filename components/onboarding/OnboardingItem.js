import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";

export default function OnboardingItem({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { resizeMode: "contain" }]}
      />

      <View style={{ flex: 2}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 3,
    width: "90%",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
    height: 300,
  },
  title: {
    fontWeight: "800",
    fontSize: 20,
    marginBottom: 20,
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
