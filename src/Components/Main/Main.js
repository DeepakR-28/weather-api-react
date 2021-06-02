import React from 'react'

import classes from './Main.css'
const Main = (props) =>{

    return (
        <div className = {classes.container}>
            <label className = {classes.label}>Enter City</label>
            <br></br>
            <input className = {classes.input} onChange={props.input} placeholder = "ex : Delhi"/>
            <br></br>
            <button className = {classes.button} onClick = {props.searchHandler}>Search</button>
            <p className = {classes.error}>{props.error}</p>
            <div className = {classes.temperatureContainer}>
                <div className = {classes.temp}><strong>Max</strong><br />{props.maxTemp}</div>
                <div className = {classes.temp}><strong>Min</strong><br />{props.minTemp}</div>
            </div>
        </div>
    )
}

export default Main