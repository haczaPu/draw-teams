import React, { useState } from 'react';

//Import components
import Form from './Components/Form';
import PlayersList from './Components/PlayersList';

const App = () => {

    const [inputPlayer, setInputPlayer] = useState('');
    const [players, setPlayers] = useState([]);

    return(
        <div>
            <Form
                inputPlayer={inputPlayer}
                setInputPlayer={setInputPlayer}
                players={players}
                setPlayers={setPlayers}
            />
            <PlayersList players={players}  setPlayers={setPlayers}/>
        </div>
    );
};


export default App;