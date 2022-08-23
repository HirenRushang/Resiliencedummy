import React from "react";
import "./Sensi.css";

const Sensi = () => {
  return (
    <div className="container-fluid sensi_wrapper">
      <div className="container sensi_section">
        <div className="row sensi_block">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 sensi_left_col">
            <div className="sensi_left_part">
              <img src="constant/overlapping.png" />
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 sensi_right_col">
            <div className="sensi_right_part">
              <div className="sensi_heading">
                <p className="heading_number">01</p>
                <p className="heading_text">SENSIBILISER</p>
              </div>
              <div className="sensi_para">
                <p className="sensi_para_one">
                  Notre but premier est de sensibiliser les français sur
                  l’impact de leur consommation en termes d’émissions de dioxyde
                  de carbone.
                </p>
                <p className="sensi_para_two">
                  Le constat est clair : le Haut conseil pour le climat l'a
                  calculé dans son rapport de 2019, même si la France ne
                  représente que 0,9% des émissions mondiales, un français émet
                  6,8 tonnes en moyenne d’équivalent CO2 par an, ce qui est
                  au-delà de la moyenne mondiale (4,8 tonnes).
                </p>
                <p className="sensi_para_three">
                  Avec un score carbone personnalisé, chacun de nos utilisateurs
                  pourra se rendre compte de façon pratique de l’impact
                  environnemental de sa consommation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sensi;
