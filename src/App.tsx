import React, { useEffect, useState } from 'react';
import GlobalStyle from "./styles/global"



import Header from "./components/components/Header/Header"
import Image from "./components/micro/img/Image"

function App() {
  

  return (
    <div className="App">
       <GlobalStyle/>
       <Header/>
    </div>
  )
}

export default App
