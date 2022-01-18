import { useState} from 'react';
import DisplayTournaments from './DisplayTournaments';
import GetTournaments from './GetTournaments';
import {Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import FilterGame from './FilterGame';
import FilterName from './FilterName';
import FilterVenue from "./FilterVenue";
import FilterDistance from "./FilterDistance";

import './App.css';

function App() {
  // const [tournamentState, setTournaments] = useState([]);

  return (
    <div className="App">
    <Navbar />
    <div className='routes'>
      <Routes>
        <Route path="/" element={ <Home /> } exact/>
        <Route path="/filter-games/" element={ <FilterGame /> } />
        <Route path="/filter-names" element={ <FilterName /> } />
        <Route path="/filter-venues" element={ <FilterVenue /> } />
        <Route path="/filter-distance" element={ <FilterDistance /> } />
      </Routes>
    {/* <GetTournaments setTournaments={setTournaments}/>  */}
    {/* <DisplayTournaments tournaments={tournamentState}/>   */}
    </div>
    </div>
  );
}

export default App;
