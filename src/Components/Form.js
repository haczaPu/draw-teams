import React from "react";

const Form = ( {inputPlayer, setInputPlayer, players, setPlayers} ) => {

    const onChangeHandler = (e) => {
        setInputPlayer(e.target.value);
    };

    const addPlayerHandler = (e) => {
        e.preventDefault();
        setPlayers([
            ...players, {name: inputPlayer, id:  Math.random() * 1000, teamA: 0}
        ]);
        setInputPlayer('');
    };

    return(
        <div>
            <input value={inputPlayer} onChange={onChangeHandler} type="text"></input>
            <button onClick={addPlayerHandler} type="submit">Add Player</button>
        </div>
    );
}

export default Form;