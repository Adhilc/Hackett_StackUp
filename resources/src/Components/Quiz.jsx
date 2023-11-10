import { useEffect, useState } from "react";
import "./Quiz.scss";
import Timer from "./Timer";
import { resultInitalState } from "./Constants";
import "./index.scss";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "./Firebase";
import { useNavigate } from "react-router-dom";

const Quiz = () => {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);

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
    //const [highScores,setHighScore] = useState([]);
    //const [showScore,setShowScore] = useState(false);
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

   /* useEffect(()=>{
        setHighScores(JSON.parse(localStorage.getItem('highScore'))||[]);
    },[])*/

   /* const handleSave = () => {
        const score = {
            name,
            score:result.score,
        };
        const newHighScore = [...highScores,score].sort(a,b)=>b.score - a.score);
        setHighScore(newHighScores);
        setShowScore(true);
        localstorage.setItem("highScores",JSON.stringify(newHighscores));
    }*/
    

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
                <button className="again" onClick={onTry}>Play again</button>
                <button className="quit" onClick={()=>{navigate("/")}} >Quit</button>
                //button create and save functio to state 
               /* <div>
                    {!showScore && (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Ranking</th>
                                        <th>Name</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {highScores.map((highScore,i)=>{
                                        return (
                                            <tr key={`${highScore.score}${highScore.name}${i}`}>
                                                <td>{i+1}</td>
                                                <td>{highScore.name}</td>
                                                <td>{highScore.score}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </>
                    ) }
                </div>*/
                ----------
            </div>
           )}
            
        </div>
    );
};

export default Quiz;