
import { Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AnswerBuilder from "./AnswerBuilder";
import type { QuestionObject } from "./types";

// This Component renders a Single Question (Question and Answer combo) 

interface QuestionBuilderProps  {
    questionIndex : number;
    question : QuestionObject
    questions : QuestionObject[];
    setAnswerToCorrect : (questionIndex : number, answerIndex : number) => void;
    setAnswerText : (questionIndex : number, answerIndex : number, text : string) => void;
    setQuestionText : (questionIndex : number, text : string) => void;
}

const QuestionBuilder = ({ 
    questionIndex, 
    question,
    questions, 
    setAnswerToCorrect, 
    setAnswerText,
    setQuestionText
} : QuestionBuilderProps) => {

    // initial values

    return (
        <>
            <p>This is a QuestionBuilder</p>
            <p>This is for Question {questionIndex}</p>
            {/* <p>question state: {JSON.stringify(question)}</p> */}
            <Paper>
                <Typography>Question: </Typography>
                <TextField 
                value={question.text}
                onChange={(e)=>setQuestionText(questionIndex, e.target.value)}
                />
            </Paper>
            <Paper > 
                {questions[questionIndex].answers.map((answer, index) =>  
                <AnswerBuilder 
                questionIndex={questionIndex} 
                key={index} 
                answer={answer} 
                answerIndex={index} 
                setAnswerToCorrect={setAnswerToCorrect}
                setAnswerText={setAnswerText}
                />)}
            </Paper>
           
        </>
    )
}

export default QuestionBuilder;
