import React from 'react';

//Import components
import Player from './Player';

const PlayersList = ({ players, setPlayers, teamA }) => {

    return(
        <form>
            <h3>All players</h3>
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