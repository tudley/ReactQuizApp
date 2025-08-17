import { Typography, Paper, Button } from "@mui/material"

const AnswerViewer = ({answer, selectAnswer}) => {
    return (
        <>
            <Paper>
                <Typography>{answer.text}</Typography>
                <Button onClick={() => selectAnswer(answer)}
            </Paper>
            
        </>
    )
} 

export default AnswerViewer