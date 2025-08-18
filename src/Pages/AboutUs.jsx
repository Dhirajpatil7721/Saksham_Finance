import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingUsd, FaChartLine, FaUsers, FaShieldAlt, FaLightbulb, FaHandshake } from 'react-icons/fa';
import { GiCash } from 'react-icons/gi';
import { RiCustomerService2Fill } from 'react-icons/ri';

const AboutUs = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const stats = [
    { value: "10,000+", label: "Happy Customers", icon: <FaUsers className="text-3xl" /> },
    { value: "₹500Cr+", label: "Loans Disbursed", icon: <GiCash className="text-3xl" /> },
    { value: "15+", label: "Years of Experience", icon: <FaChartLine className="text-3xl" /> },
    { value: "98%", label: "Customer Satisfaction", icon: <RiCustomerService2Fill className="text-3xl" /> }
  ];

  const features = [
    {
      icon: <FaHandHoldingUsd className="text-4xl mb-4" />,
      title: "Quick Loan Approval",
      description: "Get approved for loans in as little as 24 hours with our streamlined process."
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4" />,
      title: "Secure & Safe",
      description: "Your data is protected with bank-level security measures."
    },
    {
      icon: <FaLightbulb className="text-4xl mb-4" />,
      title: "Transparent Process",
      description: "No hidden charges or surprises - we believe in complete transparency."
    },
    {
      icon: <FaHandshake className="text-4xl mb-4" />,
      title: "Flexible Repayment",
      description: "Customizable repayment options to suit your financial situation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Saksham Finance</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering your financial dreams with trusted loan solutions since 2008.
          </p>
        </motion.div>
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-blue-500 transform -skew-x-12"></div>
          <div className="absolute inset-y-0 right-0 w-1/3 bg-blue-400 transform skew-x-12"></div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={loaded ? "show" : "hidden"}
          variants={container}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={item} className="relative">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Team" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-xl shadow-lg hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Happy Customer" 
                className="rounded-lg w-48 h-32 object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div variants={item}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2008, Saksham Finance began with a simple mission: to provide accessible financial solutions to individuals and businesses when traditional banks couldn't.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small lending operation in Mumbai has grown into one of India's most trusted non-banking financial companies, serving customers across 15 states.
            </p>
            <p className="text-gray-600">
              Today, we continue to innovate while staying true to our core values of transparency, integrity, and customer-first service.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={loaded ? "show" : "hidden"}
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-blue-800 rounded-xl shadow-lg"
              >
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Our Mission & Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We're committed to financial inclusion and helping our customers achieve their dreams.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate={loaded ? "show" : "hidden"}
          variants={container}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={item} className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide simple, fast, and fair financial solutions that empower individuals and businesses to grow and thrive.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Mission" 
              className="rounded-lg w-full h-48 object-cover"
            />
          </motion.div>

          <motion.div variants={item} className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4">
                  <FaHandshake className="text-lg" />
                </span>
                <span className="text-gray-600">Integrity in all our dealings</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4">
                  <FaUsers className="text-lg" />
                </span>
                <span className="text-gray-600">Customer-centric approach</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4">
                  <FaLightbulb className="text-lg" />
                </span>
                <span className="text-gray-600">Innovation in financial solutions</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4">
                  <FaShieldAlt className="text-lg" />
                </span>
                <span className="text-gray-600">Responsible lending practices</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Saksham Finance?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make the loan process simple, transparent, and customer-friendly.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate={loaded ? "show" : "hidden"}
            variants={container}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals guiding Saksham Finance towards excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              name: "Rajesh Sharma", 
              role: "Founder & CEO", 
              bio: "25+ years in financial services", 
              img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            },
            { 
              name: "Priya Patel", 
              role: "Chief Operations Officer", 
              bio: "Expert in loan processing systems", 
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            },
            { 
              name: "Amit Desai", 
              role: "Chief Risk Officer", 
              bio: "Specialist in credit risk management", 
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            }
          ].map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img 
                src={person.img} 
                alt={person.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{person.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{person.role}</p>
                <p className="text-gray-600">{person.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to achieve your financial goals?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Let Saksham Finance be your trusted partner in your financial journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Apply for a Loan Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;