import React from 'react'
import trainerImg from '../../assets/trainers.jpg'

function BottomSection() {
    return (
        <div>
            <section className="px-4 py-12 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-xl font-bold text-blue-900 mb-6">
                        At Pineclass, education isn’t just taught — it’s lived. Every trainer, every session, every tool is focused on YOU
                    </h2>

                    <div className="text-left">
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">
                            Meet Our Founder
                        </h3>

                        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                            <img
                                src={trainerImg}
                                alt="Founder"
                                className="w-20 h-20 rounded-full object-cover mr-4"
                            />
                            <p className="text-gray-700">
                                “Led by industry experts and passionate educators, Pineclass is built with love and logic.”
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm mt-10">
                        <div className="p-6 text-center border-b">
                            <p className="text-lg font-semibold text-blue-900">
                                “Ready to start your learning journey?”
                            </p>
                        </div>
                        <div className="p-4 flex justify-end">
                            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BottomSection