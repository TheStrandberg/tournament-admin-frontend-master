import React from 'react'
import { useState} from 'react';
import DisplayTournaments from './DisplayTournaments';
import "./App.css"
// import GetTournaments from './GetTournaments'
// import DisplayTournaments from './DisplayTournaments'
const api = 'https://localhost:44335/api/';

function FilterDistance({  }) {

    const [tournamentState, setTournaments] = useState([]);

async function GetTournaments() {    
  let input = document.querySelector("input").value;
  var url = "";

    if (input !== "") {
      url = api + "Tournaments/near?distance=" + input + "&latitude=59.000000&longitude=18.000000";
    }
    else {
        url = "https://localhost:44335/api/Tournaments";
    }
    
    const response = await fetch(url, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    })
    const tournamentArray = await response.json();
    console.log(tournamentArray);
    setTournaments(tournamentArray);   
  }

    return (
        <div className="input">
         Distance in km <input type="text" id="input-name"/> 
         <p></p>
        <button className="search-btn" onClick={ GetTournaments }>
        Get Tournaments
        </button>
        {/* <GetTournaments setTournaments={setTournaments}/>   */}
        <DisplayTournaments tournaments={tournamentState}/>
      
        </div>
    )
}

export default FilterDistance;
