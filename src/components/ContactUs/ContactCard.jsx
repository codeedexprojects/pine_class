import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const PineclassContactCard = () => {
    const handleCallNow = () => {
        window.open('tel:+919876543210', '_self');
    };

    return (
        <div className='bg-gray-100'>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Side - Contact Information */}
                    <div className="lg:w-1/2 p-8 lg:p-10">
                        {/* Company Name */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Pineclass</h2>
    
                        {/* Address */}
                        <div className="mb-6">
                            <p className="text-gray-700 leading-relaxed">
                                2nd Floor, TechPoint Building,<br />
                                Market Road, Marhab A, UAE – 686673
                            </p>
                        </div>
    
                        {/* Contact Details */}
                        <div className="space-y-4 mb-8">
                            {/* Phone */}
                            <div className="flex items-center">
                                <div className="w-5 h-5 mr-3 flex-shrink-0">
                                    <Phone className="w-5 h-5 text-gray-600" />
                                </div>
                                <span className="text-gray-700 font-medium">+91 98765 43210</span>
                            </div>
    
                            {/* Email */}
                            <div className="flex items-center">
                                <div className="w-5 h-5 mr-3 flex-shrink-0">
                                    <Mail className="w-5 h-5 text-gray-600" />
                                </div>
                                <span className="text-gray-700 font-medium">hello@pineclass.in</span>
                            </div>
    
                            {/* Hours */}
                            <div className="flex items-center">
                                <div className="w-5 h-5 mr-3 flex-shrink-0">
                                    <Clock className="w-5 h-5 text-gray-600" />
                                </div>
                                <span className="text-gray-700 font-medium">Monday–Saturday, 9:00 AM – 6:00 PM</span>
                            </div>
                        </div>
    
                        {/* Call Now Button */}
                        <button
                            onClick={handleCallNow}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            Call Now
                        </button>
                    </div>
    
                    {/* Right Side - Map */}
                    <div className="lg:w-1/2 h-64 lg:h-auto min-h-[300px] relative">
                        <iframe
                            title="Pineclass Location"
                            className="w-full h-full rounded-lg"
                            frameBorder="0"
                            src="https://maps.google.com/maps?q=Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            allowFullScreen
                        ></iframe>
                    </div>
    
                </div>
            </div>
        </div>
    );
};

export default PineclassContactCard;