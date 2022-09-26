import React, { useEffect, useState } from 'react';
import GlobalStyle from "./styles/global"



import Header from "./components/components/Header/Header"
import Button from './components/micro/Button/Button';
import Footer from './components/components/Footer/Footer';

function App() {
  

  return (
    <div className="App">
       <GlobalStyle/>
       <Header/>
       <Footer/>
       
    </div>
  )
}

export default App
