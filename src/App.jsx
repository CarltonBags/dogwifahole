import { useState } from 'react'
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import './App.css'

function App() {

  return (
    <div className="w-full">
      <div>
        <img src={img1} alt="Image 1" />
        {/* Add other images as needed */}
        <img src={img2} alt="Image 2" />
        <img src={img3} alt="Image 3" />
      </div>
    </div>
  )
}

export default App
