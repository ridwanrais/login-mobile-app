import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Linking from 'expo-linking';

import Onboarding from "./components/onboarding/Onboarding";
import Register from "./components/register/Register";
import SuccessfulRegister from "./components/register/SuccessfulRegister";
import Login from "./components/login/Login";

const Stack = createStackNavigator();
const prefix = Linking.createURL('/');

const App = () => {
  const linking = {
    prefixes: [prefix],
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName="Login">
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
        <Stack.Screen
        name="SuccessfulRegister"
        component={SuccessfulRegister}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="Login"
        component={Login}
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
