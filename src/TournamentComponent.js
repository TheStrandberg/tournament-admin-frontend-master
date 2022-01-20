import React from 'react'
import './App.css';

function TournamentComponent( { tournamentName, game, eventTime, venue}) {

    return (
        <div className="single-tournament">
        <ul>
            <li>
            <h1>{tournamentName}</h1>
            <h2>{game && game.title}</h2>
            <h3>{eventTime}</h3>
            <h4>{venue && venue.venueName}</h4>
            <h4>{venue && venue.address.city}</h4>
            <h4>{venue && venue.address.country}</h4>
            </li>
        </ul>
        </div>
    )
}

export default TournamentComponent
