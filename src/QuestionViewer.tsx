import { Typography } from "@mui/material"
import React from "react";
import type { QuestionObject } from "./types"
import AnswerViewer  from "./AnswerViewer";

interface QuestionViewerProps {
    questions : QuestionObject [];
    questionIndex : number;
    selectAnswer : (questionIndex : number, answerIndex : number) => void;

}


const QuestionViewer : React.FC<QuestionViewerProps> = ({ questions, questionIndex, selectAnswer}) => {

    const question = questions[questionIndex]

    return (
    <>
        This is a Question
        <Typography>{question.text}</Typography>
        {question.answers.map((answer, index) => <AnswerViewer answer={answer} questions={questions} selectAnswer={selectAnswer} questionIndex={questionIndex} answerIndex={index} />)}
    </>
    )
}

export default QuestionViewer