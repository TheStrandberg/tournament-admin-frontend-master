import React from 'react'
import { useState, useEffect } from 'react';
import DisplayTournaments from './DisplayTournaments';
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import TournamentDetail from './TournamentDetail';
let api = 'https://localhost:44335/api/Tournaments?';
let userLatitude = 0;
let userLongitude = 0;

function FilterTournaments({  }) {

    const [tournamentState, setTournaments] = useState([]);

async function GetTournaments() {    
  let inputName = document.getElementById("input-name").value;
  let inputGame = document.getElementById("input-game").value;
  let inputVenue = document.getElementById("input-venue").value;
  let inputCountry = document.getElementById("input-country").value;
  let inputCity = document.getElementById("input-city").value;
  let inputDistance = document.getElementById("input-distance").value;

  if (inputName !== "") {
    api += inputName + "&";
  }
  if (inputGame !== "") {
    api += inputGame + "&";
  }
  if (inputVenue !== "") {
    api += inputVenue + "&";
  }
  if (inputCountry !== "") {
    api += inputCountry + "&";
  }
  if (inputCity !== "") {
    api += inputCity + "&";
  }
  if (inputDistance !== "") {
    api += `/near?distance=${inputDistance}&latitude=${userLatitude}&longitude=${userLongitude}`;
  }

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
    
    const response = await fetch(api, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    })
    const tournamentArray = await response.json();
    console.log(tournamentArray);
    setTournaments(tournamentArray);   
  }

    return (
        <div>
        <div className="input">
        Tournament Name <input type="text" id="input-name"/> 
        Tournament Game <input type="text" id="input-game"/> 
        Tournament Venue <input type="text" id="input-venue"/> 
        Tournament Country <input type="text" id="input-country"/> 
        Tournament City <input type="text" id="input-city"/> 
        Tournament Distance <input type="text" id="input-distance"/> 
        <button className="search-btn" onClick={ GetTournaments }>
        Search
        </button>
        </div>
        <DisplayTournaments tournaments={tournamentState}/>
        <Routes>
        <Route path="/filter-games:/id" element={ <TournamentDetail />} />
        </Routes>
        </div>
    )
}

export default FilterTournaments;
