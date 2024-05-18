import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StopWatch from './Components/StopWatch/StopWatch'
import { usePrevious } from './hooks/usePrevious'
import { useToggle } from './hooks/useToggle'
import Basic from './Components/Basic'
import Bulma from './Components/Bulma'

function App() {
  const [count,setCount] = useState(0)
  const previousCount = usePrevious(count)
  const[isShowLogo,toggle] = useToggle(false)
  return (
    <>
      {/* <StopWatch/> */}
      <Basic/>
    {/* <Bulma/> */}
    </>
  )
}

export default App
