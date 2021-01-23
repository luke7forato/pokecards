import React from 'react'
//css
import './Button.css'

export default function Checkbox(props) {
    
    const handleClick = () => {
        const name = document.getElementById(props.name);
        props.toggle(name);
    }

    return (
        <div>
            <button onClick={handleClick} id={props.name} className = {props.active ? 'active' : 'unactive'}>
                {props.name}
            </button>
        </div>
    )
}
