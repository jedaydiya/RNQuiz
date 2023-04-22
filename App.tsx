import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { supabase } from "./supabase";
import "react-native-url-polyfill/auto";
import TodoList from "./TodoList";
import HomeScreen from "./screens/HomeScreen";
import MathQuizScreen from "./screens/MathQuizScreen";
import RandomQuizScreen from "./screens/RandomQuizScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


// Parameter for type-safety in Stack Navigation
export type RootStackParams = {
  Home: undefined;
  Quiz: undefined;
  MultipleChoice: undefined;
};
export default function App() {
  const Stack = createNativeStackNavigator<RootStackParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Quiz"
          component={MathQuizScreen}
          options={{ headerTitle: "Math Quiz", headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="MultipleChoice"
          component={RandomQuizScreen}
          options={{
            headerTitle: "Multiple Choice Quiz",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
