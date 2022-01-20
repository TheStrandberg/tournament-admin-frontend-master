import React from 'react'
import './App.css';

function TournamentComponent( { tournamentName, game, description, eventTime, venue}) {

    return (
        <div className="single-tournament">
            <h1>{tournamentName}</h1>
            <h2>{game && game.title}</h2>
            <p>{description}</p>
            <h3>{eventTime}</h3>
            <h4>{venue && venue.address.city}</h4>
            <h4>{venue && venue.address.country}</h4>
        </div>
    )
}

export default TournamentComponent
