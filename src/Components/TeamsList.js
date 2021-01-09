import React from 'react';

//Import components
import Player from './Player';

const TeamsList = ( {players , setPlayers, teamA, setTeamA, player}) => {
    return (
        <form>
            <h5>TeamA</h5>
            <ul>
                {teamA.map( (player) => (
                    <Player
                        players={players}
                        setPlayers={setPlayers}
                        playerName={player.name}
                        player={player}
                        key={player.id}
                   />
                ))}
            </ul>
        </form>
    )
}

export default TeamsList;