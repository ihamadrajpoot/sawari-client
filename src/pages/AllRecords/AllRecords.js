import {React, useEffect, useState} from 'react';
import AllRecordsList from '../../compoments/AllRecordsList';
import './AllRecords.css';
import axios from 'axios';

const AllRecords = (props) => {

    const [data, setData] = useState([]);
    const columns = [
     { name: "First Name", options: { filterOptions: { fullWidth: true } } },
     "Last Name",
     "Email",
     "Phone Number",
     "Gender",
     "CNIC",
     "User Type",
     "Monthly Charges",
     "Occupation",
     "Days",
     "Timings",
     "Display Contact",
     "Available Status",
     "Pick up House Number",
     "Pick up Phase",
     "Pick up Sector",
     "Pick up Street",
     "Pick up City",
     "Drop off City",
     "Drop off House Number",
     "Drop off Phase",
     "Drop off Sector",
     "Drop off Street",
  ];

    useEffect(() => {
        getUsersList();
      },[])
  
      const getUsersList = () => {
        axios.get('http://sawari-server.herokuapp.com/api/user/usersList')
        .then(function (response) {
            
            if (response && response.data && response.data.data && response.data.data.length > 0){
                // console.log("USERS LIST",response.data.data);
                formatTableData(response.data.data);
            }
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    const formatTableData = (responseData) => {
        const tempData = [];
        if (responseData && responseData.length > 0){
            responseData.map((data) => {
                // console.log("DATA",data);
                let values = Object.values(data);
                values = values.slice(1, -1);
                // console.log("VALUES",values);
                tempData.push(values);
            })
        }
        setData(tempData);
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
        <AllRecordsList data={data} columns={columns} />
       </div>
        </>
    )
}

export default AllRecords;