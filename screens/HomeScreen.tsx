import React, { useState, useEffect, useContext } from "react";
import { View, Text, Button, Pressable, ScrollView } from "react-native";

import { useNavigation, useIsFocused } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import MathQuizIcon from "../assets/calculator.svg";
import RandomQuizIcon from "../assets/studying.svg";
import { MotiView, AnimatePresence, motify } from "moti";
import { useFonts } from "expo-font";
import QuizContext from "../useContext/QuizContext";
import RandomQuizContext from "../useContext/RandomQuizContext"
type Props = {};

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    TiltWarp: require("../assets/fonts/TiltWarp-Regular.ttf"),
  });
  // React Navigation Hook because React Navigation does not unmount the last screen when use go to another screen
  const { score } = useContext(QuizContext);
  const { randomQuizScore } = useContext(RandomQuizContext);
  const isFocused = useIsFocused();
  const key = isFocused ? Date.now() : null;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  if (!fontsLoaded) {
    return null;
  }
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
                className="mx-4 my-2 rounded-lg border-4 bg-gray-50"
              >
                <MathQuizIcon width={400} height={300} />
                <Text
                  style={{ fontFamily: "TiltWarp" }}
                  className="mx-2 px-2 text-xl"
                >
                  Math Quiz
                </Text>
                {score ? (
                  <Text
                    style={{ fontFamily: "TiltWarp" }}
                    className="text-md mx-2 px-2"
                  >
                    Score:{score}
                  </Text>
                ) : (
                  <Text
                    style={{ fontFamily: "TiltWarp" }}
                    className="text-md mx-2 px-2"
                  >No Progress</Text>
                )}
                <Pressable
                  className="m-2 rounded-lg bg-green-600 p-4"
                  onPress={() => {
                    navigation.navigate("Quiz");
                  }}
                >
                  <Text
                    style={{ fontFamily: "TiltWarp" }}
                    className="text-center text-black"
                  >
                    Take Quiz
                  </Text>
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
                className="mx-4 my-2 rounded-lg border-4 bg-gray-50"
              >
                <RandomQuizIcon width={400} height={300} />
                <Text
                  style={{ fontFamily: "TiltWarp" }}
                  className="mx-2 px-2 text-xl"
                >
                  Multiple Choice
                </Text>
                {randomQuizScore ? (
                  <Text
                    style={{ fontFamily: "TiltWarp" }}
                    className="text-md mx-2 px-2"
                  >
                    Score:{randomQuizScore}
                  </Text>
                ) : (
                  <Text
                    style={{ fontFamily: "TiltWarp" }}
                    className="text-md mx-2 px-2"
                  >No Progress</Text>
                )}

                <Pressable
                  className="m-2 rounded-lg bg-green-600 p-4"
                  onPress={() => {
                    navigation.navigate("MultipleChoice");
                  }}
                >
                  <Text
                    style={{ fontFamily: "TiltWarp" }}
                    className="text-center text-black"
                  >
                    Take Quiz
                  </Text>
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
