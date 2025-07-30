import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function WhyPineclassSection() {
    const features = [
        {
            number: "01",
            title: "Real mentorship & career guidance support",
            description:
                "Our expertly designed courses focus on real-world skills and practical learning. Stay ahead with updated content that matches industry needs.",
        },
        {
            number: "02",
            title: "Placement support",
            description:
                "Learn from certified professionals with hands-on teaching experience. They guide you with clarity, care, and personalized attention.",
        },
        {
            number: "03",
            title: "Expert trainers",
            description:
                "Every course is built to boost your career and confidence. Gain job-ready skills that help you grow faster in the real world.",
        },
        {
            number: "04",
            title: "Certification aligned courses",
            description:
                "Every course is built to boost your career and confidence. Gain job-ready skills that help you grow faster in the real world.",
        },
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                            Why Pineclass
                        </h2>
                        
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
                        >
                            {/* Number positioned top right */}
                            <span className="absolute top-8 right-8 text-5xl md:text-5xl font-bold text-blue-900">
                                {feature.number}
                            </span>

                            {/* Content with padding top to avoid overlap */}
                            <div className="space-y-4 mb-14 pt-20">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            <button className="absolute bottom-5 right-8 w-10 h-10 md:w-12 md:h-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-50 transition">
                                <ArrowUpRight className="w-5 h-5 text-blue-600" />
                            </button>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
