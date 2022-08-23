import React from 'react'
import '../SaviouPlus/SaviourHero.css'

const SaviourHero = () => {
  return (
    <div className='container-fluid saviour_hero_wrapper'>
     <div className='container saviour_hero_section'>
       <div className='row saviour_hero_block'>
         <div className='col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-6 saviour_hero_block_para'>
           <p className='title'>Notre mission : réduire votre impac environnemental au quotidien.</p>
           <p className='detail'>L’appli solidaire qui décrypte vos dépenses et vous permet de soutenir
                                  gratuitement des associations ayant un impact environnemental ou sociétal.</p>

           <button><a href='#'>Découvrir Résilience</a><span><img src='constant/right arrow.png' alt=""></img></span></button>
         </div>

           
         <div className='col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-6 saviour_hero_block_img'>
           <img src="constant/rocket.png" alt=""/>
         </div>
       </div>
     </div>

    </div>
  )
}

export default SaviourHero