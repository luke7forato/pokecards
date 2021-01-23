import React from 'react'
//css
import './Field.css'
//componenets
import Button from '../Button/Button'


export default function Field(props) {

    

    return (
        <div className="Field">
            {props.stats.map((stat) => {
                return <Button toggle={props.toggle} type={stat.type} active={stat.active} name={stat.name} key={stat.name}/>
            })}
        </div>
        
    )
}
