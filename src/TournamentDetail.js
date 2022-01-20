import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function TournamentDetail() {
  let { id } = useParams();
  const [tournament, setTournament] = useState({});
  useEffect(() => {
    async function getTournament() {
      const response = await fetch(
        "https://localhost:44335/api/Tournaments/" + id,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const tournamentObject = await response.json();
      console.log(tournamentObject);
      setTournament(tournamentObject);
    }
    getTournament();
  }, []);

  return (
    <div className="tournament-detail">
  <Link to="/"><button id="back-button">Back To Search Page</button></Link>
      <h1>{tournament.tournamentName}</h1>
            <h2>{tournament.game && tournament.game.title}</h2>
            <p>{tournament.description}</p>
            <h3>{tournament.eventTime && tournament.eventTime.toString().slice(0, 10)}</h3>
            <h4>{tournament.venue && tournament.venue.venueName} ({tournament.venue && tournament.venue.address.street})</h4>
            <h4>{tournament.venue && tournament.venue.address.city}</h4>
            <h4>{tournament.venue && tournament.venue.address.country}</h4>
            <ul className="player-list">
              {tournament.players && tournament.players.map((player) => (
                <li>
                  <h3 key={player.id}>{player && player.firstName} {player && player.lastName} ({player && player.gameHandle}) - {player && player.homeTown} ({player && player.countryOfOrigin})</h3>
                </li>
              ))}
            </ul>
            <Link to="/"><button id="back-button">Back To Search Page</button></Link>
    </div>
  );
}

export default TournamentDetail
