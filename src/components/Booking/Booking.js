import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./Booking.css";

import ridersData from "../ridersData/ridersData";
import CheckOut from "../CheckOut/CheckOut";
const Booking = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { name } = useParams();
  const checkOut = ridersData.filter((spot) => spot.name === name);
  const { pickFrom, pickTo } = checkOut;
  console.log(checkOut);
  let history = useHistory();
  const handleSubmit = (name) => {
    history.push("/booking/" + `${name}`);
  };

  return (
    <>
      <section className="book-page">
        <div className="inner py-100">
          <div className="container ">
                        <div className="row">
                          <div className="col-lg-6 mb-3">
                            
                              <ul className="list-unstyled p-3 ">
                                <li className="mb-2">{pickFrom}</li>
                                <li className="mb-2"> </li>
                                <li>{pickTo}</li>
                              </ul>
                            
                          </div>
                        </div>
                      </div>
                  {isClicked ? (
                    <div>
                      {checkOut.map((spot) => (
                        <CheckOut key={spot.name} spot={spot} />
                      ))}
                     
                    </div>
                      ) : (
                              <>
                                  <div className="booking-form ">
                                  <form onSubmit={() => handleSubmit(name)}>
                      <div className="form-group">
                        <label htmlFor="origin">Pick From</label>
                        <input
                          type="text"
                          className="form-control input-field"
                          id="origin"
                          placeholder={pickFrom}
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="destination">Pick To</label>
                        <input
                          type="text"
                          className="form-control input-field"
                          id="destination"
                          placeholder={pickTo}
                          required
                        ></input>
                      </div>
                      <div style={{ display: "flex", marginBottom: "10px" }}>
                        <div>
                          <label htmlFor="start">Date</label>
                          <input
                            type="date"
                            className="form-control input-field-date"
                            id="start"
                            name="trip-start"
                            min="2021-03-19"
                            max=""
                            required
                          ></input>
                        </div>
                      </div>
      
                      <button
                        disabled={isClicked}
                        onClick={() => {
                          handleSubmit(name);
                          setIsClicked(true);
                        }}
                        className="booking-btn btn-warning"
                      >
                        {" "}
                        Search
                        </button>
                        </form>
                    </div>
                                          </>
                  )}
               
              
           

            <div
              style={{ overflow: "hidden" }}
              className="col-lg-6 google-map  "
            >
              
              <iframe
                width="520"
                height="400"
                frameborder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=mirpur%20dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>{" "}
              <script
                type="text/javascript"
                src="https://embedmaps.com/google-maps-authorization/script.js?id=719543af3818f173af00740f3999a228f1d1ab16"
              ></script>
            
            </div>
      
        </div>
      </section>
    </>
  );
};

export default Booking;
