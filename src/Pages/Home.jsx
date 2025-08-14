import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/HomeBg.png';

function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center flex justify-end items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="max-w-md mx-8 md:mx-16 lg:mr-32 px-4 py-8 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mann hai toh money hai
          </h2>

          <p className="text-lg text-gray-200 mb-8">
            Manage finances with our full suite of personalized financial products
          </p>

          <div className="flex flex-wrap items-center justify-start gap-4 md:gap-8">
            <div className="text-xl font-semibold text-white">65 Million+ users</div>
            <div className="hidden md:block h-6 border-r border-gray-300"></div>
            <div className="text-xl font-semibold text-white">
              4.8★ <span className="text-gray-200">Google rating</span>
            </div>
            <div className="hidden md:block h-6 border-r border-gray-300"></div>
            <div className="text-xl font-semibold text-white">5 Cr+ downloads</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why <span className="text-blue-600">Saksham Finance</span> Stands Out
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {[
              { 
                title: "Lightning Fast Approval", 
                desc: "Get loan approval within 15 minutes with our AI-powered system.",
                icon: "⚡",
                color: "bg-purple-100 text-purple-600"
              },
              { 
                title: "Lowest Interest Rates", 
                desc: "Starting from just 9.99% APR - lowest in the industry.",
                icon: "💰",
                color: "bg-blue-100 text-blue-600"
              },
              { 
                title: "100% Digital Process", 
                desc: "Complete your application without any paperwork.",
                icon: "📱",
                color: "bg-green-100 text-green-600"
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-3xl mb-6 mx-auto`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to fulfill your financial dreams?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Download our app now and get ₹1,000 instant credit!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download App
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;