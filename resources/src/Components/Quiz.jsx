import { useEffect, useState } from "react";
import "./Quiz.scss";
import Timer from "./Timer";
import { resultInitalState } from "./Constants";
import "./index.scss";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "./Firebase";

const Quiz = () => {

    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([])

    const fetchQuestions = async () => {
        const questions = await getDocs(collection(db, "Questions"));
        console.log(questions.docs[0].data())
        setQuestions(questions.docs.map((doc) => doc.data()))
        setLoading(false)
    }

    useEffect(() => {
        fetchQuestions()
    }, [])


    const [questionNo,setQuestionNo] = useState(0);
    const [answerIndex,setAnswerIndex] = useState(null);
    const [result,setResult] = useState(resultInitalState);
    const [answer,setAnswer] = useState(null);
    const [showResult,setShowResult] =  useState(false);
    const [showTimer,setShowTimer] = useState(true);
    

    const onPress = (answer,index)=>{
        setAnswerIndex(index);
        if(answer === correctAnswer){
            setAnswer(true);
        }else{
            setAnswer(false);
        }
    }

    const onNext = (finalAnswer)=> {
        setAnswerIndex(null);
        setShowTimer(false);
        setResult((prev) =>
        finalAnswer
            ?{
               ...prev,
                score:prev.score + 5,
                correctAnswers: prev.correctAnswers + 1
            } : {
                ...prev,
                wrongAnswers:prev.wrongAnswers + 1
      
            }
        );
        if (questionNo !== questions.length - 1){
            setQuestionNo((prev)=> prev + 1);
        }else{
            setQuestionNo(0);
            setShowResult(true);
        }

        setTimeout(()=>{
            setShowTimer(true);
        });

    };
    

    const onTry = () => {
        setResult(resultInitalState);
        setShowResult(false);
    };

    const handleTimeUp = () => {
        setAnswer(false);
        onNext(false);
    }

    if(loading){
        return <div>Loading...</div>
    }

    const {question,choices,correctAnswer} = questions[questionNo];

    return (
        <div className="container">
            {!showResult ? (
              <>
             {showTimer && <Timer onTimeUp={handleTimeUp} />}
                <span className="active-question">{questionNo + 1}</span>
                <span className="total-question">/{questions.length}</span>
                <h2>{question}</h2>
                <ul>
                    {
                        choices.map((choice,index)=>(
                            <li 
                                onClick={() => onPress(choice,index)}
                                key={choice}
                                className={answerIndex === index ? 'selected' : null}
                                >
                                    {choice}
                            </li>
                        ))
                    }
                </ul>
                <div className="btn">
                    <button onClick={() => onNext(answer)} disabled={answerIndex === null}>
                        {questionNo === questions.length-1 ? "Finish" : "Next"}
                    </button>
                </div>
              </>) : ( <div className="result">
                <h3>Result</h3>
                <p>
                    Total Questions:<span>{questions.length}</span>
                </p>
                <p>
                    Total score:<span>{result.score}</span>
                </p>
                <p>
                    Correct Answers:<span>{result.correctAnswers}</span>
                </p>
                <p>
                    Wrong Answers:<span>{result.wrongAnswers}</span>
                </p>
                <button onClick={onTry}>Play again</button>
            </div>
           )}
            
        </div>
    );
};

export default Quiz;