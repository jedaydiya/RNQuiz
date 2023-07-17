import React, { createContext, useState, ReactNode } from "react";

interface QuizProviderProps {
  children: ReactNode;
}
interface RandomQuizContextData {
  randomQuizScore: number;
  setRandomQuizScore: React.Dispatch<React.SetStateAction<number>>;
}
const RandomQuizContext = createContext<RandomQuizContextData>({
  randomQuizScore: 0,
  setRandomQuizScore: () => { },
});

export const RandomQuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [randomQuizScore, setRandomQuizScore] = useState(0);

  return (
    <RandomQuizContext.Provider value={{ randomQuizScore, setRandomQuizScore }}>
      {children}
    </RandomQuizContext.Provider>
  );
};

export default RandomQuizContext;
