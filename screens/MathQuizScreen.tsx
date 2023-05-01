import React from "react";
import { View, Text, Pressable } from "react-native";
type Props = {};

const MathQuizScreen = (props: Props) => {
  return (
    <>
      <View className="mt-8">
        <Text className="text-4xl text-center">This the Math Quiz</Text>
        <Pressable className="p-4 mx-4 my-2 bg-transparent border-2 border-black rounded-lg">
          <Text className="text-lg">Choice 1</Text>
        </Pressable>
        <Pressable className="p-4 mx-4 my-2 bg-transparent border-2 border-black rounded-lg">
          <Text className="text-lg">Choice 2</Text>
        </Pressable>
        <Pressable className="p-4 mx-4 my-2 bg-transparent border-2 border-black rounded-lg">
          <Text className="text-lg">Choice 3</Text>
        </Pressable>
        <Pressable className="p-4 mx-4 my-2 bg-transparent border-2 border-black rounded-lg">
          <Text className="text-lg">Choice 4</Text>
        </Pressable>
      </View>
    </>
  );
};

export default MathQuizScreen;
