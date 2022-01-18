import React from "react";
import { useState } from "react";
import DisplayTournaments from "./DisplayTournaments";
import "./App.css";
// import GetTournaments from './GetTournaments'
// import DisplayTournaments from './DisplayTournaments'
const api = "https://localhost:44335/api/";

function FilterVenue({}) {
  const [tournamentState, setTournaments] = useState([]);

  async function GetTournaments() {
    let input = document.querySelector("input").value;
    var url = "";

    if (input !== "") {
      url = api + "venues/" + input;
    } else {
      url = "https://localhost:44335/api/Tournaments";
    }

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const tournamentArray = await response.json();
    console.log(tournamentArray);
    setTournaments(tournamentArray);
  }

  return (
    <div className="input">
      Venue Name
      <input type="text" id="input-name" />
      <button className="search-btn" onClick={GetTournaments}>
        Get Tournaments
      </button>
      {/* <GetTournaments setTournaments={setTournaments}/>   */}
      <DisplayTournaments tournaments={tournamentState} />
    </div>
  );
}

export default FilterVenue;
