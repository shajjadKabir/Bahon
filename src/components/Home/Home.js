import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import background from '../../images/Bg.png';
import SpotUnit from '../SpotUnit/SpotUnit';
import ridersData from '../ridersData/ridersData';


const Home = () => {
    const[vehicle, setVehicle] = useState(ridersData[0]);
    const handleChange = (name) => {
       const newVehicle = ridersData.find(vehicle => vehicle.id === name)
       setVehicle(newVehicle);
    }
    const homeBackground = {
        backgroundImage: `url(${background})`,
    }

    return (
        
        <section className="main-page py-3" style={homeBackground}>
            
            <div className="inner">
            <div style={{ display: 'flex', margin: '40px',justifyContent: 'space-between'}}>
            
            {
                ridersData.map(vehicle => <SpotUnit vehicle={vehicle} key={vehicle.id} handleChange={handleChange} ></SpotUnit>)
            }
            </div>  
            </div>

            <div className="spot-info px-5">
                <h1>{vehicle.name}</h1>
                <Link to={'/booking/' + vehicle.name}>
                <button className="btn bookBtn">Pick a Ride</button>
                </Link>
            </div>
        </section>
       
    );
};

export default Home;