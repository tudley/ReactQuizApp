import { Typography, Paper, Button } from "@mui/material"
import type { AnswerObject, QuestionObject } from "./types";

interface AnswerViewerProps {
    answer : AnswerObject
    questions : QuestionObject[];
    questionIndex : number;
    answerIndex : number;
    selectAnswer : (questionIndex : number, answerIndex : number) => void;

}

const AnswerViewer : React.FC<AnswerViewerProps> = ({answer, questions, selectAnswer, questionIndex, answerIndex}) => {

    let colour;
    if (answer.isCorrect) colour = "success"
    else {
        if (answer.isSelected) colour = "error"
        else colour = "primary"
     }
    return (
        <>
            <Paper>
                <Typography>{answer.text}</Typography>
                { questions[questionIndex].hasBeenChecked ? 
                <Button variant="contained" color={colour}></Button>
                :
                <Button variant={answer.isSelected ? "contained" : "outlined"} onClick={() => selectAnswer(questionIndex, answerIndex)}>Select</Button>
                }
                </Paper>
            
        </>
    )
} 

export default AnswerViewer