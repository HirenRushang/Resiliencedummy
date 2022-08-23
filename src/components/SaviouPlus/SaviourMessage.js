import React from "react";
import "../SaviouPlus/SaviourMessage.css";

const SaviourMessage = () => {
  return (
    <div className="container-fluid saviour_message_wrapper">
      <div className="container saviour_message_section">
        <div className="row saviour_message_block">
          <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7 saviour_message_block_img">
            <img src="constant/blackandwhite.png" alt=""/>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-5 col-sm-5 saviour_message_block_para">
            <div className="saviour_para">
            <p className="message_text">
              « Nous construisons des banques pour les communautés avec une
              conscience sociale et environnementale. »
            </p>
            <p className="message_from">Notre équipe</p>
            <p className="compony_name">@Resilience</p>
            </div>
            
          </div>
        </div>

        <div className="row saviour_devider">
           <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-12  saviour_devider_columm">
           <div className="props_border_top"></div>
           </div>
        </div>

         <div className="row saviour_props_block">
          
          <div className="col-xxl-9 col-xl-11 col-lg-11 col-md-12  saviour_props_column">
          <div className="props_title">
            <p>A propos :</p>
          </div>
          <div className="props_para">
            <p>
              Résilience est née d’une volonté de rendre la finance plus
              transparente, plus vertueuse et plus durable. Résilience est la
              première application mobile 100% française, éthique et à impact
              positif qui révèle l’empreinte carbone de vos dépenses.
            </p>
          </div>
          <div className="props_para_sec">
            <p>
              Notre mission est de vous aider à comprendre, monitorer et réduire
              votre impact environnemental au quotidien. Grâce à son score
              d’impact environnemental, Résilience peut calculer les émissions
              de CO2 de chaque dépense bancaire et vous aider au changement
              grâce aux outils d’aide.
            </p>
          </div>
          </div>
        
        </div> 
      </div>
    </div>
  );
};

export default SaviourMessage;
