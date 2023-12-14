import React from 'react';
import './Pokecard.css';

function Pokecard({ id, name, type, exp}) {
    return (
        <div className="Pokecard">
            <h1>{name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
            <p>Type: {type}</p>
            <p>EXP: {exp}</p>
        </div>
    );
}

export default Pokecard;