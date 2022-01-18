import { useState} from 'react';
import DisplayTournaments from './DisplayTournaments';
import GetTournaments from './GetTournaments';
import {Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import FilterGame from './FilterGame';
import FilterName from './FilterName';
import FilterVenue from "./FilterVenue"
import './App.css';

function App() {
  // const [tournamentState, setTournaments] = useState([]);

  // COMMENT FOR TEST PUSH

  return (
    <div className="App">
    <Navbar />
    <div className='routes'>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/filter-games/" element={ <FilterGame /> } />
        <Route path="/filter-names" element={ <FilterName /> } />
        <Route path="/filter-venues" element={ <FilterVenue /> } />
      </Routes>
    {/* <GetTournaments setTournaments={setTournaments}/>  */}
    {/* <DisplayTournaments tournaments={tournamentState}/>   */}
    </div>
    </div>
  );
}

export default App;
