import React from 'react';

const Team = () => {

    const druzyna = ["Marek", "Czarek", "Darek"]

    return(
        <div className="team">
            <h3>Team Name</h3>
            <div>{druzyna[0]}</div>
            <div>{druzyna[1]}</div>
            <div className="last-team">{druzyna[2]}</div>
        </div>
    );
}


export default Team;