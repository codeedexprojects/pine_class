import React, { useEffect } from 'react';
import { Eye, Target, Users, TrendingUp, Shield } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurStorySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-6 relative overflow-hidden">
      {/* Animated Dot */}
      <div 
        className="absolute top-8 right-8 w-3 h-3 bg-blue-600 rounded-full"
        data-aos="zoom-in"
        data-aos-delay="200"
      ></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Our Story Section */}
        <div 
          className="mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Founded by industry professionals, Pineclass was created to bridge the
            gap between theoretical knowledge and practical skills. With a focus
            on career-oriented learning, we aim to empower students to succeed
            in today's fast-evolving tech world.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div 
          className="mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Mission & Vision</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div 
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 group hover:bg-[#002C5A]"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="flex flex-col items-start mb-4">
                <div 
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-500 transition-colors duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <Eye className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300">
                "To deliver accessible, high-quality technical education
                and foster practical skill development for every learner."
              </p>
            </div>

            {/* Vision */}
            <div 
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 group hover:bg-[#002C5A]"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="flex flex-col items-start mb-4">
                <div 
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-500 transition-colors duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <Target className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300">
                "To become a leading learning hub for tech careers across Kerala and beyond."
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Student-Centered */}
            <div 
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 group hover:bg-[#002C5A]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-col items-start mb-4">
                <div 
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-500 transition-colors duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <Users className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Student-Centered</h3>
              </div>
              <p className="text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300">
                "We prioritize learners' growth and confidence."
              </p>
            </div>

            {/* Continuous Learning */}
            <div 
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 group hover:bg-[#002C5A]"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="flex flex-col items-start mb-4">
                <div 
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-500 transition-colors duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="350"
                >
                  <TrendingUp className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Continuous Learning</h3>
              </div>
              <p className="text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300">
                "We promote lifelong learning through modern tools."
              </p>
            </div>

            {/* Trust & Transparency */}
            <div 
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 group hover:bg-[#002C5A]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex flex-col items-start mb-4">
                <div 
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-500 transition-colors duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <Shield className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Trust & Transparency</h3>
              </div>
              <p className="text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300">
                "We stay open, honest, and student-first."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;