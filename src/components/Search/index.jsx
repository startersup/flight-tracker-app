import React, { useState } from "react";
import axios from "axios";
import { DatePicker, Input, Button, message } from 'antd';
import './style.css';
import Navbar from '../navbar'


        const search = ({setCarrier, setDate, setFlightNumber, flightNumber, date, carrier}) => {
 
const onFlightChange = (e) =>  {
setFlightNumber(e.target.value);;

};

const onCarrierChange = (e) => {
    console.log(e.target.value);
  setCarrier (e.target.value);
}

const onChangeDate = (date, dateString) => {
setDate(dateString)
console.log(dateString);
}

var dateFormat = date.replace('-', '/'); 
var refineFormat = dateFormat.replace('-','/');
console.log(date, refineFormat);

const fetchData = (e) => {
    if(!carrier || !flightNumber || !date)
    {
        message.error('All the Inputs are Required');
    return;
    }
    else 
    {
        const key = 'updatable';
        message.loading({ content: 'Fetching...', key });
    }
    e.preventDefault();
    
    const axios = require('axios');
    axios({
        method: 'get',
        url: "https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/"+ setCarrier + "/"+ SetFlight + "/arr/" + refineFormat,
        responseType: 'json',
        headers: {
            'appId' : '4a25e0eb',
            'appKey' : 'e6254fb07950dbe2ebe2d87baf740679',
        }
      })
        .then(function (response) {
            const key = 'updatable';
            setTimeout(() => {
                message.success({ content: 'Fetched', key, duration: 10 });
              }, 3000);
        });
};

     
            return( <div>
                <Navbar/>
              <section className="d-flex searchbar-wrapper">
                <div>
                <Input placeholder="Carrier Eg: EZY" size={10} onChange={onCarrierChange}  className="ft-sm-inputs" />
                </div>
               <Input placeholder="Flight Number Eg: 2630" size={20} onChange={onFlightChange}  className="ft-inputs" />
               <DatePicker onChange={onChangeDate}  className="ft-inputs wth-200"/>
               <Button type="primary"  className="ht-45 br-0"  onClick={fetchData}>
                  Track Status
                </Button>
               </section>
                </div>
                );


        };

        export default search;




