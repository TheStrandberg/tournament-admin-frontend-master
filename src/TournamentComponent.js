import React from "react";
import "./App.css";

function TournamentComponent({ tournamentName, game, eventTime, venue }) {
  return (  
    <div className="single-tournament">
        <h1 id="name">{tournamentName}</h1>
        <h1 id="game">{game && game.title}</h1>
        <h1 id="eventtime">{eventTime}</h1>
        <h1 id="venue">{venue && venue.venueName}</h1>   
        <h1 id="city">{venue && venue.address.city}</h1>
        <h1 id="country">{venue && venue.address.country}</h1>
      </div>
       
  );
}

export default TournamentComponent;
