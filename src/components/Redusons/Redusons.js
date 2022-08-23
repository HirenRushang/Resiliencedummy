import React, { useContext } from 'react'
import '../Redusons/Redusons.css'
import { ThemeContext } from '../theme'

const Redusons = () => {

    const[{redu}]= useContext(ThemeContext)
  return (
   <div className='container-fluid redusons_wrapper' style={{ backgroundColor:redu.backgroundColor, color:redu.color}}>
       <div className='container redusons_section'>
           <div className='row redusons'>
               <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 redusons_img'>
                   <img src='constant/reduimg.png' alt='redusonss' />
               </div>
               <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 redusons_para'>
                   <p>Réduisons notre impact en
dépensant différemment

</p>
               </div>
           </div>
       </div>
   </div>
  )
}

export default Redusons