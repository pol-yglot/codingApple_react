import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let post = '강남 우동 맛집';
  // document.querySelector('h4').innerHTML = post;

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'red'}}> 블로그 </h4>
      </div>

      <h4>{ post }</h4>
    </div>
  )
}

export default App
