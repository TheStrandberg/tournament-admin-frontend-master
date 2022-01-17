import React from 'react'
import TournamentComponent from './TournamentComponent';
import "./App.css"

function DisplayTournaments( { tournaments }) {

    function convertTournament(searchObject) {
    return {
      id: searchObject.id,
      tournamentName: searchObject.tournamentName,
      description: searchObject.description,
      game: searchObject.game,
      eventTime: searchObject.eventTime,
      venue: searchObject.venue,
    }
  }

    return (
      <div className="grid">
     {tournaments.map(convertTournament)
      .map((tournament) => {
        return <TournamentComponent 
        key={tournament.id} 
        tournamentName={tournament.tournamentName} 
        description={tournament.description} 
        eventTime={tournament.eventTime} 
        venue={tournament.venue}
        game={tournament.game}/>
      })
      }
      </div>
    );
  }

export default DisplayTournaments
