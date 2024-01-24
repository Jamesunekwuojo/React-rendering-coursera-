import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const time = new Date();
  const day = time.toLocaleString("en-US", {weekday: "long"}) ;
  const morning = time.getHours() >= 6 && time.getHours() <=12;
  

  return (
    <>
      
    </>
  )
}

export default App
