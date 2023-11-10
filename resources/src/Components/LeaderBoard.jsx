import { collection, getDocs } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import { db } from './Firebase';
import { useNavigate } from 'react-router-dom';
import "./LeaderBoard.css";

export default function LeaderBoard() {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([])
    const navigate = useNavigate();

    async function getResults(){
        const data = await getDocs(collection(db, "results"));
        setResults(data.docs.map(doc => doc.data()))
        setLoading(false)
    }

    useEffect(() => {
        getResults()
    }, [])


    if(loading){
        return (
            <div>
                <h3>Loading</h3>
            </div>
        )
    }
  return (
    <div className='container'>
        <h1>Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Name</th>
                        <th>Score</th>
                     </tr>
                </thead>
                    <tbody>
                        {results.map((result,i)=>{
                            return (
                                <tr key={`${result.name}${i}`}>
                                    <td>{i+1}</td>
                                    <td>{result.name}</td>
                                    <td>{result.result.score}</td>
                                </tr>
                            );
                        })}
                    </tbody>
            </table>
            <button className='end' onClick={()=>{
                navigate("/")
            }}>quit</button>
    </div>
  )
}
