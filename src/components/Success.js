import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from "../context/AuthContext";


const Success = () => {

    const {username} = useContext(AuthContext)

    useEffect(() => {
        axios.put(`/api/levels/1/${username}`)
        .then((res) => {
            
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className =  "main_background level_background">
            <div className="success">
                <h1> Congratulations!! </h1>
                <h2> You completed level 1!</h2>
            </div>
        </div>
    )
}

export default Success