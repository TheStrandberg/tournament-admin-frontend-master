import {Routes, Route} from "react-router-dom";
import TournamentDetail from "./TournamentDetail";
import './App.css';
import FilterTournaments from './FilterTournaments';

function App() {

  return (
    <div className="App">
    <div className='routes'>
    <Routes>
        <Route path="/" element={ <FilterTournaments /> } exact />
        <Route path="/:id" element={ <TournamentDetail />} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
