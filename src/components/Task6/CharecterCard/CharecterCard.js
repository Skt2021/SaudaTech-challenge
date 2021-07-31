import React from 'react';
import "./CharecterCard.css";

function CharecterCard({charecterDetails}) {
    return (
        <>
            {charecterDetails.name && (
                <div className="charectercard-container">
                    <div className="image-container" >
                        {
                            charecterDetails.images ? (
                                <img className="charectercard-avatar" src={charecterDetails.images.main} alt="avatar"/>
                            ):(<img className="charectercard-avatar" src="avatar.png" alt="avatar" />)
                        }
                    </div>
                    <div>
                        <p className="name-text">{`${charecterDetails.name.first} ${charecterDetails.name.middle} ${charecterDetails.name.last}`}</p>
                        <p><span>Age : </span><span>{charecterDetails.age}</span></p>
                        <p><span>Gender : </span><span>{charecterDetails.gender}</span></p>
                        <p><span>Species : </span><span>{charecterDetails.species}</span></p>
                        <p><span>Occupation : </span><span>{charecterDetails.occupation}</span></p>
                        {charecterDetails.homePlanet && (<p><span>Home Planet : </span><span>{charecterDetails.homePlanet}</span></p>)}
                    </div>
                </div>
            )}
        </>
    )
}

export default CharecterCard
