import React from 'react';
import './SpotUnit.css';

const SpotUnit = (props) => {
    const {name, img, id,} = props.vehicle;
    
    return (
        
        <div className="card" style={{ width: '18rem' }}  onClick={() => props.handleChange(id)}>
              
            <img src={img} className="card-img-top" alt="..."/>
            <br/>
                <h4 className="title-design">{name}</h4>
            
        </div>
            
        
    );
};
export default SpotUnit;