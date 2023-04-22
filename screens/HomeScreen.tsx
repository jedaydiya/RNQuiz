import React from "react";
import { View, Text, Button, Pressable, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import MathQuizIcon from "../assets/calculator.svg";
import RandomQuizIcon from "../assets/studying.svg";
type Props = {};

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <>
      <ScrollView>
        <View className="mx-4 my-2 border-4 rounded-lg bg-gray-50">
          <MathQuizIcon width={400} height={300} />
          <Text className="px-2 mx-2 text-xl">Math Quiz</Text>
          <Pressable
            className="p-4 m-2 bg-yellow-400 rounded-lg"
            onPress={() => {
              navigation.navigate("Quiz");
            }}
          >
            <Text className="text-center text-black">Take Quiz</Text>
          </Pressable>
        </View>

        <View className="mx-4 my-2 border-4 rounded-lg bg-gray-50">
          <RandomQuizIcon width={400} height={300} />
          <Text className="px-2 mx-2 text-xl">Multiple Choice</Text>
          <Pressable
            className="p-4 m-2 bg-yellow-400 rounded-lg"
            onPress={() => {
              navigation.navigate("MultipleChoice");
            }}
          >
            <Text className="text-center text-black">Take Quiz</Text>
          </Pressable>
        </View>
        <Text className="text-center text-slate-700">
          Created by jedaydiya.dev
        </Text>
        <Text className="text-center text-slate-700">
          Illustrations by popsy.co
        </Text>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
