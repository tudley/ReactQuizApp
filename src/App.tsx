<<<<<<< HEAD
import React, { useState } from 'react'
import './App.css'
import QuestionBuilder from './QuestionBuilder'
import QuestionViewer from './QuestionViewer'
import NavBar from './NavBar'
import type { ErrorObject, QuestionObject } from './types'
import { Alert } from '@mui/material'
=======
import { useState } from "react";
import "./App.css";
import QuestionBuilder from "./QuestionBuilder";
import QuestionViewer from "./QuestionViewer";
import NavBar from "./NavBar";
import type { QuestionObject } from "./types";
>>>>>>> 2f87fcd9d18db9ed39447769220686b5d5a07ee3

function App() {
  // Components

  /*
  <App> -
  <Question /> - The view of the question during testing mode
  <QuestionBuilder /> - The view of the querstion during building mode
  <Timer />
  <ScoreCard>
  */

  // empty question object
  const questionObject: QuestionObject = {
    text: "questionText",
    answers: [
      {
        text: "answer1",
        isCorrect: false,
      },
      {
        text: "answer2",
        isCorrect: false,
      },
      {
        text: "answer3",
        isCorrect: false,
      },

      {
        text: "answer4",
        isCorrect: false,
      },
    ],
  };

  // States
  // flag to determine if the user is building questions, or taking the quiz
<<<<<<< HEAD
  const [isBuilding, setIsBuilding] = useState(true)
  // flag to determine whether the quiz is over and overview should display
  const [isFinished, setIsFinished] = useState(false)
  // state to hold any error messages
  const [error, setError] = useState<ErrorObject>({})
=======
  const [isBuilding, setIsBuilding] = useState(true);
>>>>>>> 2f87fcd9d18db9ed39447769220686b5d5a07ee3
  // store the currentQuestion index here, and display it to the user
  const [questionIndex, setQuestionIndex] = useState(0);
  // track the array of question objects
  const [questions, setQuestions] = useState([questionObject]);
  // track the users score
  const [score, setScore] = useState([]);

  const atLeastOneAnswerIsCorrect = (questionIndex : number) => {
    if (!questions[questionIndex].answers.find(answer => answer.isCorrect===true)){
      setError({severity : "alert", text : "One answer must be set to correct before moving on."})
      return false
    }
    else return true
  }

  // calls setCurrentQuestion if valid
  const incrementQuestion = (direction: boolean) => {
    if (direction === true) {
<<<<<<< HEAD
      if (questionIndex < questions.length) {
        if (atLeastOneAnswerIsCorrect(questionIndex))
        setQuestionIndex(prev => prev + 1)   
      }}
    else {
      if (questionIndex > 0) {
        if (atLeastOneAnswerIsCorrect(questionIndex))
        setQuestionIndex(prev => prev - 1)  
      }
=======
      if (questionIndex < questions.length)
        setQuestionIndex((prev) => prev + 1);
    } else {
      if (questionIndex > 0) setQuestionIndex((prev) => prev - 1);
>>>>>>> 2f87fcd9d18db9ed39447769220686b5d5a07ee3
    }
  };

  // Function adds a new entry to the questions
  const addQuestion = () => {
    if (questions.length < 10) {
      setQuestions((prev) => [...prev, questionObject]);
    }
    incrementQuestion(true);
  };

  const setAnswerToCorrect = (questionIndex: number, answerIndex: number) => {
    console.log(
      `questionIndex = ${questionIndex}, answerIndex = ${answerIndex}`
    );
    // set this answer to correct, set all other answers to incorrect
    setQuestions(
      (
        prev // set it to a callback function of the previous value
      ) =>
        prev.map(
          (
            q,
            qi // we map a new arrar, taking the question object and its index
          ) =>
            qi === questionIndex // if the index of the element in the array matches our argument
              ? {
                  ...q, // deconstruct q
                  answers: q.answers.map(
                    (
                      a,
                      ai // overwrite answers with a map of the rpevious answers
                    ) => ({
                      ...a,
                      isCorrect: ai === answerIndex,
                    })
                  ),
                }
              : q
        )
    );

    console.log(
      "current question answers isCorrect attributes: ",
      questions[questionIndex]?.answers[answerIndex].isCorrect
    );
  };

  const setAnswerText = (
    questionIndex: number,
    answerIndex: number,
    text: string
  ) => {
    setQuestions((prev) =>
      prev.map((q, qi) =>
        qi === questionIndex
          ? {
              ...q,
              answers: q.answers.map((a, ai) =>
                ai === answerIndex ? { ...a, text } : a
              ),
            }
          : q
      )
    );
  };

<<<<<<< HEAD
    if (questions[questionIndex].hasBeenChecked === true) return
    
    setQuestions(prev => 
      prev.map((q, qi) => 
      qi === questionIndex ? 
      {...q, hasBeenChecked : true}
      : q)
    )
    // check if for the current question, the selected answer is also the correct one.
    const selectedAnswer = questions[questionIndex].answers.find(answer => answer.isSelected === true) 
    if (selectedAnswer?.isCorrect) setScore(prev => prev + 1)
 
  }



  if (isFinished) {
    return (
      <>
      Quiz is over, thanks for playing, you got {score} out of {questions.length}
      </>
    )
  }
    
=======
  const setQuestionText = (questionIndex: number, text: string) => {
    setQuestions((prev) =>
      prev.map((q, qi) =>
        qi === questionIndex
          ? {
              ...q,
              text,
            }
          : q
      )
    );
  };
>>>>>>> 2f87fcd9d18db9ed39447769220686b5d5a07ee3

  const selectAnswer = (questionIndex: number, answerIndex: number) => {
    // maybe we give ach answer a 'isPicked' flag, which can be set once onclick.
    setQuestions((prev) =>
      prev.map((q, qi) =>
        qi === questionIndex
          ? {
              ...q,
              answers: q.answers.map((a, ai) =>
                ai === answerIndex
                  ? {
                      ...a,
                      isPicked: true,
                    }
                  : a
              ),
            }
          : q
      )
    );
  };

  return (
    <>
      {error && 
      <Alert severity={error.severity}>
        {error.text}  
      </Alert>}
     
      {
        // Building mode
        isBuilding && (
          <QuestionBuilder
            questionIndex={questionIndex}
            question={questions[questionIndex]}
            questions={questions}
            setAnswerToCorrect={setAnswerToCorrect}
            setAnswerText={setAnswerText}
            setQuestionText={setQuestionText}
          />
        )
      }

      {
        // Quiz mode
        !isBuilding && (
          <QuestionViewer questions={questions} questionIndex={questionIndex} />
        )
      }

      <NavBar
        questionIndex={questionIndex}
        questions={questions}
        addQuestion={addQuestion}
        incrementQuestion={incrementQuestion}
        startQuiz={() => setIsBuilding(false)}
      />
    </>
  );
}

export default App;
