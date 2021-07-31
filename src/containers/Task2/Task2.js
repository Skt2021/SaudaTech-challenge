import React,{useState,useEffect} from 'react';
import "./Task2.css";

import {data} from "../../data";

function Task2() {

    const [TQB, setTQB] = useState(0);
    const [TQS, setTQS] = useState(0);
    const [ABP, setABP] = useState(0);
    const [ASP, setASP] = useState(0);

    useEffect(()=>{
        var quantityBought = 0;
        var quantitySold = 0;
        var boughtPrice = 0;
        var sellPrice = 0;
        data.map(trade=>{
            if(trade.Type === "BUYER"){
                quantityBought += parseInt(trade.Quantity)
                boughtPrice = boughtPrice + (trade.Quantity*trade["Accepted Price"])
            }
            if(trade.Type === "SELLER"){
                quantitySold += parseInt(trade.Quantity)
                sellPrice = sellPrice + (trade.Quantity*trade["Accepted Price"])
            }
        })
        
        setTQB(quantityBought)
        setTQS(quantitySold)
        
        let AvgBoughtPrice = parseInt(boughtPrice)/quantityBought
        let AvgSellPrice = parseInt(sellPrice)/quantitySold

        setABP(AvgBoughtPrice)
        setASP(AvgSellPrice)
    },[])

    return (
        <div className="task6-container">
            <div>
                <p><span className="task6-property">Total Quantity Bought : </span><span className="task6-value">{TQB}</span></p>
                <p><span className="task6-property">Total Quantity Sold : </span><span className="task6-value">{TQS}</span></p>
                <p><span className="task6-property">Average Bought Price : </span><span className="task6-value">{ABP}</span></p>
                <p><span className="task6-property">Average Sold Price : </span><span className="task6-value">{ASP}</span></p>
            </div>
        </div>
    )
}

export default Task2
