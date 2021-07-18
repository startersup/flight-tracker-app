import React, {useState} from 'react';
import Search from '../components/Search'

export default () => {
    const [carrier, setCarrier] =  useState("");
    const [date, setDate] =  useState("");
    const [flightNumber, setFlightNumber] =  useState("");
    return (
        <div>
         <Search date={date} setDate={setDate} flightNumber ={flightNumber} setFlightNumber ={setFlightNumber} carrier={carrier} setCarrier={setCarrier}/>

        </div>
    )
}


