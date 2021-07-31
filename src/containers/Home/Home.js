import React from 'react';
import { Link } from 'react-router-dom';

import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <Link className="link" to="/task2">
                <p className="link-text">Task 2 Solution</p>
                <img src="rightArrow.svg" alt="right-arrow"/>
            </Link>
            <Link className="link" to="/task6">
                <p className="link-text">Task 6 Solution</p>
                <img src="rightArrow.svg" alt="right-arrow"/>
            </Link>
        </div>
    )
}

export default Home
