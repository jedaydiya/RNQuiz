import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Modal,
  SafeAreaView,
} from "react-native";
import { MotiView, AnimatePresence } from "moti";
import ModalQuizIcon from "../assets/taking-notes.svg";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import QuizContext from "../useContext/QuizContext";
type Props = {};

interface MathQuestions {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  isAnswered: boolean;
}

const MathQuizScreen = (props: Props) => {
  const [fontsLoaded] = useFonts({
    TiltWarp: require("../assets/fonts/TiltWarp-Regular.ttf"),
  });
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isPressed, setIsPressed] = useState(false);
  const [currentQuestions, setCurrentQuestion] = useState(0);
  const { score, setScore } = useContext(QuizContext);
  const [progress, setProgress] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<MathQuestions[]>([]);
  const questions: MathQuestions[] = [
    {
      id: 1,
      text: "2+2",
      options: ["3", "4", "5", "6"],
      correctAnswerIndex: 1,
      isAnswered: false,
    },
    {
      id: 2,
      text: "5x3",
      options: ["8", "10", "15", "18"],
      correctAnswerIndex: 2,
      isAnswered: false,
    },
    {
      id: 3,
      text: "2-2",
      options: ["1", "2", "15", "0"],
      correctAnswerIndex: 3,
      isAnswered: false,
    },
    {
      id: 4,
      text: "5x5",
      options: ["5", "10", "15", "25"],
      correctAnswerIndex: 3,
      isAnswered: false,
    },
    {
      id: 5,
      text: "2x3",
      options: ["2", "4", "6", "8"],
      correctAnswerIndex: 2,
      isAnswered: false,
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
    const currentQuestionObj = shuffledQuestions[currentQuestions];
    if (selectedOption === currentQuestionObj.correctAnswerIndex) {
      setScore(score + 1);
    }
    currentQuestionObj.isAnswered = true;
    setSelectedOption(null);
    // if (selectedOption === questions[currentQuestions].correctAnswerIndex) {
    // setScore(score + 1);
    // }
    if (currentQuestions + 1 < shuffledQuestions.length) {
      setCurrentQuestion(currentQuestions + 1);
    } else {
      setShowModal(true);
    }
  };
  useEffect(() => {
    const shuffleQuestions = () => {
      const unansweredQuestions = questions.filter((question) => !question.isAnswered);
      const shuffled = [...unansweredQuestions];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffledQuestions(shuffled);
    };

    shuffleQuestions();
  }, []);
  useEffect(() => {
    const progress = (currentQuestions / questions.length) * 100;
    setProgress(progress);
  }, [currentQuestions, fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      {showResult ? (
        <View className="mx-4 my-2">
          <Text>Score</Text>
          <Pressable>
            <Text>Main Menu</Text>
          </Pressable>
        </View>
      ) : (
        <View className="mt-10">
          <Modal animationType="slide" transparent={true} visible={showModal}>
            <SafeAreaView className="flex-1 bg-slate-800 opacity-95">
              <View className="m-4 mt-40 flex items-center justify-center rounded-lg border-2 border-black bg-white">
                <Text style={{ fontFamily: 'TiltWarp' }} className="mt-2 text-xl">Your Score</Text>
                <ModalQuizIcon width={400} height={300} />
                <Text style={{ fontFamily: 'TiltWarp' }} className="text-6xl">
                  {score}/{shuffledQuestions.length}
                </Text>
                <Pressable
                  className="m-4 w-1/2 rounded-md border-2 border-green-600 bg-transparent p-4"
                  onPress={() => navigation.navigate("Home")}
                >
                  <Text style={{ fontFamily: 'TiltWarp' }} className="text-xl text-center">Exit</Text>
                </Pressable>
              </View>
            </SafeAreaView>
          </Modal>

          <View className="mx-4 my-2">
            <View className="flex-row justify-between p-2">
              <Text style={{ fontFamily: "TiltWarp" }} className="text-md">
                Progress
              </Text>
              <Text style={{ fontFamily: "TiltWarp" }} className="text-md">
                {currentQuestions + 1}/{shuffledQuestions.length}
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
              <Text
                style={{ fontFamily: "TiltWarp" }}
                className="text-extrabold text-center text-4xl"
              >
                {shuffledQuestions[currentQuestions].text}
              </Text>
            </View>
          </View>

          <View>
            <View className="mx-4 my-2 flex flex-row flex-wrap">
              <AnimatePresence>
                {shuffledQuestions[currentQuestions].options.map((option, index) => (
                  <MotiView
                    from={{ scale: 1 }}
                    animate={{ scale: selectedOption === index ? 0.95 : 1 }}
                    transition={{
                      loop: selectedOption === index ? true : false,
                      type: "timing",
                      duration: 500,
                    }}
                    key={index}
                    className="w-1/2"
                  >
                    <TouchableOpacity
                      key={index}
                      className={
                        selectedOption === index
                          ? "m-1 flex items-center justify-center rounded-lg border-2 border-green-800 bg-green-300 p-6"
                          : "m-1 flex items-center justify-center rounded-lg border-2 border-green-600 bg-transparent p-6"
                      }
                      onPress={() => handleOptionSelect(index)}
                    >
                      <Text
                        style={{ fontFamily: "TiltWarp" }}
                        className={
                          selectedOption === index
                            ? "text-center text-4xl text-slate-950"
                            : "text-center text-4xl text-slate-800"
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
              <Text
                style={{ fontFamily: 'TiltWarp' }}
                className="text-md text-center text-black"
              >
                Next
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default MathQuizScreen;
