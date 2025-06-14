import React, { useState } from 'react';
import { GraduationCap, Trophy, Code, Shield, Calendar, MapPin, Award, ChevronRight, Star } from 'lucide-react';

const Achievements = () => {
  const [activeEducationIndex, setActiveEducationIndex] = useState(0);
  const [activeAchievementIndex, setActiveAchievementIndex] = useState(0);

  const education = [
    {
      id: 'education-1',
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Kongu Engineering College",
      subtitle: "B.Tech in AI & ML",
      location: "Erode",
      period: "2022 - 2026",
      description: "Pursuing Bachelor of Technology in Artificial Intelligence & Machine Learning",
      metric: "CGPA: 8.21",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 'education-2',
      icon: <GraduationCap className="w-6 h-6" />,
      title: "PKP Swamy Matric Hr Sec School",
      subtitle: "Higher Secondary Education",
      location: "Erode",
      period: "2020 & 2022",
      description: "Completed secondary and higher secondary education with distinction",
      details: [
        { label: "10th Grade", value: "89.8%" },
        { label: "12th Grade", value: "88.6%" }
      ],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  const achievements = [
    {
      id: 'achievement-1',
      icon: <Trophy className="w-6 h-6" />,
      title: "2nd Place – 30-Hour Hackathon",
      subtitle: "Kongu Engineering College",
      location: "KEC",
      description: "Developed a room booking website with a 360° view for better UX",
      tech: ["React", "360° View", "UX Design"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: 'achievement-2',
      icon: <Shield className="w-6 h-6" />,
      title: "Top 6 – Smart India Hackathon",
      subtitle: "National Level Competition",
      location: "India",
      description: "Built a two-phase authentication system for device ownership and user verification",
      tech: ["Authentication", "Security", "Device Management"],
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      id: 'achievement-3',
      icon: <Code className="w-6 h-6" />,
      title: "3rd Place – 24-Hour Hackathon",
      subtitle: "Kongu Engineering College",
      location: "KEC",
      description: "Created a web scraper to efficiently extract product data from e-commerce sites",
      tech: ["Web Scraping", "Data Extraction", "E-commerce"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  const renderCard = (item, index) => (
    <div
      key={item.id}
      className={`relative overflow-hidden rounded-3xl ${item.bgColor} border-2 ${item.borderColor} shadow-xl`}
    >
      {/* Gradient Overlay */}
      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.color} opacity-10 rounded-full -translate-y-32 translate-x-32`}></div>
      
      <div className="relative p-8">
        {/* Header */}
        <div 
          data-aos="fade-right" 
          data-aos-duration="1000" 
          data-aos-once="false"
          className="flex items-start gap-4 mb-6"
        >
          <div className={`p-4 rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-lg`}>
            {item.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              <div className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                Award
              </div>
            </div>
            <p className="text-lg text-gray-700 font-medium">{item.subtitle}</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {item.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {item.period}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p 
          data-aos="fade-up" 
          data-aos-duration="1200" 
          data-aos-once="false"
          className="text-gray-700 text-lg leading-relaxed mb-6"
        >
          {item.description}
        </p>

        {/* Metrics */}
        {item.metric && (
          <div 
            data-aos="zoom-in" 
            data-aos-duration="1000" 
            data-aos-once="false"
            className="mb-6"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-xl shadow-lg`}>
              <Star className="w-4 h-4" />
              <span className="font-semibold">{item.metric}</span>
            </div>
          </div>
        )}

        {/* Details */}
        {item.details && (
          <div 
            data-aos="fade-up" 
            data-aos-duration="1400" 
            data-aos-once="false"
            className="grid grid-cols-2 gap-4 mb-6"
          >
            {item.details.map((detail, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                <div className="text-sm text-gray-600">{detail.label}</div>
                <div className="text-xl font-bold text-gray-900">{detail.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        {item.tech && (
          <div 
            data-aos="fade-up" 
            data-aos-duration="1600" 
            data-aos-once="false"
            className="flex flex-wrap gap-2"
          >
            {item.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/70 backdrop-blur-sm text-gray-800 rounded-lg text-sm font-medium border border-white/50"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <br />
      <br />
      
      {/* Education Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div 
          data-aos="zoom-in" 
          data-aos-duration="1000" 
          data-aos-once="false"
          className="text-center mb-12"
        >
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">
            Education
          </h1>
          <p className="text-lg font-medium leading-relaxed text-orange-500">
            My academic journey and qualifications
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Education Timeline Navigation */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-4">
              <h2 
                data-aos="fade-right" 
                data-aos-duration="1000" 
                data-aos-once="false"
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Academic Timeline
              </h2>
              {education.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveEducationIndex(index)}
                  data-aos="fade-right" 
                  data-aos-duration={1000 + (index * 200)} 
                  data-aos-once="false"
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    activeEducationIndex === index
                      ? `${item.borderColor} ${item.bgColor} shadow-lg transform scale-105`
                      : 'border-gray-200 bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${activeEducationIndex === index ? 'bg-white shadow-sm' : 'bg-gray-100'}`}>
                      <div className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                      <div className="text-xs text-gray-600">{item.period}</div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeEducationIndex === index ? 'rotate-90' : ''}`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Education Content Area */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={item.id}
                  className={`transform transition-all duration-700 ${
                    activeEducationIndex === index
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-60 translate-y-4 scale-95 pointer-events-none'
                  } ${
                    activeEducationIndex === index ? 'block' : 'hidden lg:block'
                  }`}
                >
                  {renderCard(item, index)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div 
          data-aos="zoom-in" 
          data-aos-duration="1000" 
          data-aos-once="false"
          className="text-center mb-12"
        >
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">
            Achievements
          </h1>
          <p className="text-lg font-medium leading-relaxed text-orange-500">
            Recognition and awards for my work
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Achievements Timeline Navigation */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-4">
              <h2 
                data-aos="fade-right" 
                data-aos-duration="1000" 
                data-aos-once="false"
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Awards Timeline
              </h2>
              {achievements.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveAchievementIndex(index)}
                  data-aos="fade-right" 
                  data-aos-duration={1000 + (index * 200)} 
                  data-aos-once="false"
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    activeAchievementIndex === index
                      ? `${item.borderColor} ${item.bgColor} shadow-lg transform scale-105`
                      : 'border-gray-200 bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${activeAchievementIndex === index ? 'bg-white shadow-sm' : 'bg-gray-100'}`}>
                      <div className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                      <div className="text-xs text-gray-600">{item.subtitle}</div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeAchievementIndex === index ? 'rotate-90' : ''}`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Achievements Content Area */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {achievements.map((item, index) => (
                <div
                  key={item.id}
                  className={`transform transition-all duration-700 ${
                    activeAchievementIndex === index
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-60 translate-y-4 scale-95 pointer-events-none'
                  } ${
                    activeAchievementIndex === index ? 'block' : 'hidden lg:block'
                  }`}
                >
                  {renderCard(item, index)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;