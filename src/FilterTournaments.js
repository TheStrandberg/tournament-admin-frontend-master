import React from 'react'
import { useState, useEffect } from 'react';
import DisplayTournaments from './DisplayTournaments';
import "./App.css"
const api = 'https://localhost:44335/api/Tournaments?';
let userLatitude = 0;
let userLongitude = 0;

function FilterTournaments() {
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

  useEffect(() => {
    getTournaments();
  }, []);

async function getTournaments() {    
  let inputName = document.getElementById("input-name").value;
  let inputGame = document.getElementById("input-game").value;
  let inputVenue = document.getElementById("input-venue").value;
  let inputCountry = document.getElementById("input-country").value;
  let inputCity = document.getElementById("input-city").value;
  let inputDistance = document.getElementById("input-distance").value;

  let url = api;

  if (inputName !== "") {
    url += `name=${inputName}&`;
  }
  if (inputGame !== "") {
    url += `game=${inputGame}&`;
  }
  if (inputVenue !== "") {
    url += `venue=${inputVenue}&`;
  }
  if (inputCountry !== "") {
    url += `country=${inputCountry}&`;
  }
  if (inputCity !== "") {
    url += `city=${inputCity}&`;
  }
  if (inputDistance !== "") {
    url += `distance=${inputDistance}&latitude=${userLatitude}&longitude=${userLongitude}&`;
  }  

  url = url.slice(0, -1);
  console.log(url);
    
    const response = await fetch(url, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    })
    const tournamentArray = await response.json();
    console.log(tournamentArray);
    setTournaments(tournamentArray);   
  }

  function clearSearchFields() {
    document.querySelectorAll("input").forEach((element) => {
      element.value = "";
    })
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
        <button className="search-btn" onClick={ getTournaments }>
        Search</button>
        <button className="search-btn" onClick={clearSearchFields}>
        Clear</button>
        </div>
        <DisplayTournaments  tournaments={tournamentState}/>
        </div>
    )
}

export default FilterTournaments;
