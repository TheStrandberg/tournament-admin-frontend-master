import React from 'react';
// import TournamentComponent from './TournamentComponent';
import FilterGame from './FilterGame';
const api = 'https://localhost:44335/api/';

function GetTournaments( { setTournaments, tournaments }) {


  async function GetTournaments() {
  let inputTournamentName = document.getElementById("input-name").value;
  let inputGame = document.getElementById("input-game").value;
  let inputVenue = document.getElementById("input-venue").value;
  
  var url = "";

    if (inputTournamentName !== "") {
      url = api + "Tournaments/" + inputTournamentName;
    }
    else if (inputGame !== "") { 
      url = api + "games/" + inputGame;
    }
    else if (inputVenue !== "") {
      url = api + "venues/" + inputVenue;
    }
    
    const response = await fetch(url, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    })
    const tournamentArray = await response.json();
    console.log(tournamentArray);
    setTournaments(tournamentArray);   
  }

  // function convertTournament(searchObject) {
  //   return {
  //     id: searchObject.id,
  //     title: searchObject.tournamentName,
  //     description: searchObject.description,
  //     game: searchObject.game,
  //     eventTime: searchObject.eventTime,
  //     venue: searchObject.venue,
  //   }
  // }

    return (
        <div className="search-window">
        <FilterGame update={GetTournaments}/>
        {/* <form>
        Name <input type="text" id="input-name"/> 
        <p></p>
        Venue <input type="text" id="input-venue"/> 
        <p></p>
        Game <input type="text" id="input-game"/> 
        <p></p>
        </form>
            <button className="search-btn" onClick={ GetTournaments }>
        Get Tournaments
      </button> */}
      <div>
      {/* {tournaments.map(convertTournament)
      .map((tournament) => {
        return <TournamentComponent 
        key={tournament.id} 
        tournamentName={tournament.title} 
        description={tournament.description} 
        eventTime={tournament.eventTime} 
        venue={tournament.venue}
        game={tournament.game}/>
      }) */}
      {/* } */}
      </div>
        </div>
        
    )
}

export default GetTournaments
