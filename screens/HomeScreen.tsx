import React, { useState, useEffect } from "react";
import { View, Text, Button, Pressable, ScrollView } from "react-native";

import { useNavigation, useIsFocused } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import MathQuizIcon from "../assets/calculator.svg";
import RandomQuizIcon from "../assets/studying.svg";
import { MotiView, AnimatePresence, motify } from "moti";
import { useFonts } from "expo-font";
type Props = {};

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    'TiltWarp': require('../assets/fonts/TiltWarp-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  // React Navigation Hook because React Navigation does not unmount the last screen when use go to another screen
  const isFocused = useIsFocused();
  const key = isFocused ? Date.now() : null;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <>
      <ScrollView className="mt-8">
        <AnimatePresence key={key}>
          {isFocused && (
            <>
              <MotiView
                from={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  delay: 200,
                }}
                className="mx-4 my-2 border-4 rounded-lg bg-gray-50"
              >
                <MathQuizIcon width={400} height={300} />
                <Text style={{ fontFamily: 'TiltWarp' }} className="px-2 mx-2 text-xl">Math Quiz</Text>
                <Pressable
                  className="p-4 m-2 bg-green-600 rounded-lg"
                  onPress={() => {
                    navigation.navigate("Quiz");
                  }}
                >
                  <Text style={{ fontFamily: 'TiltWarp' }} className="text-center text-black">Take Quiz</Text>
                </Pressable>
              </MotiView>

              <MotiView
                from={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  delay: 300,
                }}
                className="mx-4 my-2 border-4 rounded-lg bg-gray-50"
              >
                <RandomQuizIcon width={400} height={300} />
                <Text style={{ fontFamily: 'TiltWarp' }} className="px-2 mx-2 text-xl">Multiple Choice</Text>
                <Pressable
                  className="p-4 m-2 bg-green-600 rounded-lg"
                  onPress={() => {
                    navigation.navigate("MultipleChoice");
                  }}
                >
                  <Text style={{ fontFamily: 'TiltWarp' }} className="text-center text-black">Take Quiz</Text>
                </Pressable>
              </MotiView>
            </>
          )}
        </AnimatePresence>

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
