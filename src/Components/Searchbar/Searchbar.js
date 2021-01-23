import React from 'react'
//css
import './Searchbar.css'
//components
import Field from '../Field/Field'

export default function Searchbar(props) {

    return (
        <div className="Searchbar">
            <Field toggle={props.toggleButtons} stats={props.colors}/> 
            <Field toggle={props.toggleButtons} stats={props.types}/> 
            <Field toggle={props.toggleButtons} stats={props.habitats}/> 
        </div>
    )
}
