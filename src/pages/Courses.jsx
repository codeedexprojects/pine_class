import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/Common/Footer'
import Course1 from '../components/Courses/Course1'
import Course2 from '../components/Courses/Course2'
import Course3 from '../components/Courses/Course3'
import Course4 from '../components/Courses/Course4'

function Courses() {
  return (
    <div>
      <Header />

      
      <div className=" px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-[#003366]">
          Courses Offered at Pineclass
        </h1>
        <p className="text-gray-700 mt-2 md:mt-0">
          Boost your career with our industry-ready programs. More courses launching soon
        </p>
      </div>

      <div><Course1 /></div>
      <div><Course2 /></div>
      <div><Course3 /></div>
      <div><Course4 /></div>

      <Footer />
    </div>
  )
}

export default Courses
