import React from 'react'
import './ManifestHero.css'

const ManifestHero = () => {
  return (
     <div className='container-fluid manifesthero_wrapper'>
        <div className='container manifesthero_section'>
         <div className='row manifesthero_block'>
             <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 manifesthero_left_col'>
                 <div className='manifesthero_left_part'>
                 <p className='manifest_heading'>Manifeste</p>
                 <p className='manifest_text'> Notre but : Sensibiliser, Agir et Créer des liens</p>
                 </div>
                 
             </div>
             <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 manifesthero_right_col'>
                 <div className='manifesthero_right_part'>
                 <img src="constant/handholding.png"></img>
                 </div>
                
             </div>
         </div>
        </div>

     </div>
  )
}

export default ManifestHero;