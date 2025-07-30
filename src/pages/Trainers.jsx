import React from 'react'
import Header from '../components/common/Header'
import TrainerProfile from '../components/Trainers/TrainerSection'
import BottomSection from '../components/Trainers/BottomSection'
import Footer from '../components/Common/Footer'

function Trainers() {
  return (
    <div>
        <Header></Header>
        <div className="bg-gray-50 px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <h1 className="text-xl md:text-2xl font-bold text-[#003366]">
                    Meet Our Trainers
                </h1>
                <p className="text-gray-700 mt-2 md:mt-0">
                    Our trainer bring hands-on experience and deep <br />knowledge to help you succeed
                </p>
            </div>
        <div><TrainerProfile></TrainerProfile></div>
        <div><BottomSection></BottomSection></div>
        <Footer></Footer>
    </div>
  )
}

export default Trainers