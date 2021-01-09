import React from 'react';

const Player = ( {playerName, players, setPlayers, player } ) => {

    const deleteHandler = () => {
        setPlayers(players.filter((el) => el.id !== player.id));
    };

    return(
        <div>
            <li>{playerName}</li>
            <button onClick={deleteHandler}>X</button>
        </div>
    )
};

export default Player;