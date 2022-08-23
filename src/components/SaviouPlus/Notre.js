import React, { useState } from "react";
import "../SaviouPlus/Notre.css";

const SliderData = [
  {
    image: "constant/rectangle.png",
  },
  {
    image: "constant/rectangle.png",
  },
  {
    image: "constant/rectangle.png",
  },
  {
    image: "constant/rectangle.png",
  },
];

const Notre = () => {
  const [current, setiscurrent] = useState(0);
  const length = SliderData.length;



  const prevSlide = () => {
    setiscurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setiscurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="container_fluid notre_wrapper">
      <div className="container notre_section">
        <div className="row notre_block">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 notre_left_col">
            <div className="notre_leftpart">
              <div className="notre_heading">
                <p className="first">Notre</p>
                <p className="sec">Equipe Experte</p>
              </div>

              <div className="notre_arrows">
                <img
                  className="left_arw"
                  src="constant/blackleft.png"
                  onClick={prevSlide}
                  alt=""
                ></img>
                <img
                  className="right_arw"
                  src="constant/blackright.png"
                  onClick={nextSlide}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 notre_center_col">
            <div className="notre_center_part">
              {SliderData.map((slide, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img
                        src={slide.image}
                        alt="travel image"
                        className="image"
                      />
                    )}
                  
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notre;
