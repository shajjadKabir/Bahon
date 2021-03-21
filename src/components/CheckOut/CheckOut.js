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
                
                <div style={{overflow: 'hidden'}} className="col-6 google-map ">
                
                <iframe width="520" height="400" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=mirpur%20dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=719543af3818f173af00740f3999a228f1d1ab16'></script>
                </div>
          
        
           
        </section>
    );
};

export default CheckOut;
