import React from 'react'
import '../Accordian/Accordian.css'

const Accordian = () => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-10 col-sm-10 collapse_block_qustion" >

 <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button accordian_question" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Puis-je donner à une association autre que celles que vous proposez ?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body accordian_answer">
      Yes, you can upgrade or downgrade your subscription at anytime.Your new subscription plan will take effect at the end of your current billing period.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button accordian_question collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Qu’est-ce que le système de cashback solidaire ?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body accordian_answer">
       something.....text
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button accordian_question collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Comment vous rémunérez-vous ?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body accordian_answer">
      something.....text
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Accordian