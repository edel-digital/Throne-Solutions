// src/pages/services/leadership-culture.jsx
import React from 'react';
import Partners from './Partners';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  Users, 
  BarChart, 
  Target, 
  HeartHandshake, 
  Lightbulb, 
  Award,
  ArrowRight,
  ChevronRight,
  Gauge,
  Network,
  BookOpen,
  Handshake
} from 'lucide-react';
import Testimonials from './testimonials';
import Footer from './Footer';

const LeadershipCulture = () => {
  const programPillars = [
    {
      icon: <Users className="text-brand" size={24} />,
      title: "Leadership Empowerment",
      description: "Develop leaders who inspire, motivate, and drive organizational success"
    },
    {
      icon: <HeartHandshake className="text-brand" size={24} />,
      title: "Culture Transformation",
      description: "Cultivate a positive, strengths-based organizational culture"
    },
    {
      icon: <BarChart className="text-brand" size={24} />,
      title: "Engagement Assessment",
      description: "Measure and improve team engagement through proven diagnostics"
    },
    {
      icon: <Network className="text-brand" size={24} />,
      title: "Collaborative Environment",
      description: "Foster teamwork and cross-functional collaboration"
    },
    {
      icon: <Gauge className="text-brand" size={24} />,
      title: "Productivity Enhancement",
      description: "Implement strategies that boost performance and efficiency"
    },
    {
      icon: <Award className="text-brand" size={24} />,
      title: "Talent Retention",
      description: "Create an environment where top talent thrives and stays"
    }
  ];

  const programStages = [
    {
      step: "01",
      title: "Culture Diagnostic",
      description: "Comprehensive assessment of current culture and engagement levels"
    },
    {
      step: "02",
      title: "Leadership Evaluation",
      description: "Identify leadership strengths and development opportunities"
    },
    {
      step: "03",
      title: "Program Customization",
      description: "Tailored development plan aligned with organizational goals"
    },
    {
      step: "04",
      title: "Leadership Workshops",
      description: "Interactive training on impactful leadership methodologies"
    },
    {
      step: "05",
      title: "Culture Transformation",
      description: "Implement strategies to foster strengths-based culture"
    },
    {
      step: "06",
      title: "Sustainable Integration",
      description: "Embed new practices into daily operations for lasting impact"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F9FC] to-[#E6E9F4]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
                   <img 
               src="/images/home-1.jpeg" 
               alt="Mental health support" 
               className="object-cover w-full h-full"
             />
                   <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                     <motion.h1 
                       className="text-white text-4xl md:text-6xl font-bold text-center"
                       initial={{ opacity: 0, y: -20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6 }}
                     >
                       Executive Leadership Coaching
                     </motion.h1>
                   </div>
                 </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#30344D] mb-6">
                Transform Your Organizational Culture
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Transform your organization's performance by focusing on effective leadership and cultivating a positive and strengths-based culture. Through our proven tools and training, we assess team engagement, empower leaders with impactful methodologies, and align goals with company objectives.
                </p>
                <p>
                  Create a collaborative environment that retains top talent, enhances productivity, and positively impacts your bottom line.
                </p>
                <p>
                  Our comprehensive program combines leadership development with cultural transformation to create sustainable organizational excellence.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-[#FFD166]/20 p-3 rounded-lg mr-4">
                  <Lightbulb className="text-[#FFD166]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#30344D]">Ideal For Organizations</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Companies experiencing rapid growth or change",
                  "Organizations with declining employee engagement",
                  "Businesses preparing for mergers or acquisitions",
                  "Teams with leadership transition challenges",
                  "Companies seeking to improve workplace culture",
                  "Organizations aiming to boost innovation and collaboration"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="text-brand mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pillars Section */}
      <section id="pillars" className="py-16 bg-white px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#30344D] mb-4">
              Program Pillars
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach integrates leadership development with cultural transformation
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#30344D] to-[#FFD166] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programPillars.map((pillar, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#F8F9FC] to-[#E6E9F4] rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#30344D]">{pillar.title}</h3>
                </div>
                <p className="text-gray-700">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       <section className="py-16 bg-white">
             <div className="container mx-auto px-4 max-w-6xl">
               <div className="text-center mb-12">
                 <p className="text-brand font-bold tracking-wider uppercase text-sm mb-2">
                   GALLERY
                 </p>
                 <h2 className="text-2xl font-bold text-gray-800 mb-3">
                   Leadership <span className="text-[#30344D]">In Action</span>
                 </h2>
                 <p className="text-gray-600 max-w-2xl mx-auto">
                   See our transformative programs and participants in action
                 </p>
                 <div className="w-16 h-0.5 bg-gradient-to-r from-[#30344D] to-[#FFD166] mx-auto mt-4 rounded-full"></div>
               </div>
     
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                 {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
                   <div key={id} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
                     <div className="relative h-56 overflow-hidden">
                       <img 
                         src={`/images/gallery-${id}.jpg`} 
                         alt={`Gallery item ${id}`}
                         className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                       />
                       {/* <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <button className="bg-white/80 hover:bg-white text-[#30344D] px-4 py-2 rounded-full font-medium transition-colors">
                           View
                         </button>
                       </div> */}
                     </div>
                     {/* <div className="p-4">
                       <h3 className="font-medium text-gray-800">Program Session #{id}</h3>
                       <p className="text-gray-600 text-sm mt-1">Leadership workshop activity</p>
                     </div> */}
                   </div>
                 ))}
               </div>
     
               {/* <div className="text-center mt-12">
                 <button className="inline-flex items-center px-6 py-3 bg-[#30344D] text-white font-medium rounded-lg hover:bg-[#1E2238] transition-all duration-300 shadow-md hover:shadow-lg">
                   View Full Gallery
                   <ArrowRight className="ml-2" size={18} />
                 </button>
               </div> */}
             </div>
           </section>
           
      <Testimonials />
        <Partners />
       <Footer />


    </div>
  );
};

export default LeadershipCulture;