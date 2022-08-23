import React, { useContext } from "react";
import '../Decovrez/Decovrez.css'
import { ThemeContext } from "../theme";

export const Decovrez = () => {

  const [{decov}] = useContext(ThemeContext)

  return (
    <div className="container-fluid decovrez_wrapper" style={{ backgroundColor:decov.backgroundColor, color:decov.color}}>
      <div className="container decovrez_section">

        <div className="row decovrez_heading">
          <p>Découvrez Résilience</p>
        </div>

        <div className="row decovrez_product">
          <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-10 decovrez_product_one">
            <div className="decovrez_product_one_img">
              <img src="constant/sec.png" />
            </div>
            <div className="decovrez_product_one_title">
              <p>Sécurité</p>
            </div>
            <div className="decovrez_product_one_detail">
              <p>
                La sécurité de vos données bancaires au cœur des priorités. Vos
                données bancaires vous appartiennent
              </p>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-10 decovrez_product_two">
            <div className="decovrez_product_two_img">
              <img src="constant/rap.png" />
            </div>
            <div className="decovrez_product_two_title">
              <p>Rapidité</p>
            </div>
            <div className="decovrez_product_two_detail">
              <p>
                L’application analyse vos données en quelques secondes, vous
                recevez votre premier bilan et des recommandations
              </p>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-10 decovrez_product_three">
            <div className="decovrez_product_three_img">
              <img src="constant/inte.png" />
            </div>
            <div className="decovrez_product_three_title">
              <p>Intégrité</p>
            </div>
            <div className="decovrez_product_three_detail">
              <p>
                Resilience s’engage à ne pas utiliser vos données à des fins
                commerciales
              </p>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-10 decovrez_product_four">
            <div className="decovrez_product_four_img">
              <img src="constant/inde.png" />
            </div>
            <div className="decovrez_product_four_title">
              <p>Indépendance</p>
            </div>
            <div className="decovrez_product_four_detail">
              <p>
                Resilience est une application indépendante. Cela signifie que
                nos évaluations et nos recommandations sont faites de façon
                totalement objective
              </p>
            </div>
          </div>
        </div>

        <div className="row decovrez_condition">
            <div className="decovrez_condition_col col-xxl-6 col-xl-6 col-lg-8 col-md-10">
            <p>*Utiliser Resilience n’a pas de conséquence dans les relations avec votre banque,
                 nous respectons les règles préconisées par la CNIL.</p>
            </div>
           
        </div>

      </div>
    </div>
  );
};
