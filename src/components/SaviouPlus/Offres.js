import React from "react";
import "./Offres.css";


const Offres = () => {
  return (
    <div className="container_fluid offres_wrapper">
      <div className="container offres_section">
        <div className="row offres_block_heading">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="offres_heading">
              <p className="title">Nos offres d’emplois</p>
            </div>
          </div>
        </div>

        <div className="row offres_first_card_line">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="card_one">
                  <div className="staff_category">
                      <p>Marketing</p>
                  </div>
                  <div className="staff_post">
                      <p>Assistant(e) Communication & Marketing Digital</p>
                  </div>
                  <div className="staff_location">
                  <p className="paris"><img src="constant/location.png" alt="" />Paris</p>
                  <p className="full_time"><img src="constant/time.png" alt="" />Full-Time</p>
                     
                  </div>
              </div>
          </div>

          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 card_sec_col">
            <div className="card_two">
                  <div className="staff_category">
                      <p>Tech</p>
                  </div>
                  <div className="staff_post">
                      <p>Junior JavaBackend Developer</p>
                  </div>
                  <div className="staff_location">
                  <p><img src="constant/location.png" alt=""/>Paris</p>
                  <p className="intern"><img src="constant/time.png" alt=""/>Internship</p>
                     
                  </div>
              </div>
          </div>
        </div>

        <div className="row offres_sec_card_line">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
          <div className="card_one">
                  <div className="staff_category">
                      <p>Tech</p>
                  </div>
                  <div className="staff_post">
                      <p>Lead Mobile Developer(Flutter)</p>
                  </div>
                  <div className="staff_location">
                  <p><img src="constant/location.png" alt=""/>Paris</p>
                  <p className="full_time"><img src="constant/time.png"/>Full-Time</p>
                     
                  </div>
              </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 card_four_col">
          <div className="card_two">
                  <div className="staff_category">
                      <p>Tech</p>
                  </div>
                  <div className="staff_post">
                      <p>Junior Data Scientist</p>
                  </div>
                  <div className="staff_location">
                  <p><img src="constant/location.png" alt=""/>Paris</p>
                  <p className="intern"><img src="constant/time.png" alt=""/>Internship</p>
                     
                  </div>
              </div>
          </div>
        </div>

        <div className="offres_btn">
          <button>Découvrir nos offres<img src="constant/right arrow.png" alt=""/></button>
        </div>
      </div>
    </div>
  );
};

export default Offres;
