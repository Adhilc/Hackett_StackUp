import "./Timer.scss";
import { useEffect,useRef,useState } from "react";
import "./index.scss";

function Timer({onTimeUp}) {
    const [counter,setCounter] = useState(15);
    const timerId = useRef()

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCounter(prev => prev - 1);
        },1000)
        return () => clearInterval(timerId.current)
    },[])

    useEffect(() => {
        if (counter <= 0){
            clearInterval(timerId.current)
            onTimeUp();
        }
    },[counter])

    return <div className="time-container">
        <div className="progress">{counter}</div>

    </div>;
}

export default Timer;