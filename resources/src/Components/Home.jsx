import React,{useRef, useState} from "react";
import "./Home.scss";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom"; 
//import { addDoc, collection } from 'firebase/firestore/lite';/
//import { db } from "./Firebase";
import image from './brain.jpeg'
//import {z} from 'zod';

//const mySchema = z.object({
  //  name: z.string().min(5).max(255)})


export default function Home(){
    const inputRef = useRef(null);
    const [condtion,setCondition] = useState(false);

    const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
    
  };
   // const navigate = useNavigate()

  /* const doSomething = () =>{

       const parsedData = mySchema.safeParse(message)
    
            console.log(question)
    
            if(!parsedData.success){
                console.error(parsedData.error)
                return
            }
   }*/


    

    return (
        <form>
            <div className="container">
                <h1>Quiz.Guru</h1>
                <img src={image} style={{ width: '400px', }}/>
                <input ref={inputRef} className="field" type="text"name="name" onChange={handleChange} placeholder="Name" /><br></br>
                {condtion && <span>Invalid username</span>}
                <div className="start">
                    <Link className="button-start" to="/Quiz" onClick={()=>doSomething()}>Play</Link>
                    <Link className="button-create" to={'create'} onClick={()=>doSomething()}>Create</Link>
                </div>
            </div>
        </form>
    );
}
