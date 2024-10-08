import React, { useEffect } from "react";
import AOS from "aos";  // Import AOS for scroll animations
import "aos/dist/aos.css"; // Import AOS styles

const Achievements = () => {
  useEffect(() => {
    AOS.init({ // Initialize AOS with global settings
      once: false, // Controls whether animation should happen only once
      easing: 'ease-in-out', // Global easing option for all elements
      duration: 800, // Global duration for animations
    });
  }, []);

  return (
    <section className="py-3 px-3 bg-white mt-4 md:mt-7">
      <div className="mx-auto max-w-4xl">
        <div id="experience" className="flex flex-col text-center mb-4 w-full">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-2">
            Education & Achievements
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center"
          >
            Highlights of my academic journey and milestones.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Central Line */}
          <div className="border-l-4 border-dark-orange absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Schooling - Left */}
          <div className="mb-16 flex flex-col md:flex-row items-center justify-between md:justify-start">
            <div
              data-aos="fade-right" 
              data-aos-duration="1200" 
              data-aos-easing="ease-in-out" 
              data-aos-delay="200"
              className="md:w-5/12 text-right pr-8"
            >
              <h1 className="text-xl md:text-2xl font-semibold">Schooling</h1>
              <p className="text-lg text-gray-700">
                PKP Swamy Matric Hr Sec School
              </p>
              <p className="text-base md:text-base text-gray-500">
                Completed in 2020
              </p>
              <ul className="list-disc leading-loose text-base text-justify md:text-start md:text-lg font-medium">
                <li>10th Grade - 89.8%</li>
                <li>12th Grade - 88.6%</li>
              </ul>
            </div>

            {/* Blue Dot for School */}
            <div
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-delay="500" 
              className="md:w-2/12 text-center"
            >
              <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white mx-auto"></div> {/* Blue dot */}
            </div>

            {/* Empty Space */}
            <div className="md:w-5/12 pl-10 mt-4 md:mt-0"></div>
          </div>

          {/* Hackathon - Right */}
          <div className="mb-16 flex flex-col md:flex-row items-center justify-between md:justify-start">
            <div className="md:w-5/12"></div>
            <div
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-delay="500" 
              className="md:w-2/12 text-center"
            >
              <div className="w-6 h-6 bg-dark-orange rounded-full border-2 border-white mx-auto"></div> {/* Orange dot */}
            </div>

            <div
              data-aos="fade-left" 
              data-aos-duration="1200" 
              data-aos-easing="ease-in-out" 
              data-aos-delay="200"
              className="md:w-5/12 pl-10 mt-4 md:mt-0"
            >
              <h1 className="text-xl md:text-2xl font-semibold">Hackathon</h1>
              <p className="text-lg text-gray-700">30-Hour Hackathon at KEC</p>
              <ul className="list-disc leading-loose text-base text-justify md:text-start md:text-lg font-medium">
                <li>Secured 2nd place</li>
                <li>Showcased problem-solving under pressure</li>
              </ul>
            </div>
          </div>

          {/* College - Left */}
          <div className="mb-16 flex flex-col md:flex-row items-center justify-between md:justify-start">
            <div
              data-aos="fade-right" 
              data-aos-duration="1200" 
              data-aos-easing="ease-in-out" 
              data-aos-delay="200"
              className="md:w-5/12 text-right pr-8"
            >
              <h1 className="text-xl md:text-2xl font-semibold">College</h1>
              <p className="text-lg text-gray-700">
                B.Tech in AI & ML, Kongu Engineering College
              </p>
              <p className="text-base md:text-base text-gray-500">
                Ongoing (2026 Expected)
              </p>
              <ul className="list-disc leading-loose text-base text-justify md:text-start md:text-lg font-medium">
                <li>CGPA: 8.27*</li>
                <li>Active in academic and technical pursuits</li>
              </ul>
            </div>

            {/* Blue Dot for College */}
            <div
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-delay="500" 
              className="md:w-2/12 text-center"
            >
              <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white mx-auto"></div> {/* Blue dot */}
            </div>

            <div className="md:w-5/12 pl-10 mt-4 md:mt-0"></div>
          </div>

          {/* Internal SIH Hackathon - Right */}
          <div className="mb-16 flex flex-col md:flex-row items-center justify-between md:justify-start">
            <div className="md:w-5/12"></div>
            <div
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-delay="500" 
              className="md:w-2/12 text-center"
            >
              <div className="w-6 h-6 bg-dark-orange rounded-full border-2 border-white mx-auto"></div> {/* Orange dot */}
            </div>

            <div
              data-aos="fade-left" 
              data-aos-duration="1200" 
              data-aos-easing="ease-in-out" 
              data-aos-delay="200"
              className="md:w-5/12 pl-10 mt-4 md:mt-0"
            >
              <h1 className="text-xl md:text-2xl font-semibold">Hackathon</h1>
              <p className="text-lg text-gray-700">Internal SIH, KEC</p>
              <ul className="list-disc leading-loose text-base text-justify md:text-start md:text-lg font-medium">
                <li>Top 25 position</li>
                <li>Demonstrated innovation in solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
