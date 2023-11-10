import React from "react";
import "./Home.scss";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom"; 
import image from './brain.jpeg'

export default function Home(){

    const navigate = useNavigate();

    return (
        <form>
            <div className="container">
                <h1>Quiz.Guru</h1>
                <img src={image} style={{ width: '400px', }}/>
                <div className="start">
                    <button className="button-start" onClick={()=>{navigate("/Quiz")}}>play</button>
                    <button className="button-create" onClick={()=>{navigate("/create")}}>create</button>
                </div>
            </div>
        </form>
    );
}
