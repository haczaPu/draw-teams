import React, { useState } from 'react';
import './Styles.css';


//Import components
import Form from './Components/Form';
import PlayersList from './Components/PlayersList';
import DrawButton from './Components/DrawButton';
import TeamsList from './Components/TeamsList';
import TeamsNumber from  './Components/TeamsNumber';

const App = () => {

    const [inputPlayer, setInputPlayer] = useState('');
    const [players, setPlayers] = useState([]);
    const [teamA, setTeamA] = useState([]);
    const [teamsNumber, setTeamsNumber] = useState('');

    return(
        <div className="App">

            <PlayersList
                players={players}
                setPlayers={setPlayers}
            />
            <TeamsList
                teamsNumber={teamsNumber}
                teamA={teamA}
                setTeamA={setTeamA}
                players={players}
                setPlayers={setPlayers}
            />
            <Form
                inputPlayer={inputPlayer}
                setInputPlayer={setInputPlayer}
                players={players}
                setPlayers={setPlayers}
            />
            <TeamsNumber
                teamsNumber={teamsNumber}
                setTeamsNumber={setTeamsNumber}
            />
            <DrawButton
                players={players}
                setPlayers={setPlayers}
                teamA={teamA}
                setTeamA={setTeamA}
                teamsNumber={teamsNumber}
            />

        </div>
    );
};


export default App;