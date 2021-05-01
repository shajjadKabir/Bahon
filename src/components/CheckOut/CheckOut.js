import { faDollarSign, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CheckOut.css';

const CheckOut = (props) => {
    const { key, img, person,totalPrice } = props.spot;
    return (
        <section className="container checkout-page">
                      
                <ul className="list-unstyled mb-0">
                                                                      
                  <li className="bg-light p-2 rounded d-flex justify-content-between align-items-center mb-2">
                    
                    <span>
                      <img className="w-50" src={img} alt={key} />
                    </span>
                    <span> {person} <FontAwesomeIcon icon={faUsers} /> </span>
                    <span> <FontAwesomeIcon icon={faDollarSign}/> {totalPrice}</span>
                    </li>

                    <li className="bg-light p-2 rounded d-flex justify-content-between align-items-center mb-2">
                    
                    <span>
                      <img className="w-50" src={img} alt={key} />
                    </span>
                    <span> {person} <FontAwesomeIcon icon={faUsers} /> </span>
                    <span> <FontAwesomeIcon icon={faDollarSign}/> {totalPrice}</span>
                    </li>
                
                <li className="bg-light p-2 rounded d-flex justify-content-between align-items-center mb-2">
                    
                    <span>
                      <img className="w-50" src={img} alt={key} />
                    </span>
                    <span> {person} <FontAwesomeIcon icon={faUsers} /> </span>
                    <span> <FontAwesomeIcon icon={faDollarSign}/> {totalPrice}</span>
                    </li>
                </ul>  
            
        
           
        </section>
    );
};

export default CheckOut;
