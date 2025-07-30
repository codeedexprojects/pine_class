import React from 'react';
import trainerImg from '../../assets/trainers.jpg';

const TrainerProfile = () => {
    return (
        <div className="bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex items-start justify-between mb-12">
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Meet Our Trainers</h2>
                    </div>

                    <div className="max-w-md text-right">
                        <div className="w-3 h-3 bg-blue-600 rounded-full ml-auto mb-2"></div>
                        <p className="text-gray-600 text-lg">
                            Our trainer bring hands-on experience and deep knowledge to help you succeed
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Images */}
                    <div className="space-y-6">
                        {/* Main professional photo */}
                        <div className="relative">
                            <div className="w-3 h-3 bg-blue-600 rounded-full absolute -top-4 right-8"></div>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="h-96 flex items-center justify-center">
                                    <img
                                        src={trainerImg} 
                                        alt="Main Professional"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Bottom smaller images */}
                        <div className="flex gap-4">
                            <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-32 flex items-center justify-center">
                                    <img
                                        src={trainerImg}
                                        alt="Supporting 1"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-32 flex items-center justify-center">
                                    <img
                                        src={trainerImg}
                                        alt="Supporting 2"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Mr. Muhammad Waqar Yousaf
                            </h3>
                            <p className="text-black font-semibold text-sm tracking-wide">
                                (CISCO CERTIFIED CCNA)
                            </p>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p className="text-justify">
                                serving as a trainer profession in government institution as a
                                professional trainer, A certified Coursera, young entrepreneur, certified
                                project manager (USA), certified trainee in (AKDN), certified trainee in
                                (AKF) & chairman of NTech Future, A digital based IT company (UAE),
                                established in 2021 designated by USA group of clients as a "Young
                                entrepreneur " at the age of 25. He is a certified WordPress developer. He
                                is featured in the top-ranking digital IT companies globally.
                            </p>

                            <p className="text-justify">
                                Mr. Waqar is an "SMM Certified" registered Resource Master Trainer of
                                TEVTA, CORVIT, LGS, RIU, AKS, AKDN, AKF giving services as a student and
                                trainee too. He has conducted training sessions on AI, Open AI, & Problem
                                Solving, Work Ethics, Time Management He have worked with international
                                brands like ALIEL, THE LAST CHANCE TICKET, EMPORIUM, BAL CHARITY
                                FOUNDATION, THE FOUNDATION FOR BETTER LIFE ETC.
                            </p>

                            <p className="text-justify">
                                After giving services globally, He decided to give services for our young
                                entrepreneurs of future.
                            </p>

                            <div className="pt-4">
                                <h4 className="font-semibold text-gray-900 mb-3">Our certified courses:</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>Certified cisco CCNA professional networking</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>Certified CCNP professional networking</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>AAA/ISE</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerProfile;