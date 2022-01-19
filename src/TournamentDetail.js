import React from 'react'
import { Link, useParams } from "react-router-dom";

function TournamentDetail({ tournamentState }) {
    let { id } = useParams();
    return (
        <div>
        {/* <Link to="/"><button> Back </button></Link> */}
        <h1>Tournament Detail</h1>
        <h1>{tournamentState[id].tournamentName}</h1>
        <h2>{tournamentState[id].game.title}</h2>
        <p>{tournamentState[id].description}</p>
        <h3>{tournamentState[id].eventTime}</h3>   
        <h4>{tournamentState[id].venue.venueName}</h4> 
        <h4>{tournamentState[id].venue.address.street}</h4>
        <h4>{tournamentState[id].venue.address.city}</h4>
        <h4>{tournamentState[id].venue.address.country}</h4>
        <div className="player-list">
                <ul>
                    <li>
                        <h5>{tournamentState[id].player}</h5>
                    </li>
                </ul>
            </div> 
        </div>
    )
}

export default TournamentDetail