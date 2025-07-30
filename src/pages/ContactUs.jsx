import React from 'react'
import ContactForm from '../components/ContactUs/FormSection'
import ContactCard from '../components/ContactUs/ContactCard'
import Footer from '../components/Common/Footer'
import Header from '../components/common/Header'

function ContactUs() {
    return (
        <div>
            <Header></Header>
            <div className="bg-gray-100 px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <h1 className="text-xl md:text-2xl font-bold text-[#003366]">
                    Get In Touch
                </h1>
                <p className="text-gray-700 mt-2 md:mt-0">
                    We’re here to help you start your learning journey with confidence. Reach out anytime
                </p>
            </div>

            <div><ContactForm></ContactForm></div>
            <div><ContactCard></ContactCard></div>
            <div className='mt-5'><Footer ></Footer></div>
        </div>
    )
}

export default ContactUs