import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import DisplayTournaments from './DisplayTournaments';

function TournamentDetail() {
    let { id } = useParams();
    console.log(id);

    const [tournament, setTournament] = useState({});

    useEffect(() => {
        async function getTournament() {
            const response = await fetch ("https://localhost:44335/api/Tournaments/" + id, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                })
                const tournamentArray = await response.json();
                console.log(tournamentArray);
                setTournament(tournamentArray);  
        }
        getTournament();
      }, []);    

    return (
        <div>
        {/* <Link to="/"><button> Back </button></Link> */}
        <h1>Tournament Detail</h1>
        <h1>{tournament.tournamentName}</h1>
        <h2>{tournament.game.title}</h2>
        <p>{tournament.description}</p>
        <h3>{tournament.eventTime}</h3>   
        <h4>{tournament.venue.venueName}</h4> 
        <h4>{tournament.venue.address.street}</h4>
        <h4>{tournament.venue.address.city}</h4>
        <h4>{tournament.venue.address.country}</h4>

        {/* <h2>{tournamentState[id].game.title}</h2>
        <p>{tournamentState[id].description}</p>
        <h3>{tournamentState[id].eventTime}</h3>   
        <h4>{tournamentState[id].venue.venueName}</h4> 
        <h4>{tournamentState[id].venue.address.street}</h4>
        <h4>{tournamentState[id].venue.address.city}</h4>
        <h4>{tournamentState[id].venue.address.country}</h4> */}
        {/* <div className="player-list">
                <ul>
                    <li>
                        <h5>{tournamentState[id].player}</h5>
                    </li>
                </ul>
            </div>  */}
        </div>
    )
}

export default TournamentDetail