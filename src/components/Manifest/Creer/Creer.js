import React from "react";
import "./Creer.css";

const Creer = () => {
  return (
    <div className="container-fluid creer_wrapper">
      <div className="container creer_section">
        <div className="row creer_block">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 creer_left_col">
            <div className="creer_left_part">
              <img src="constant/overlapping.png" />
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 creer_right_col">
            <div className="creer_right_part">
              <div className="creer_heading">
                <p className="heading_number">03</p>
                <p className="heading_text">CREER DES LIENS</p>
              </div>
              <div className="creer_para">
                <p className="creer_para_one">
                  <span>Le pouvoir des consommat eurs est grand, mais il l’est
                  davantage lorsqu’il est combiné avec celui des associations.</span>
                  C’est en ce sens que notre cashback solidaire existe. Pour
                  nous, le rôle des associations dans la protection de
                  l’environnement est important, les soutenir est donc
                  essentiel.
                </p>
                <p className="creer_para_two">
                  En choisissant Resilience, votre engagement est donc double:
                </p>
                <p className="creer_para_three">
                  <li>Vous changez votre façon de consommer,</li>
                  <li>Vous soutenez des associations. </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creer;
