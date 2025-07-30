import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function StudentJourneyRoadmap() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const steps = [
    {
      id: 1,
      title: "Choose Your Course",
      description: "We help you select the right path — IT Support, Networking, or Systems Administration.",
      side: "left"
    },
    {
      id: 2,
      title: "Learn from Industry Experts",
      description: "Gain real-world skills through structured video lessons, quizzes, and labs.",
      side: "right"
    },
    {
      id: 3,
      title: "Get Mentorship & Career Support",
      description: "Join live Zoom sessions, resume reviews, and mock interviews.",
      side: "left"
    },
    {
      id: 4,
      title: "Earn Certification",
      description: "Receive a PineClass Certificate to showcase your skills.",
      side: "right"
    },
    {
      id: 5,
      title: "Become Career-Ready",
      description: "Apply confidently for IT jobs with the knowledge and tools you've gained.",
      side: "left"
    },
    {
      id: 6,
      title: "Ready for Placement Support",
      description: "We assist with job connections, referrals, and ongoing guidance until you're hired.",
      side: "right"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            PineClass Student Journey Roadmap
          </h2>
        </div>

        <div className="relative">
          {/* Dashed vertical line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full border-l-2 border-dashed border-black"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            {/* Top Circle */}
            <div 
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full"
              data-aos="zoom-in"
              data-aos-delay="100"
            ></div>
            {/* Bottom Circle */}
            <div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full"
              data-aos="zoom-in"
              data-aos-delay="300"
            ></div>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="relative flex"
                data-aos={step.side === "left" ? "fade-right" : "fade-left"}
                data-aos-delay={100 + (index * 100)}
              >
                {/* Step Content */}
                <div
                  className={`
                    w-full flex 
                    ${step.side === "left" ? "md:justify-start md:pr-8" : "md:justify-end md:pl-8"}
                    justify-center
                  `}
                >
                  <div className={`w-full max-w-sm ${step.side === "left" ? "md:mr-8" : "md:ml-8"}`}>
                    <div 
                      className="bg-gradient-to-t from-blue-200 to-green-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                      data-aos="zoom-in"
                      data-aos-delay={150 + (index * 100)}
                    >
                      {/* Step Number and Title */}
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-gray-700 mb-1 block">
                          Step {step.id}:
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {step.title}
                        </h3>
                      </div>

                      {/* Step Description */}
                      <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}