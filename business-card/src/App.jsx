import React from 'react'
import BusinessCard from './components/BusinessCard'
import { LinkedIn,GitHub } from './utils/links'
import ProfileM from './assets/ProfileM.jpg'
import ProfileImg from './assets/ProfilePic.jpg'

const App = () => {
  return (
    <div className="min-h-screen bg-[#212121] flex items-center justify-center">
      <BusinessCard Name="Raghav Nagi" Role="Student" Linkedin={LinkedIn} Github={GitHub} ProfileImg={ProfileM}/>
    </div>
  )
}

export default App