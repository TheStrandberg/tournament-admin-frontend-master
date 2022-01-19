import React from 'react'
import TournamentComponent from './TournamentComponent';
import { Link } from 'react-router-dom';
import "./App.css"

function DisplayTournaments( { tournaments }) {

    function convertTournament(searchObject) {
    return {
      id: searchObject.id,
      tournamentName: searchObject.tournamentName,
      description: searchObject.description,
      game: searchObject.game,
      eventTime: searchObject.eventTime.toString().slice(0, 10),
      venue: searchObject.venue,
    }
  }

  return (
      <div className="grid">
      {tournaments.map(convertTournament)
      .map((tournament) => {
        return <Link to={`/${tournament.id}`} key={tournament.id}> <TournamentComponent tournamentName={tournament.tournamentName}  description={tournament.description} 
        eventTime={tournament.eventTime} 
        venue={tournament.venue}
        game={tournament.game}/>
        </Link>
      })}
      </div>
    );
  }

export default DisplayTournaments
