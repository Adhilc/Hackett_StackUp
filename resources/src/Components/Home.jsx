import React,{useRef, useState} from "react";
import "./Home.scss";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom"; 
import image from './brain.jpeg'

export default function Home(){


  /*  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
    
  };*/

    return (
        <form>
            <div className="container">
                <h1>Quiz.Guru</h1>
                <img src={image} style={{ width: '400px', }}/>
                <div className="start">
                    <Link className="button-start" to="/Quiz" >Play</Link>
                    <Link className="button-create" to={'create'} >Create</Link>
                </div>
            </div>
        </form>
    );
}
