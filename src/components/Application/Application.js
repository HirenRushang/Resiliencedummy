import React, { useContext } from 'react'
import '../Application/Application.css'
import { ThemeContext } from '../theme'



const Application = () => {

   const[{appli,isDark}]=useContext(ThemeContext)

  return (
    <div className='container_fluid application_wrapper' style={{ backgroundColor:appli.backgroundColor, color:appli.color}}>
        <div className='container application_section'>
            <div className='row application'>
                <div className='col-xl-5 col-lg-5 col-md-10 col-sm-10 application_section_detail'>
                    <div className='app_logo'>
                       {isDark ? <img src="constant/whiteappicon.png" /> : <img src='constant/appicon.png' />} 
                    </div>
                    <div className='application_title'>
                        <p>Avec notre score carbone
personnalisé, mesurez votre
impact environnemental</p>
                    </div>
                    <div className='application_para'>
                    <p>Nous vous aidons à décrypter vos dépenses tout en mesurant
automatiquement vos empreintes carbones grâce à une
expérience mobile exceptionnelle.</p>
                    </div>
                    <div className='app_download'>
                     {isDark ?  <img className='google' src='constant/whitegoogleplay.png' /> : <img className='google' src='constant/gs.png' /> }   

                      {isDark ? <img className='appstore' src='constant/whiteappstore.png' /> :  <img className='appstore' src='constant/apps.png' />}  
                    </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-10 col-sm-10 application_img'>
                    <div>
                        <img src='constant/mobile.png' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Application