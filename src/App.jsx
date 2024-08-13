import { useState } from 'react'
import './App.css'
import './WatchList.css'

import WatchLogic from './WatchLogic.jsx'
import WatchList from './WatchList.jsx'
function App() {
  return (
    <>
    <WatchLogic/>
    <WatchList/>
    </>
  )
}

export default App
