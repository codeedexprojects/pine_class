import React from 'react'
import Header from '../components/common/Header'
import TrainerProfile from '../components/Trainers/TrainerSection'
import BottomSection from '../components/Trainers/BottomSection'
import Footer from '../components/Common/Footer'

function Trainers() {
  return (
    <div>
        <Header></Header>
        <div><TrainerProfile></TrainerProfile></div>
        <div><BottomSection></BottomSection></div>
        <Footer></Footer>
    </div>
  )
}

export default Trainers