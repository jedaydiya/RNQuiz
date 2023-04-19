import React from "react";
import { View, Text, Button, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
type Props = {};

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <>
      <View>
        <Pressable
          className="p-4 m-2 bg-yellow-400 rounded-lg"
          onPress={() => {
            navigation.navigate("Quiz");
          }}
        >
          <Text className="text-center text-black">Math Quiz</Text>
        </Pressable>

        <Pressable
          className="p-4 m-2 bg-yellow-400 rounded-lg"
          onPress={() => {
            navigation.navigate("Quiz");
          }}
        >
          <Text className="text-center text-black">Multiple Choice Quiz</Text>
        </Pressable>
      </View>
    </>
  );
};

export default HomeScreen;
