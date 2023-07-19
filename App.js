import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "./components/onboarding/Onboarding";
import Register from "./components/register/Register";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
