import React from "react";
import "./Agir.css";

const Agir = () => {
  return (
    <div className="container-fluid agir_wrapper">
      <div className="container agir_section">
        <div className="row agir_block">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 agir_left_col">
            <div className="agir_left_part">
              <div className="agir_heading">
                <p className="heading_number">02</p>
                <p className="heading_text">AGIR</p>
              </div>
              <div className="agir_para">
                <p className="agir_para_one">
                  Au-delà de sensibiliser, nous souhaitons agir. En effet, le
                  dernier rapport du GIEC est alarmant, nous sommes dans une
                  situation critique. S’adapter reste heureusement possible.
                  <span>Pour nous, le meilleur moyen de s’adapter est de consommer de
                  façon différente.</span>
                </p>
                <p className="agir_para_two">
                  Pourquoi? En effet, nous le savons, les entreprises sont
                  beaucoup plus émettrices qu’un citoyen moyen. Or, un problème
                  persiste: elles ne changeront pas leur moyen de production si
                  nous ne changeons pas notre façon de consommer. C’est le
                  principe de l’offre et la demande.<span>Si nous achetons chez des
                  entreprises fortement émettrices, sans exiger davantage,
                  pourquoi changeraient-elles..</span> 
                </p>
                <p className="agir_para_three">
                  En se tournant donc vers des entreprises avec des moyens de
                  production plus responsables, une forte demande en ce sens se
                  crée et oblige les entreprises émettrices à se transformer.
                  Oui, nous le croyons, <span>le pouvoir des consommateurs est grand.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 agir_right_col">
            <div className="agir_right_part">
              <img src="constant/overlapping.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agir;
