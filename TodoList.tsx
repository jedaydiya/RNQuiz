import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { supabase } from "./supabase";
import "react-native-url-polyfill/auto";

type Item = {
  id: number;
  description: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const { data, error } = await supabase.from("Items").select("*");
      if (error) {
        console.log(error);
      } else {
        setItems(data as Item[]);
        console.log(items);
      }
    };
    getItems();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      {items.map((item) => (
        <View key={item.id}>
          <Text>{item.description}</Text>
          <Text>{item.completed}</Text>
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
