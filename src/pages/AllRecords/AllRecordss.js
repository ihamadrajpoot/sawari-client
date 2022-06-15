import {React, useEffect, useState} from 'react';
import AllRecordsList from '../../compoments/AllRecordsList/indexx';
import './AllRecords.css';
import axios from 'axios';

const AllRecords = (props) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        getUsersList();
      },[])
  
      const getUsersList = () => {
        axios.get('http://localhost:5000/api/user/usersList')
        .then(function (response) {
            
            if (response && response.data && response.data.data && response.data.data.length > 0){
                console.log("USERS LIST",response.data.data);
                setData(response.data.data);
            }
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    return (
        <>
         <div id='allRecordsContainer'>
            <div className='allRecordsOverlay'>
                <div className='allRecordsTextContainer'>
                    <div>
                    <p className='allRecordsText'>Your Destination - Our Mission</p>
                    <p className='allRecordsSubtext'>We are safe movers making transportation fast, easy and safe</p>
                    <p className='allRecordsSubtext'>We provide transportation service to travel easily around any city of Pakistan at affordable rates</p>
                    <p className='allRecordsSubtext'>Register with us by filling out the form below and enjoy the perks of travelling with us</p>
                    </div>
                </div>
            </div>
        </div>
       <div className='usersListContainer'>
        <p className='usersListHeading'>USERS LIST</p>
        <AllRecordsList data={data} />
       </div>
        </>
    )
}

export default AllRecords;