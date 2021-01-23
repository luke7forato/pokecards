import React from 'react'
//css
import './Card.css'

export default function Card(props) {

    return (
        <div className="Card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`} alt={props.name}/>
            <h2>{props.name}</h2>
            <div className="span">
                {props.types.map((type) => {
                    return <span key={type.type.name} className={type.type.name}>{type.type.name}</span>
                })}
            </div>
        </div>
    )
}
