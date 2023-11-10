import { collection, getDocs } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import { db } from './Firebase';

export default function LeaderBoard() {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([])

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
    </div>
  )
}
