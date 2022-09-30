import React, { useEffect, useState } from 'react';
import GlobalStyle from "./styles/global"

import Header from "./components/components/Header/Header"
import Button from './components/micro/Button/Button';
import Footer from './components/components/Footer/Footer';
import Image from './components/micro/img/Image';
import About from './components/micro/About/About';


function App() {
  

  return (
    <div className="App">
       <GlobalStyle/>

       <section className='header-section'>
        <Header/>
       </section>

       <section className='about-section'>
        <About smallText='Setibulum rutrum quam vitae fringilla tincidunt' bigText='About us'/>
       </section>

       
       
       <Footer/>
       
    </div>
  )
}

export default App
