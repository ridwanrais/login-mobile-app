import { StyleSheet, View, Text, Image } from "react-native";

import Onboarding from "./components/onboarding/Onboarding";

const App = () => {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
