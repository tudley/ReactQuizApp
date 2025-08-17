import { Typography } from "@mui/material"
import type { QuestionObject } from "./types"

interface QuestionViewerProps {
    question : QuestionObject;
    questionIndex : number;
    selectAnswer : () => void;

}


const QuestionViewer = ({ question, selectAnswer}) : QuestionViewerProps => {


    return (
    <>
        This is a Question
        <Typography>{question.text}</Typography>
        {question.answers.map((answer) => <AnswerViewer answer={answer} selectAnswer={selectAnswer}/>)}
    </>
    )
}

export default QuestionViewer