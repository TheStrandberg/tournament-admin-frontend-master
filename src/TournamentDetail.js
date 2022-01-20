import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TournamentComponent from "./TournamentComponent";

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
      // convertTournament();
    }
    getTournament();
  }, []);

  // function convertTournament(searchObject) {
  //   return {
  //     id: searchObject.id,
  //     tournamentName: searchObject.tournamentName,
  //     description: searchObject.description,
  //     game: searchObject.game,
  //     eventTime: searchObject.eventTime.toString().slice(0, 10),
  //     venue: searchObject.venue,
  //   }
  // }

  return (
    <div className="tournament-detail">
      <Link to="/"><button> Back </button></Link>
      <h1>{tournament.tournamentName}</h1>
            <h2>{tournament.game && tournament.game.title}</h2>
            <p>{tournament.description}</p>
            <h3>{tournament.eventTime}</h3>
            <h4>{tournament.venue && tournament.venue.address.city}</h4>
    </div>
  );
}

export default TournamentDetail
