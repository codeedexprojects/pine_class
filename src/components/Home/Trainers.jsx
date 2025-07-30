import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import image from '../../assets/trainer.jpg'

export default function MeetTrainersSection() {
  return (
    <section className="py-16 px-4 bg-gray-100 relative overflow-hidden">
      {/* Animated Background Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot 1 */}
        <div className="absolute top-20 right-20 w-3 h-3 bg-blue-600 rounded-full animate-pulse">
          <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-30"></div>
        </div>
        
        {/* Dot 2 */}
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-500 rounded-full">
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
        
        {/* Dot 3 */}
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-60">
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
        </div>
        
        {/* Dot 4 */}
        <div className="absolute bottom-20 right-1/4 w-2.5 h-2.5 bg-blue-700 rounded-full">
          <div className="absolute inset-0 bg-blue-700 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Dot 5 */}
        <div className="absolute top-1/2 left-10 w-3.5 h-3.5 bg-blue-500 rounded-full opacity-70">
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping" style={{animationDelay: '2s', animationDuration: '2s'}}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
            Meet Our Trainers
          </h2>
        </div>

        {/* Trainer Card */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Trainer Image */}
          <div className="flex-shrink-0">
            <div className="w-80 h-96 bg-gradient-to-b from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={image}
                alt="Mr. Muhammad Waqar Yousaf"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Trainer Information */}
          <div className="flex-1 max-w-2xl">
            {/* Name and Title */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Mr. Muhammad Waqar Yousaf
              </h3>
              <p className="text-lg font-medium text-gray-700">
                (CISCO CERTIFIED CCNA)
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                serving as a trainer profession in government institution as a professional 
                trainer, A certified Coursera, young entrepreneur, certified project manager 
                (USA), certified trainee in (AKDN), certified trainee in (AKF) & chairman of 
                NTech Future, A digital based IT company (UAE), established in 2021 
                designated by USA group of clients as a "Young entrepreneur " at the age of 
                25. He is a certified WordPress developer. He is featured in the top-ranking 
                digital IT companies globally.
              </p>
            </div>

            {/* See More Button */}
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200">
              SEE MORE
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(10px); }
        }
        
        @keyframes drift {
          0% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(10px) translateY(-5px); }
          50% { transform: translateX(-5px) translateY(-10px); }
          75% { transform: translateX(-10px) translateY(5px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
      `}</style>
    </section>
  );
}