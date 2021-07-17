import React, {useState} from 'react';
import Search from '../components/Search'

export default () => {

    const [setFlightData] = useState ("");
    return (
        <div>
         <Search setFlightData={setFlightData} />
        </div>
    )
}


