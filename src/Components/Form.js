import React from "react";

const Form = ( {inputPlayer, setInputPlayer, players, setPlayers} ) => {

    const onChangeHandler = (e) => {
        setInputPlayer(e.target.value);
        console.log(e.target.value);
    };

    const addPlayerHandler = (e) => {
        e.preventDefault();
        setPlayers([
            ...players, {name: inputPlayer}
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