import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { supabase } from "./supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto";

// From Supabase
type Item = {
  id: number;
  description: string;
  completed: boolean;
};

// For rendering to local Storage
interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  // This function fetches the data from supabase then saves it to async storage
  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase.from("Items").select("*");
      if (error) {
        console.log(error);
        return;
      }
      setItems(data as Item[]);
      await AsyncStorage.setItem("items", JSON.stringify(data));
    };
    fetchItems();
  }, []);

  // This functions gets the data from asyncStorage

  useEffect(() => {
    const getData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("items");
        if (storedData !== null) {
          setTodos(JSON.parse(storedData));
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      {todos.map((todo) => (
        <View key={todo.id}>
          <Text>{todo.description}</Text>
        </View>
      ))}
    </View>
  );
};
export default TodoList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
