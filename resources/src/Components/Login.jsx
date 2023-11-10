import React, { useContext, useState } from 'react'
import image from "./brain.jpeg"
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from './globalContext';
import "./Login.css";

export default function Login() {
  const { name, setName } = useContext(GlobalContext);
  console.log(name)
  const navigate =useNavigate();

  return (
    <div className='container'>
         <h1>Quiz.Guru</h1>
         <img src={image} style={{ width: '400px', }}/>
        <form className='form'>
            <input  className="field" type="text"name="name" onChange={e=>setName(e.target.value)} placeholder="Name" />
           <div className='button-div'>
              <button className='buttons' disabled={name?.length < 1} onClick={()=>navigate("/Home")}>submit</button>
           </div>
        </form>
    </div>
  )
}