import React from 'react'
import ReactDOM from 'react-dom'

let Convert = () => {
    let firstname = "Chinenye"
    let lastname = "Nwandu"
    let date = new Date();
    let hours = date.getHours();
    let timeofDay;

    if(hours<12){
        timeofDay = "Good Morning";
    }else if(hours>12 && hours<17){
        timeofDay="Good Afternoon"
    }else{
        timeofDay="Good Night"
    }

    return(
        <div>
            <h1> {`${timeofDay} ${firstname} ${lastname}`} </h1>
            <p> The time is {date.getHours()%12} o'clock</p>

        </div>
    )
}

export default Convert;