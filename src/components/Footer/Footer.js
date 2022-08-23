import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer_wrapper">
      <div className="container footer_section">
        <div className="row footer">
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-10 col-sm-10 about_resiliance">
            <div className="resiliance_hedaing">
              <p>Resilience</p>
            </div>
            <div className="resiliance_address">
              <p>
                Resilience Investment SAS, Société par Actions Simplifiée,
                immatriculée au RCS de Paris : 
              </p>
              <p className="mobile">907 710 248,</p>
            </div>
            <div className="resiliance_address_sec">
              <p>Siège social: 122 Rue Amelot, 75011 Paris, France.</p>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 footer_navigation">
            <div className="row footer_navigation_full_list">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-10 footer_navigation_full_list_one">
                <div className="footer_navigation_title">
                  <p>Pourquoi Resilience ?</p>
                </div>
                <div className="footer_navigation_list">
                  <ul>
                    <li>
                      <a href="#">Manifeste</a>
                    </li>
                    <li>
                      <a href="#">Le Cashback Solidaire</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-10 footer_navigation_full_list_two">
                <div className="footer_navigation_title">
                  <p>En savoir plus</p>
                </div>
                <div className="footer_navigation_list">
                  <ul>
                    <li>
                      <a href="#">A Propos</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-10 footer_navigation_full_list_three">
                <div className="footer_navigation_title">
                  <p>RESEAUX SOCIAuX</p>
                </div>
                <div className="footer_navigation_list">
                  <ul>
                    <li>
                      <a href="#">Linkedin</a>
                    </li>
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_bottom_line">  </div>
          
      

        <div className="row footer_description">
          <div className="copy_col col-xxl-4 col-xl-4 col-lg-4 col-md-10 col-sm-10"><p className="copyright">Copyright © Paris 2022 <span>Resilience.</span> All rights reserved.</p></div>
          <div className="term_col col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10"><p className="term_use">Terms of Use | Privacy Policy | Agreements and Guidelines</p></div>
          <div className="franc_col col-xxl-2 col-xl-2 col-lg-2 col-md-10 col-sm-10"><p className="francais">Français<span><img src="constant/downarrow.png" /></span></p></div>
          
        </div>
      </div>
    </div>
  );


};

export default Footer;
