import React from 'react';

const DrawButton = ( { players, setTeamA, teamsNumber } ) => {

    const drawHandler = () => {
        players.map( (el) => el.teamA = Math.floor(Math.random() * teamsNumber + 1));
        setTeamA(players.filter(() => players.teamA !== 0));
        console.log(players);
    };

    return(
        <div>
            <button onClick={drawHandler}>Draw Teams</button>
        </div>
    )
};

export default DrawButton;