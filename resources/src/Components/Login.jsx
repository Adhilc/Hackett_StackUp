import React from 'react'
import image from "./brain.jpeg"

export default function Login() {
  return (
    <div className='container'>
         <h1>Quiz.Guru</h1>
         <img src={image} style={{ width: '400px', }}/>
        <form>
            <input ref={inputRef} className="field" type="text"name="name" onChange={handleChange} placeholder="Name" /><br></br>
            <button>Submit</button>
        </form>
    </div>
  )
}
