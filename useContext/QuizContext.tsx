import React, { createContext, useState, ReactNode } from "react";

interface QuizContextData {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const QuizContext = createContext<QuizContextData>({
  score: 0,
  setScore: () => { },
});

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [score, setScore] = useState(0);
  return (
    <QuizContext.Provider value={{ score, setScore }}>
      {children}
    </QuizContext.Provider >
  );
};

export default QuizContext;
