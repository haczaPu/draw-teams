import React from 'react';

import Player from './Player';

const PlayersList = ({players}) => {

    return(
        <form>
            <h3>All players</h3>
            <ul>
                {players.map( (player, index) => (
                    <Player 
                        playerName={player.name} 
                        key={index}
                    />
                ))}
            </ul>
        </form>
    );
}


export default PlayersList;