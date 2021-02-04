import React from 'react';

const Team = ({ players }) => {
    return(
        <div className="team">
            <h3>Team Name</h3>
          {players.map((player, idx) => (
            <div>{player}</div>
          ))}
        </div>
    );
}


export default Team;
