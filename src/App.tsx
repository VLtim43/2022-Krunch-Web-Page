import React, { useEffect, useState } from 'react';
import GlobalStyle from "./styles/global"

import Header from "./components/components/Header/Header"
import Button from './components/micro/Button/Button';
import Footer from './components/components/Footer/Footer';
import Image from './components/micro/img/Image';

function App() {
  

  return (
    <div className="App">
       <GlobalStyle/>
       <section className='header-section'>
        <Header/>
       </section>
       <Footer/>
       
    </div>
  )
}

export default App
