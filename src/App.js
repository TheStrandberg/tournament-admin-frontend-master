// import { useState} from 'react';
// import DisplayTournaments from './DisplayTournaments';
// import GetTournaments from './GetTournaments';
import {Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import TournamentDetail from "./TournamentDetail";
// import FilterGame from './FilterTournaments';
// import FilterName from './FilterName';
// import FilterVenue from "./FilterVenue";
// import FilterDistance from "./FilterDistance";

import './App.css';
import FilterTournaments from './FilterTournaments';

function App() {
  // const [tournamentState, setTournaments] = useState([]);

  return (
    <div className="App">
    <Navbar />
    <div className='routes'>
      <Routes>
        {/* <Route path="/" element={ <Home /> } exact/> */}
        <Route path="/" element={ <FilterTournaments /> } exact />
        <Route path="/:id" element={ <TournamentDetail />} />
      </Routes>
    {/* <GetTournaments setTournaments={setTournaments}/>  */}
    {/* <DisplayTournaments tournaments={tournamentState}/>   */}
    </div>
    </div>
  );
}

export default App;
