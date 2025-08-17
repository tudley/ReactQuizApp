import { useState } from 'react'
import './App.css'
import QuestionBuilder from './QuestionBuilder'
import QuestionViewer from './QuestionViewer'
import NavBar from './NavBar'
import type { QuestionObject } from './types'

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
  const questionObject : QuestionObject = {
    text : "questionText",
    answers : [
        {
          text : "answer1",
          isCorrect : false
        },
        {
          text : "answer2",
          isCorrect : false
        },
        {
          text : "answer3",
          isCorrect : false
        },

        {
          text : "answer4",
          isCorrect : false
        },
    ]
  }

  // States
  // flag to determine if the user is building questions, or taking the quiz
  const [isBuilding, setIsBuilding] = useState(true)
  // store the currentQuestion index here, and display it to the user
  const [questionIndex, setQuestionIndex] = useState(0)
  // track the array of question objects
  const [questions, setQuestions] = useState([questionObject])
  // track the users score
  const [score, setScore] = useState([])

  // calls setCurrentQuestion if valid
  const incrementQuestion = (direction : boolean) => {
    if (direction === true) {
      if (questionIndex < questions.length) setQuestionIndex(prev => prev + 1)   
      }
    else {
      if (questionIndex > 0) setQuestionIndex(prev => prev - 1)  
    }
  }

  // Function adds a new entry to the questions
  const addQuestion = () => {
    if (questions.length < 10) {
      setQuestions(prev =>[...prev, questionObject])
    }
    incrementQuestion(true)
  }

  const setAnswerToCorrect = (questionIndex : number, answerIndex : number) => {
    console.log(`questionIndex = ${questionIndex}, answerIndex = ${answerIndex}`)
      // set this answer to correct, set all other answers to incorrect 
      setQuestions((prev) =>  // set it to a callback function of the previous value
        prev.map((q, qi) => // we map a new arrar, taking the question object and its index
        qi === questionIndex // if the index of the element in the array matches our argument
        ? {
          ...q, // deconstruct q
          answers : q.answers.map((a, ai) => // overwrite answers with a map of the rpevious answers
            ({
              ...a, 
              isCorrect : ai === answerIndex
            }
          ))
        } : q)
    )
    console.log('current question answers isCorrect attributes: ', questions[questionIndex]?.answers[answerIndex].isCorrect)
  }

  const setAnswerText = (questionIndex, answerIndex, text) => {
    setQuestions(prev =>
      prev.map((q, qi) => 
        qi === questionIndex
          ? {
            ...q, 
            answers : q.answers.map((a, ai) => 
            ai === answerIndex ? {...a, text} : a)
          }
        : q
    )
  )
  }

  const setQuestionText = (questionIndex : number, text : string) => {
    setQuestions(prev => 
      prev.map((q, qi) => 
        qi === questionIndex
          ? {
            ...q, 
            text
          } : q
    )
  )
  }

  const selectAnswer = (answer) => {

  }
    


  return (
    <>
      {
      // Building mode
      isBuilding && <QuestionBuilder questionIndex={questionIndex} question={questions[questionIndex]} questions={questions} setAnswerToCorrect={setAnswerToCorrect} setAnswerText={setAnswerText} setQuestionText={setQuestionText}/>}
      
      {
      // Quiz mode
      !isBuilding && <QuestionViewer questions={questions} questionIndex={questionIndex} />}
      
      <NavBar questionIndex={questionIndex} questions={questions} addQuestion={addQuestion} incrementQuestion={incrementQuestion} startQuiz={() => setIsBuilding(false)}/>
    </>
  )
}

export default App
