import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Modal, TouchableOpacity, Pressable, StyleSheet, SafeAreaView } from "react-native";
import { MotiView, AnimatePresence } from "moti";
import { useFonts } from 'expo-font';

type Props = {};
interface RandomQuestions {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
}
const RandomQuizScreen = (props: Props) => {
  const [fontsLoaded] = useFonts({
    'TiltWarp': require('../assets/fonts/TiltWarp-Regular.ttf'),
  });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isPressed, setIsPressed] = useState(false);
  const [currentQuestions, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const questions: RandomQuestions[] = [
    {
      id: 1,
      text: "What is the capital of France?",
      options: ["London", "Helsinki", "Stockholm", "Manila"],
      correctAnswerIndex: 0,
    },
    {
      id: 2,
      text: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Uranus"],
      correctAnswerIndex: 1,
    },
    {
      id: 3,
      text: "Who painted the Mona Lisa?",
      options: [
        "Vincent Van Gogh",
        "Pablo Picasso",
        "Leonardo Da Vinci",
        "Claude Monet",
      ],
      correctAnswerIndex: 2,
    },
    {
      id: 4,
      text: "Which country is home to the kangaroo?",
      options: ["South Korea", "Japan", "Malaysia", "Australia"],
      correctAnswerIndex: 3,
    },
    {
      id: 5,
      text: "What is the capital of Spain?",
      options: ["Madrid", "Barcelona", "Valencia", "Seville"],
      correctAnswerIndex: 0,
    },
  ];
  const handleOptionSelect = (optionId: number) => {
    setSelectedOption((prevSelectedOption) =>
      prevSelectedOption === optionId ? null : optionId
    );
    console.log(optionId);
  };
  const handlePressIn = () => {
    setIsPressed(true);
  };
  const handlePressOut = () => {
    setIsPressed(false);
  };
  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestions].correctAnswerIndex) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestions + 1 < questions.length) {
      setCurrentQuestion(currentQuestions + 1);
    } else {
      setShowModal(true);
    }
  };
  useEffect(() => {
    const progress = (currentQuestions / questions.length) * 100;
    setProgress(progress);
  }, [currentQuestions, fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <SafeAreaView className="mt-10">
        <View className="mx-4 my-2">
          <View className="flex-row justify-between p-2">
            <Text style={{ fontFamily: 'TiltWarp' }} className="text-md">Progress</Text>
            <Text style={{ fontFamily: 'TiltWarp' }} className="text-md">
              {currentQuestions}/{questions.length}
            </Text>
          </View>
          <View className="m-1 h-2 rounded-full bg-slate-200 p-2">
            <MotiView
              from={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "timing", duration: 500 }}
              className="absolute -left-1 top-0 h-full rounded-full border border-black bg-green-600 p-2"
            ></MotiView>
          </View>
          <View className="z-3 m-1 mx-6 mb-4 mt-8 rounded-lg border border-black bg-green-100 p-20"></View>
          <View className="z-4 m-1 mx-4 -mt-40 mb-4 rounded-lg border border-black bg-green-200 p-20"></View>
          <View className="z-5 m-1 -mt-40 rounded-lg border border-black bg-green-300 p-20">
            <Text style={{ fontFamily: 'TiltWarp' }} className="text-extrabold text-center text-2xl">{questions[currentQuestions].text}</Text>
          </View>
        </View>
        <View>
          <View className="mx-4 my-2">
            <AnimatePresence>
              {questions[currentQuestions].options.map((option, index) => (
                <MotiView
                  from={{ scale: 1 }}
                  animate={{ scale: selectedOption === index ? 0.95 : 1 }}
                  transition={{
                    loop: selectedOption === index ? true : false,
                    type: "timing",
                    duration: 500,
                  }}
                  key={index}
                  className="w-full"
                >
                  <TouchableOpacity
                    key={index}
                    className={
                      selectedOption === index
                        ? "m-1 flex items-center justify-center rounded-lg border-2 border-green-800 bg-green-300 p-4"
                        : "m-1 flex items-center justify-center rounded-lg border-2 border-green-600 bg-transparent p-4"
                    }
                    onPress={() => handleOptionSelect(index)}
                  >
                    <Text
                      style={{ fontFamily: 'TiltWarp' }}
                      className={
                        selectedOption === index
                          ? "text-center text-md text-slate-950"
                          : "text-center text-md text-slate-800"
                      }
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                </MotiView>
              ))}
            </AnimatePresence>
          </View>
          <Pressable
            onPress={handleSubmit}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            disabled={selectedOption === null}
            className={
              isPressed
                ? "mx-4 my-2  rounded-lg bg-green-300 p-5"
                : "mx-4 my-2 rounded-lg border-2 border-green-600 bg-transparent p-5"
            }
          >
            <Text style={{ fontFamily: 'TiltWarp' }} className="text-md text-center text-black">
              Next
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RandomQuizScreen;
