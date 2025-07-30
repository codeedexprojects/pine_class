import React from 'react';

export default function PopularCoursesSection() {
  const courses = [
    {
      id: 1,
      duration: "3 months",
      level: "Intermediate",
      title: "CCNA Masterclass",
      description: "Master networking fundamentals and gain globally recognized certification to boost your IT career",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      id: 2,
      duration: "1 months",
      level: "Fresher",
      title: "IT Support for Beginners",
      description: "Master networking fundamentals and gain globally recognized certification to boost your IT career",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center",
      bgColor: "from-blue-600 to-blue-800"
    },
    {
      id: 3,
      duration: "2 months",
      level: "Intermediate",
      title: "Windows Server & Active Directory",
      description: "Master networking fundamentals and gain globally recognized certification to boost your IT career",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop&crop=center",
      bgColor: "from-cyan-500 to-blue-600"
    },
    {
      id: 4,
      duration: "4 months",
      level: "Advanced",
      title: "Cloud Infrastructure",
      description: "Master cloud fundamentals and gain globally recognized certification to boost your IT career",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop&crop=center",
      bgColor: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      duration: "6 months",
      level: "Expert",
      title: "Cybersecurity Specialist",
      description: "Master security fundamentals and gain globally recognized certification to boost your IT career",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&crop=center",
      bgColor: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
            Popular Courses
          </h2>
        </div>

        {/* Scrollable Cards Container */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 min-w-max">
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* Course Image */}
                <div className={`h-48 bg-gradient-to-br ${course.bgColor} relative overflow-hidden`}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Duration and Level */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="font-medium border border-gray-300 rounded-lg px-3 py-1">
                      {course.duration}
                    </span>
                    <span className="font-medium border border-gray-300 rounded-lg px-3 py-1">
                      {course.level}
                    </span>
                  </div>


                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-blue-900 mb-3 leading-tight">
                    {course.title}
                  </h3>

                  {/* Course Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Learn More Button */}
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2">
            <div className="text-sm text-gray-500">Scroll to see more courses</div>

          </div>
        </div>
      </div>
    </section>
  );
}