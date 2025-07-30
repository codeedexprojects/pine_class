import React from 'react';

export default function LocationsSection() {
  return (
    <section className="py-16 px-4 bg-gray-100 relative">
      {/* Animated Background Dot */}
      <div className="absolute top-8 right-8 w-3 h-3 bg-blue-600 rounded-full">
        <div className="absolute inset-0 bg-blue-600 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Locations
          </h2>
        </div>

        {/* Map Container */}
        <div className="mb-16">
          <div className="w-full h-64 md:h-80 bg-gradient-to-br from-blue-600 via-blue-500 to-orange-300 rounded-2xl overflow-hidden shadow-lg relative">
            {/* Map Overlay - Simulating Google Maps style */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-transparent to-orange-200/30"></div>
            
            {/* Location Labels */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Dubai Label */}
              <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  <span className="text-sm font-bold text-gray-800">Dubai</span>
                </div>
              </div>

              {/* Highway Labels */}
              <div className="absolute top-1/4 right-1/3">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  E102
                </div>
              </div>

              <div className="absolute top-1/2 left-1/4">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  E11
                </div>
              </div>

              <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  E66
                </div>
              </div>

              {/* Area Labels */}
              <div className="absolute top-1/5 right-1/4">
                <span className="text-white text-sm font-medium drop-shadow-lg">Milehah</span>
              </div>

              <div className="absolute bottom-1/4 right-1/5">
                <span className="text-white text-sm font-medium drop-shadow-lg">Al Madam</span>
              </div>

              <div className="absolute top-1/6 right-1/6">
                <span className="text-white text-xs font-medium drop-shadow-lg">Al Dhaid</span>
              </div>
            </div>

            {/* Map Grid Lines */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                {/* Horizontal lines */}
                <line x1="0" y1="50" x2="400" y2="50" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <line x1="0" y1="100" x2="400" y2="100" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <line x1="0" y1="150" x2="400" y2="150" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <line x1="0" y1="250" x2="400" y2="250" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                
                {/* Vertical lines */}
                <line x1="80" y1="0" x2="80" y2="300" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <line x1="160" y1="0" x2="160" y2="300" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <line x1="240" y1="0" x2="240" y2="300" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <line x1="320" y1="0" x2="320" y2="300" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                
                {/* Roads/Paths */}
                <path d="M 50 100 Q 200 120 350 80" stroke="orange" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M 100 50 Q 180 150 280 200" stroke="orange" strokeWidth="2" fill="none" opacity="0.5"/>
                <path d="M 80 200 Q 200 180 320 220" stroke="orange" strokeWidth="2" fill="none" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-8">
            Start your learning journey with Pineclass today
          </h3>
          
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}