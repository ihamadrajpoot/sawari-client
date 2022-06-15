import {React} from 'react';
import RegisterForm from '../../compoments/RegisterForm';
import './Home.css';

const Home = (props) => {
    return (
        <>
        <div id='homeHeaderContainer'>
            <div className='homeHeaderOverlay'>
                <div className='homeHeaderTextContainer'>
                    <div>
                    <p className='homeHeaderText'>Your Destination - Our Mission</p>
                    <p className='homeHeaderSubtext'>We are safe movers making transportation fast, easy and safe</p>
                    <p className='homeHeaderSubtext'>We provide transportation service to travel easily around any city of Pakistan at affordable rates</p>
                    <p className='homeHeaderSubtext'>Register with us by filling out the form below and enjoy the perks of travelling with us</p>
                    </div>
                </div>
                <div className='registerForm'>
                    <p className='registerFormHeading'>DETAILS FORM</p>
                    <RegisterForm />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;