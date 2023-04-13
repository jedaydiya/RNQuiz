import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { supabase } from "./supabase";
import "react-native-url-polyfill/auto";
import TodoList from "./TodoList";
export default function App() {
  return (
    <View style={styles.container}>
      <TodoList />
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
});
