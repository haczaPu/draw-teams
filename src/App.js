import React, { useState } from 'react';
import './Styles.css';
import { v4 as uuidv4 } from 'uuid';


//Import components
import Form from './Components/Form';
import PlayersList from './Components/PlayersList';
import DrawButton from './Components/DrawButton';
import TeamsList from './Components/TeamsList';
import TeamsNumber from  './Components/TeamsNumber';
import Team from './Components/Team';

const App = () => {

    const [inputPlayer, setInputPlayer] = useState('');
    const [players, setPlayers] = useState([]);
    const [teamsNumber, setTeamsNumber] = useState(4);
    const [allTeams, setAllTeams] = useState([<Team key={uuidv4()} />,<Team key={uuidv4()} />,<Team key={uuidv4()} />,<Team key={uuidv4()}/>]);

    // useEffect(() => {
    //     function  setAllTeamsHandler() {
    //          setAllTeams([]);
    //          console.log(allTeams);
    //          for (let i = 0; i < teamsNumber; i++) {
    //             allTeams.push(<Team key={i} />);
    //          };
    //          console.log(allTeams);
    //     }

    //      setAllTeamsHandler();
    //  }, [teamsNumber]);


    //  useEffect(() => {
    //      const setAllTeamsHandler = () => {
    //         console.log(allTeams);
    //         for (let i = 0; i < teamsNumber; i++) {
    //            allTeams.push(<Team key={uuidv4} />);
    //         };
    //         console.log(allTeams);
    //     }
    //     setAllTeamsHandler();
    //     return () => {
    //         setAllTeams([]);
    //         console.log(allTeams);
    //     }
    //  }, [allTeams, teamsNumber]);

 const showAllTeamsaLog = () => {
    console.log(allTeams);
 }


    return(
        <div className="App">

            <PlayersList
                players={players}
                setPlayers={setPlayers}
            />
            <TeamsList
                teamsNumber={teamsNumber}
                allTeams={allTeams}
                setAllTeams={setAllTeams}
            />
            <Form
                inputPlayer={inputPlayer}
                setInputPlayer={setInputPlayer}
                players={players}
                setPlayers={setPlayers}
            />
            <TeamsNumber
                setTeamsNumber={setTeamsNumber}
                teamsNumber={teamsNumber}
                setAllTeams={setAllTeams}
                allTeams={allTeams}

            />
            <DrawButton
                players={players}
                setPlayers={setPlayers}
                teamsNumber={teamsNumber}
                allTeams={allTeams}
            />
            <button onClick={showAllTeamsaLog}>Show All tems in console</button>
        </div>
    );
};


export default App;