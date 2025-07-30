import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LocationsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-100 relative">
      {/* Animated Background Dot */}
      <div
        className="absolute top-8 right-8 w-3 h-3 bg-blue-600 rounded-full"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="absolute inset-0 bg-blue-600 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className="mb-12 text-left"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Location
          </h2>
        </div>

        {/* Map Container */}
        <div
          className="mb-16 rounded-2xl overflow-hidden shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462565.1975811776!2d54.94755486372035!3d25.07508550156203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>

       
        

        {/* Call to Action */}
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-8">
            Start your learning journey with Pineclass today
          </h3>

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 hover:scale-105 transform"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}