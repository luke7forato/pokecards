import React from 'react'
//css
import './CardTable.css'
//componenets
import Card from '../Card/Card'

export default function CardTable(props) {

    return (
        <div className="CardTable">
            {
                props.pokemonToShow.map((element) => {
                    return <Card 
                    name={element.name}
                    id={element.id}
                    key={element.id}
                    types={element.types}
                    />
                })
            }
        </div>
    )
}
