import React,{useRef} from "react";
import "./Home.scss";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom"; 
import { addDoc, collection } from 'firebase/firestore/lite';
import { db } from "./Firebase";

export default function Home(){
    const inputRef = useRef(null);
    const navigate = useNavigate()
    

    return (
        <div className="container">
            <h1>Welcome To Quiz App</h1>
            <input ref={inputRef} className="field" type="text" placeholder="Name" /><br></br>
            <div className="start">
                <Link className="button-start" to="/Quiz">Ready</Link>
                <Link className="button-create" to={'create'}>Create</Link>
            </div>
        </div>
    );
}
