import React from 'react';
import { DatePicker, Input, Button } from 'antd';
import './style.css';
import Navbar from '../navbar'


        export default () => {


const onFlightChange = (e) =>  {
console.log(e.target.value);
};

const onChangeDate = (date, dateString) => {
    console.log(dateString);
}

const fetchData = () => {
    fetch('https://flight-trackerapp.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/BA/2630/arr/2021/7/17',
    {
        method: 'GET', 
        headers: {
            appId: '4a25e0eb',
            appKey: 'e6254fb07950dbe2ebe2d87baf740679',
        }
    }
    )
  .then(response => response.json())
  .then(json => 
    {
        this.setState({
            isLoaded: true,
            items: json,
        })
    }
    )
};

     
            return( <div>
                <Navbar/>
                <section className="d-flex searchbar-wrapper">
                <Input placeholder="Enter Carrier Eg: EZY" size={10} onChange={onFlightChange}  className="ft-sm-inputs" />
               <Input placeholder="Enter Flight Number" size={20} onChange={onFlightChange}  className="ft-inputs" />
               <DatePicker onChange={onChangeDate}  className="ft-inputs wth-200"/>
               <Button type="primary"  className="ht-45 br-0"  onClick={fetchData}>
                  Track Status
                </Button>
               </section>
                </div>
                );

        };





