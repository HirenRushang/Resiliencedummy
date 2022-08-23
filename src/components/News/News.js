import React, { useContext } from 'react'
import '../News/News.css'
import { ThemeContext } from '../theme'


const News = () => {

   const[{newze, newzi}]=useContext(ThemeContext)

  return (
    <div className='container-fluid news_wrapper' style={{ backgroundColor:newze.backgroundColor, color:newze.color}}>
        <div className='container news_section'>
            <div className='row news_title'>
                <p>Inscrivez-vous à la Newsletter</p>
            </div>
            <div className='row news_input'>
                <input style={{ backgroundColor:newzi.backgroundColor, color:newzi.color}} type="text" placeholder='Enter your email adress' />

                <button>Je m’inscris<span><img src='constant/right arrow.png' alt='arroww'></img></span></button>
            </div>
        </div>
    </div>
  )
}

export default News