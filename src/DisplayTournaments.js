import React from 'react'
import TournamentComponent from './TournamentComponent';
import { Link } from 'react-router-dom';
import "./App.css"

function DisplayTournaments( { tournaments }) {

  return (
      <div className="tournament-list">
      <div className="headers">
        <h1 id="header-name">Name</h1>
        <h1 id="header-game">Game</h1>
        <h1 id="header-date">Date</h1>
        <h1 id="header-venue">Venue</h1>
        <h1 id="header-city">City</h1>
        <h1 id="header-country">Country</h1>
      </div>
      <p>(Click on tournament for more info)</p>
      {tournaments.map((tournament) => {
        return <Link to={`/${tournament.id}`} key={tournament.id}> 
        <TournamentComponent tournamentName={tournament.tournamentName} 
        eventTime={tournament.eventTime.toString().slice(0, 10)} 
        venue={tournament.venue}
        game={tournament.game}/>
        </Link>
      })}
      </div>
    );
  }

export default DisplayTournaments
