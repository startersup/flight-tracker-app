import React from 'react';
import { DatePicker, Input, Button } from 'antd';
import './style.css';
import Navbar from '../navbar'


        export default () => {


const onFlightChange = (e) =>  {
console.log(e.target.value);
};

const onCarrierChange = (f) => {
    console.log(f.target.value);
}

const onChangeDate = (date, dateString) => {
    console.log(dateString);
}

const fetchData = () => {

    const axios = require('axios');
//https://cors-anywhere.herokuapp.com
    axios({
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/BA/2630/arr/2021/7/17',
        responseType: 'json',
        headers: {
            'appId' : '4a25e0eb',
            'appKey' : 'e6254fb07950dbe2ebe2d87baf740679',
            // 'Access-Control-Allow-Origin':'https://flight-trackerapp.herokuapp.com/',
            // 'Access-Control-Allow-Credentials': true
        }
      })
        .then(function (response) {
         console.log(response);
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





