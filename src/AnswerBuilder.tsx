import { Button, Paper, TextField } from "@mui/material"
import { useState } from "react"
import type { AnswerObject } from "./types";

interface AnswerBuilderProps {
    questionIndex : number;
    answer : AnswerObject;
    answerIndex : number;
    setAnswerToCorrect : (questionIndex : number, answerIndex : number) => void;
    setAnswerText : (questionIndex : number, answerIndex : number, text : string) => void;
}

const AnswerBuilder = ({ 
    questionIndex, 
    answer, 
    answerIndex, 
    setAnswerToCorrect, 
    setAnswerText} : AnswerBuilderProps) => {

    return(
        <Paper>
            <TextField 
            value={answer.text}
            onChange={(e) => setAnswerText(questionIndex, answerIndex, e.target.value)} 
            />
            <Button 
            variant= {answer.isCorrect ? 'outlined' : 'contained'}
            >X</Button>
            <Button 
            variant= {answer.isCorrect ? 'contained' : 'outlined'}
            onClick={() => setAnswerToCorrect(questionIndex, answerIndex)}>✓</Button>
        </Paper>
    )
}

export default AnswerBuilder