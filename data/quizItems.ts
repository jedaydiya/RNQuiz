interface QuizItem {
  question: string;
  answer: string;
}

interface QuizData {
  quizItems: QuizItem[];
}

const quizData: QuizData = {
  quizItems: [
    {
      question: "What is 2 + 2?",
      answer: "4",
    },
    {
      question: "What is 5 x 3?",
      answer: "15",
    },
    {
      question: "What is 10 - 7?",
      answer: "3",
    },
  ],
};

export default quizData;
