import { Button } from "@mui/material"
import type { QuestionObject } from "./types";
import React from "react";

interface NavBarProps {
  isBuilding : boolean;
  questionIndex : number;
  questions : QuestionObject[]; 
  addQuestion : () => void; 
  incrementQuestion : (direction : boolean) => void; 
  startQuiz : () => void; 
  checkAnswer : (questionIndex : number) => void;
  endQuiz : () => void;
}

const NavBar : React.FC<NavBarProps> = ({ 
  isBuilding,
  questionIndex, 
  questions, 
  addQuestion, 
  incrementQuestion,
  startQuiz,
  checkAnswer,
  endQuiz
   }) => {


let nextButton;
if (questionIndex < questions.length - 1) {
  nextButton = (
    <Button onClick={() => incrementQuestion(true)}>
      Next
    </Button>
  );
} else {
  if (isBuilding) {
    nextButton = (
    <Button onClick={() => addQuestion()}>
      Add
    </Button>
  );
  } else {
    nextButton = (
    <Button onClick={() => endQuiz()}>
      Finish Quiz
    </Button>
    );
  }
}

const questionIsAttempted = questions[questionIndex].answers.filter(answer => answer.isSelected === true)

    return (
        <>
            <p>This is a NavBar</p>
            <div style={{'display':"flex", "flexDirection" : "row", "justifyContent" : "space-between"}}>
                {questionIndex !== 0 ? <Button onClick={() => incrementQuestion(false)}>Back</Button> : <Button />}
                <Button>questionIndex: {questionIndex}</Button>
                {isBuilding && nextButton}
                {!isBuilding && nextButton}
            </div>
            
            <div>
              {isBuilding && <button onClick={startQuiz}>Begin</button>}
              {!isBuilding && questionIsAttempted && <Button onClick={() => checkAnswer(questionIndex)}>Check answer</Button>}
            </div>
           

        </>
    )
}

export default NavBar