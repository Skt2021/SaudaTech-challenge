import React,{useState,useEffect} from 'react';
import axios from "axios";

import "./Task6.css"

import CharecterCard from '../../components/Task6/CharecterCard/CharecterCard';

function Task6() {

    const [charectersList, setCharactersList] = useState([]);


    useEffect(()=>{
        axios.get("https://api.sampleapis.com/futurama/characters")
            .then(res=>{
                setCharactersList(res.data)
            })
    },[])
    
    return (
        <div className="list-container">
            {
                charectersList && (charectersList.map((charecter,index) => {
                    return <CharecterCard key={index} charecterDetails={charecter} />
                }))
            }
        </div>
    )
}

export default Task6
