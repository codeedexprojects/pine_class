import React from 'react'
import Header from '../components/common/Header'
import HeroSection from '../components/Home/HeroSection'
import WhyPineclassSection from '../components/Home/WhyPineclass'
import PopularCoursesSection from '../components/Home/PopularCourses'
import StudentJourneyRoadmap from '../components/Home/StudentJourney'
import MeetTrainersSection from '../components/Home/Trainers'
import LocationsSection from '../components/Home/Location'
import Footer from '../components/Common/Footer'

function Home() {
  return (
    <div>
        <Header></Header>
        <div><HeroSection></HeroSection></div>
        <div><WhyPineclassSection></WhyPineclassSection></div>
        <div><PopularCoursesSection></PopularCoursesSection></div>
        <div><StudentJourneyRoadmap></StudentJourneyRoadmap></div>
        <div><MeetTrainersSection></MeetTrainersSection></div>
        <div><LocationsSection></LocationsSection></div>
        <Footer></Footer>
    </div>
  )
}

export default Home