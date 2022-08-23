import React, { useState } from "react";
import "../Collapse/Collapse.css";

const data = [
  {
    question:
      "Puis-je donner à une association autre que celles que vous proposez ?",
    answer:
      "Si vous souhaitez donner à une association autre que celles que nous proposons,merci de nous contacter: contact@resilience.green",
  },
  {
    question: "Qu’est-ce que le système de cashback solidaire  ?",
    answer:
      "Si vous souhaitez donner à une association autre que celles que nous proposons,merci de nous contacter: contact@resilience.green",
  },
  {
    question: "Comment vous rémunérez-vous ?",
    answer:
      "Si vous souhaitez donner à une association autre que celles que nous proposons,merci de nous contacter: contact@resilience.green",
  },
];

const Collapse = () => {
  const [selected, setselected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setselected(null);
    }
    setselected(i);
  };
  return (
    <div className="container_fluid collapse_wrapper" >
      <div className="container collapse_section">
        <div className="row collapse_block">
          <div className="col-xl-5 col-lg-5 col-md-10 col-sm-10 collapse_block_detail">
            <p>Questions Fréquentes</p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-10 col-sm-10 collapse_block_qustion" >
            <div className="wrapper">
              <div className="accordian" >
                {data.map((items, i) => (
                  <div key={i} className="item">
                    <div className="title" onClick={() => toggle(i)}>
                      <h2>
                        {items.question}
                      
                      </h2>
                    </div>
                    <div className="arrows">
                    <span onClick={() => toggle(i)}>
                          {selected === i ? (
                            <img src="constant/uparrow.png" alt="" />
                          ) : (
                            <img src="constant/downarrow.png" alt="" />
                          )}
                        </span>
                    </div>
                    
                   

                    <div
                      className={selected === i ? "content show" : "content"}
                    >
                      {items.answer}
                    </div>
                     <div className="bottom_border"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="en_savoir_plus">
                <button><a href="#">En savoir plus</a><img src="constant/right arrow.png" alt=""/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
