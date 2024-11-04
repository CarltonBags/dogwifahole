import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import './App.css'

function App() {

const buy = () =>{
  window.open("https://pump.fun/8fJXNxPpFzGuDyEjCQuvb55Yqc4XDBMpGuDbJKd5pump")
}


  return (
    <div className="w-full relative">
      {/* Positioned absolutely above the first image */}
      <div className="absolute font-bold text-4xl text-yellow-500 z-10 bg-red-600 w-full">
        get $ANAL <span className="underline hover:cursor-pointer" onClick={buy}>here!</span>
      </div>
      <div className="flex flex-col items-center">
        <img src={img1} alt="Image 1" className="relative z-0 border-b-2 border-white" />
        <img src={img2} alt="Image 2" className="relative z-0 border-b-2 border-white" />
        <img src={img3} alt="Image 3" className="relative z-0 " />
      </div>
    </div>
  )
}

export default App
