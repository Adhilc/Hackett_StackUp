import React, { useState } from 'react';
import "./Create.scss";
import "./index.scss";
import { Link, useNavigate } from 'react-router-dom';
import { Firebase, db } from './Firebase';
import { addDoc, collection } from "firebase/firestore/lite"
import { z } from 'zod';

const questionSchema = z.object({
    question: z.string().min(5).max(255),
    answer: z.string().min(1).max(255),
    choices: z.string().min(1).max(255).array().length(4)
})

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  

export default function create() {


    const navigate = useNavigate()
    
    const [question,setQuestion] = useState({question:"",answer:"", choices: ["", "", "", ""]});


    const addQuestion = async ()=>{

        const answer = question.choices[0]

        const questionTemp = {
            ...question,
            answer
        }

        const parsedData = questionSchema.safeParse(questionTemp)

        if(!parsedData.success){
            console.error(parsedData.error)
            return
        }

        
        

       await addDoc(collection(db, "Questions"), {
            question: questionTemp.question,
            choices: shuffle(questionTemp.choices),
            answer: questionTemp.answer
        }).then((docRef)=>{
            const docId = docRef.id;
            console.log(docId);

        }).catch((err)=>{
            console.log("error" + err.message);
        });
    };

    const setOptions = (index, value) => {
        const tempOptions = [...question.choices]
        tempOptions[index] = value
        setQuestion(prev => ({
            ...prev,
            choices: tempOptions
        }))
    }

  
  
    return (
       
    <div className="container">
        
        <input  className="field" type="text" name='question' value={question.question} onChange={(e)=> setQuestion(prev => ({
            ...prev,
            question: e.target.value,
        }))} placeholder="Question" /><br></br>
        <input  className="field" type="text" name='answer' value={question.choices[0]} onChange={(e) => setOptions(0, e.target.value)} placeholder="Correct Answer" /><br></br>
        <input  className="field" type="text" name='answer' value={question.choices[1]} onChange={(e) => setOptions(1, e.target.value)} placeholder="Options" /><br></br>
        <input  className="field" type="text" name='answer' value={question.choices[2]} onChange={(e) => setOptions(2, e.target.value)} placeholder="Options" /><br></br>
        <input  className="field" type="text" name='answer' value={question.choices[3]} onChange={(e) => setOptions(3, e.target.value)} placeholder="Options" /><br></br>
        
        <div className='btns'>
            <button className="button-repeate" onClick={async () => {await addQuestion() 
                navigate(0) }}>Repeat</button>
            <button className="button-done"  onClick={async () => {
                await addQuestion()
                navigate("/")
            }}>Submit</button>
        </div>
    </div>
  )
}
