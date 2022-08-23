import React from 'react'
import Collapse from '../Collapse/Collapse'
import { Decovrez } from '../Decovrez/Decovrez'
import Hero from '../Hero/Hero'
import Navbar2 from '../Navbar/Navbar2'
import Redusons from '../Redusons/Redusons'
import News from '../News/News'
import Application from '../Application/Application'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
      <>

      <Hero />
      <Decovrez />
      <Redusons />
      <Collapse />
      <News />
      <Application />
     
      </>
    

    )
}

export default Home