import React from 'react';
import '../Styles.css';

//Import components
import Player from './Player';



const PlayersList = ({ players, setPlayers, teamA }) => {

    return(
        <form className="playerslist-container">
            <h3>Players List</h3>
            <ul>
                {players.map( (player) => (
                    <Player
                        players={players}
                        setPlayers={setPlayers}
                        playerName={player.name}
                        player={player}
                        key={player.id}
                        team={teamA}
                    />
                ))}
            </ul>
        </form>
    );
}


export default PlayersList;