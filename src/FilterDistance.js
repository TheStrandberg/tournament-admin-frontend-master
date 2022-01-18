import React from 'react'
import { useState, useEffect } from 'react';
import DisplayTournaments from './DisplayTournaments';
import "./App.css"
// import GetTournaments from './GetTournaments'
// import DisplayTournaments from './DisplayTournaments'
const api = 'https://localhost:44335/api/';
let userLatitude = 0;
let userLongitude = 0;

function FilterDistance({  }) {

  const [tournamentState, setTournaments] = useState([]);
  
  useEffect(() => {
    async function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            setUserCoordinates(position.coords.latitude, position.coords.longitude);            
        });
      } else {
          alert("Can not get position")
      }
    }

    function setUserCoordinates(latitude, longitude) {
      userLatitude = latitude;
      userLongitude = longitude;
  }

    getLocation();
  }, []);

  async function GetTournaments() {    
  let input = document.querySelector("input").value;
  var url = "";    

    if (input !== "") {
      url = api + `Tournaments/near?distance=${input}&latitude=${userLatitude}&longitude=${userLongitude}`;
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
