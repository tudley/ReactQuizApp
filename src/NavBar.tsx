import { Button } from "@mui/material"
import type { QuestionObject } from "./types";

interface NavBarProps {
  questionIndex : number, 
  questions : QuestionObject[], 
  addQuestion : () => void, 
  incrementQuestion : (direction : boolean) => void,
  startQuiz : () => void
}

const NavBar = ({ 
  questionIndex, 
  questions, 
  addQuestion, 
  incrementQuestion,
  startQuiz
   } : NavBarProps) => {


let nextButton;
if (questionIndex < questions.length - 1) {
  nextButton = (
    <Button onClick={() => incrementQuestion(true)}>
      Next
    </Button>
  );
} else {
  nextButton = (
    <Button onClick={() => addQuestion()}>
      Add
    </Button>
  );
}

    return (
        <>
            <p>This is a NavBar</p>
            <div style={{'display':"flex", "flexDirection" : "row", "justifyContent" : "space-between"}}>
                {questionIndex !== 0 ? <Button onClick={() => incrementQuestion(false)}>Back</Button> : <Button />}
                <Button>questionIndex: {questionIndex}</Button>
                {nextButton}
            </div>
            <div>
              <button onClick={startQuiz}>Begin</button>
            </div>
           

        </>
    )
}

export default NavBar