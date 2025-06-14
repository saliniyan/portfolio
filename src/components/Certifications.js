import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 'cert-1',
    icon: <Award className="w-6 h-6" />,
    title: "Microsoft Certified Azure AI Engineer Associate",
    subtitle: "Microsoft",
    link: "https://drive.google.com/file/d/1Wclo956iGgGqCjX1XHup6d-6u77lfajX/view?usp=sharing",
    color: "from-blue-600 to-purple-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 'cert-2',
    icon: <Award className="w-6 h-6" />,
    title: "MongoDB Certified Associate Developer",
    subtitle: "MongoDB",
    link: "https://drive.google.com/file/d/1iJx_HnmK5LbnPbfQIHG9VCpkmZeHmur0/view?usp=sharing",
    color: "from-green-600 to-teal-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  }
];

const Certification = () => {
  return (
    <section className="bg-white py-12 px-6" id="certifications">
      <div className="max-w-5xl mx-auto mb-10">
        {/* Heading with smooth zoom effect */}
        <div className="text-center mb-10">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
          >
            Certifications
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-orange-500 text-lg font-medium"
          >
            Verified achievements from reputed platforms
          </p>
        </div>

        {/* Cards with smooth zoom-in effect */}
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              data-aos-duration="1000"
              data-aos-once="false"
              className={`rounded-2xl border ${cert.borderColor} shadow-sm p-6 hover:shadow-md transition ${cert.bgColor}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} text-white`}>
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600">{cert.subtitle}</p>
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline mt-2"
              >
                View Certificate <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
