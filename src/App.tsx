import React, { useEffect, useState } from 'react';
import GlobalStyle from "./styles/global"



import Header from "./components/components/Header/Header"
import Button from './components/micro/Button/Button';

function App() {
  

  return (
    <div className="App">
       <GlobalStyle/>
       <Header/>
       <Button text='Download Now' className='default'/>
       <Button text='View Features' className='transparent'/>
       <Button text='Contact Now' className='transparent-b'/>
    </div>
  )
}

export default App
