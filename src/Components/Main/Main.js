import React from 'react'

const Main = (props) =>{
    const container = {
        color: "black",
        backgroundColor: "#eee",
        padding: "10px",
        fontFamily: "Arial",
        width: "60%",
        height : "80%",
        margin: "0",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow : "0 4px 5px grey"
      };
    const input ={
        width: "80%",
        height: "30px",
        margin: "0",
        display : "block",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop : "5%",
        border : "1px solid #ccc",
        fontFamily : "'Roboto', sans-serif",
        fontSize : "20px",
    }
    const label = {
        margin: "0",
        display : "block",
        marginRight: "auto",
        marginLeft: "auto",
        textAlign : "center",
        fontFamily: "'Roboto', sans-serif",
        fontSize : "30px"
    }
    const button = {
        display: "block",
        marginLeft : "auto",
        marginRight: "auto",
        fontFamily: "'Roboto', sans-serif",
        color: "black",
        fontSize : "20px",
        backgroundColor : "#f39c12",
        border : "0px solid transparent",
        width: "100px",
        height : "40px",
        borderRadius :"10px"
    }
    const temperatureContainer = {
        // backgroundColor : "#f39c12",
        // margin: "0",
        // position: "absolute",
        // left: "50%",
        // width: "10%",
        // height:""
        display: "flex",
        flexDirection : "row",
    }
    const temp ={
        width : "200px",
        height : "100px",
        backgroundColor : "#ecf0f1",
        margin: "10% 20% 0% 20%",
        fontFamily: "'Roboto', sans-serif",
        fontSize:"20px"
    }
    const error ={
        margin :"0",
        textAlign : "center",
        color: "Red",
        marginTop: "20px"
    }
    return (
        <div style = {container}>
            <label style = {label}>Enter City</label>
            <br></br>
            <input style = {input} onChange={props.input} placeholder = "ex : Delhi"/>
            <br></br>
            <button style = {button} onClick = {props.searchHandler}>Search</button>
            <p style = {error}>{props.error}</p>
            <div style = {temperatureContainer}>
                <div style = {temp}><strong>Max</strong><br />{props.maxTemp}</div>
                <div style = {temp}><strong>Min</strong><br />{props.minTemp}</div>
            </div>
        </div>
    )
}

export default Main