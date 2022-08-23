import React, { useContext} from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Hero/Hero.css";
import { ThemeContext } from "../theme";

const Hero = () => {

  const [{theme, herob, herohead, isDark}, toggleTheme] = useContext(ThemeContext)

  return (
    <div className="container-fluid hero_wrapper" style={{ backgroundColor:theme.backgroundColor, color:theme.color}}>
      <div className="container hero_section">
      <div className="row hero_block">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10 hero_para">
          <div className="hero_heading" >
            <p style={{ backgroundColor:herohead.backgroundColor, color:herohead.color}}>Donner du sens à son argent</p>
          </div>
          <div className="hero_about">
            <p style={{ color:theme.color}}>
              L’appli solidaire qui décrypte vos dépenses et vous permet de
              soutenir gratuitement des associations ayant un impact
              environnemental ou sociétal.
            </p>
          </div>
          <div className="hero_detail">
            <div className="hero_detail_one">
            <div>
              <span>{isDark ? <img src="constant/whitecheck.png" /> : <img src="constant/check.png"/> }</span></div>
            <div><p style={{ color:theme.color}}>
              Connectez votre compte bancaire et découvrez l'impact de votre
              argent
            </p></div>
            </div>
           
           <div className="hero_detail_two">
             <div> <span>{isDark ? <img src="constant/whitecheck.png" /> : <img src="constant/check.png"/> }</span></div>
             <div> <p style={{ color:theme.color}}>
              Recevez à chaque dépense chez un de nos partenaire un
              remboursement dans votre cagnotte (jusqu'à 10%)
            </p></div>
           </div>
            
            <div className="hero_detail_three">
              <div><span>{isDark ? <img src="constant/whitecheck.png" /> : <img src="constant/check.png"/> }</span></div>
              <div><p style={{ color:theme.color}}>Reversez votre cagnotte aux associations de votre choix</p></div>
            </div>
          
           
            
          </div>
          <div className="hero_link">
              <button className="je_suis">
                  <a href="#">Je suis interessé</a><img src="constant/right arrow.png" />
              </button>
              <button className="saviour" style={{backgroundColor:herob.backgroundColor, color:herob.color}}>
                  <a href="#" style={{ color:herob.color}}>En savoir plus</a>{isDark ? <img src="constant/whiterightarw.png" /> : <img src="constant/rightarrowblue.png" />}
              </button>
          </div>
        </div>
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-10 hero_img">
          <img src="constant/heroimg.png"></img>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Hero;
