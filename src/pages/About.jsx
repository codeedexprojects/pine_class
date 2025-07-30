import React from 'react'
import Header from '../components/common/Header'
import OurStorySection from '../components/About/OurStory'
import BottomSection from '../components/About/BottomSection'
import Footer from '../components/Common/Footer'

function About() {
    return (
        <div>
            <Header></Header>
            <div className="bg-gray-100 px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <h1 className="text-xl md:text-2xl font-bold text-[#003366]">
                    About Pineclass
                </h1>
                <p className="text-gray-700 mt-2 md:mt-0">
                    We are more than just a learning platform — we are a  <br />place where growth begins and careers are shaped.
                </p>
            </div>

            <div><OurStorySection></OurStorySection></div>

            <BottomSection></BottomSection>
            <Footer></Footer>
        </div>
    )
}

export default About