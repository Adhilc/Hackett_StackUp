import React, { useState } from 'react'
import image from "./brain.jpeg"
import "./Login.css";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name,setName] = useState('');
  const navigate =useNavigate();

  return (
    <div className='container'>
         <h1>Quiz.Guru</h1>
         <img src={image} style={{ width: '400px', }}/>
        <form>
            <input  className="field" type="text"name="name" onChange={e=>setName(e.target.value)} placeholder="Name" /><br></br>
            <button disabled={name.length < 1} onClick={()=>navigate("/Home")}>Submit</button>
        </form>
    </div>
  )
}
