import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsCoomplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
    },
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsCoomplete) {
    return <Summary userAnswers={userAnswers} />
  }

  
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

// const [answerState, setAnswerState] = useState("");




// setAnswerState("answered");

// setTimeout(() => {
//   if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
//     setAnswerState("correct");
//   } else {
//     setAnswerState("wrong");
//   }

//   setTimeout(() => {
//     setAnswerState("");
//   }, 2000);
// }, 1000);



  // questionText={QUESTIONS[activeQuestionIndex].text}
        // answers={QUESTIONS[activeQuestionIndex].answers}
        // answerState={answerState}
        // selectedAnswer={userAnswers[userAnswers.length - 1]}