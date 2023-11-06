import React,{useRef} from "react";
import "./Home.scss";
import "./index.scss";
import { Link } from "react-router-dom"; 

export default function Home(){
    const inputRef = useRef(null)
    

    return (
        <div className="container">
            <h1>Welcome To Quiz App</h1>
            <input ref={inputRef} className="field" type="text" placeholder="Name" /><br></br>
            <div className="start">
                <Link className="button-start" to={'Quiz'} >Ready</Link>
            </div>
        </div>
    );
}
