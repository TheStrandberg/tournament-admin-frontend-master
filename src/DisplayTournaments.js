import React from 'react'
import TournamentComponent from './TournamentComponent';
import { Link } from 'react-router-dom';
import "./App.css"

function DisplayTournaments( { tournaments }) {
  
  return (
      <div className="grid">
      {tournaments.map((tournament) => {
        return <Link to={`/${tournament.id}`} key={tournament.id}> 
        <TournamentComponent tournamentName={tournament.tournamentName} 
        description={tournament.description} 
        eventTime={tournament.eventTime.toString().slice(0, 10)} 
        venue={tournament.venue}
        game={tournament.game}/>
        </Link>
      })}
      </div>
    );
  }

export default DisplayTournaments
