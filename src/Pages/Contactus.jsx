// import { useState } from 'react';

// const Contactus = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: ''
//     });

//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitSuccess, setSubmitSuccess] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//         // Clear error when user types
//         if (errors[name]) {
//             setErrors({
//                 ...errors,
//                 [name]: null
//             });
//         }
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.name.trim()) newErrors.name = 'Name is required';
//         if (!formData.email.trim()) {
//             newErrors.email = 'Email is required';
//         } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             newErrors.email = 'Please enter a valid email';
//         }
//         if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
//         if (!formData.message.trim()) newErrors.message = 'Message is required';

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             setIsSubmitting(true);
//             // Simulate form submission
//             setTimeout(() => {
//                 console.log('Form submitted:', formData);
//                 setIsSubmitting(false);
//                 setSubmitSuccess(true);
//                 setFormData({
//                     name: '',
//                     email: '',
//                     phone: '',
//                     subject: '',
//                     message: ''
//                 });
//                 // Hide success message after 5 seconds
//                 setTimeout(() => setSubmitSuccess(false), 5000);
//             }, 1500);
//         }
//     };

//     return (
//         <div className="max-w-4xl mx-auto px-4 py-4">
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <div className="md:flex">
//                     {/* Contact Information */}
//                     <div className="md:w-1/3 bg-blue-600 text-white p-8">
//                         <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
//                         <div className="space-y-4">
//                             <div className="flex items-start">
//                                 <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                 </svg>
//                                 <div>
//                                     <h3 className="font-semibold">Address</h3>
//                                     <p className="text-blue-100">123 Financial Street, Mumbai, India 400001</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start">
//                                 <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                                 </svg>
//                                 <div>
//                                     <h3 className="font-semibold">Phone</h3>
//                                     <p className="text-blue-100">+91 98765 43210</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start">
//                                 <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                 </svg>
//                                 <div>
//                                     <h3 className="font-semibold">Email</h3>
//                                     <p className="text-blue-100">support@myloans.com</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Contact Form */}
//                     <div className="md:w-2/3 p-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
//                         {submitSuccess && (
//                             <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
//                                 Thank you for your message! We'll get back to you soon.
//                             </div>
//                         )}
//                         <form onSubmit={handleSubmit}>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div>
//                                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                                         Full Name <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                                     />
//                                     {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//                                 </div>
//                                 <div>
//                                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                                         Email <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                                     />
//                                     {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//                                 </div>
//                                 <div>
//                                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                                         Phone Number
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         id="phone"
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//                                         Subject <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="subject"
//                                         name="subject"
//                                         value={formData.subject}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
//                                     />
//                                     {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
//                                 </div>
//                                 <div className="md:col-span-2">
//                                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                                         Message <span className="text-red-500">*</span>
//                                     </label>
//                                     <textarea
//                                         id="message"
//                                         name="message"
//                                         rows="4"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
//                                     ></textarea>
//                                     {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
//                                 </div>
//                             </div>
//                             <div className="mt-6">
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className={`w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
//                                 >
//                                     {isSubmitting ? (
//                                         <span className="flex items-center justify-center">
//                                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                             </svg>
//                                             Sending...
//                                         </span>
//                                     ) : (
//                                         'Send Message'
//                                     )}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contactus;


import React from 'react';

function Contactus() {
  return (
    <div className="max-w-7xl mx-auto px-12 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions or want to discuss a project? We'd love to hear from you.
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Address Card */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 transform hover:-translate-y-2">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Our Location</h3>
          </div>
          <p className="text-gray-600 pl-14">Sr No. 19/1, Hingne Home Colony, Karve Nagar, Pune-411052</p>
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 transform hover:-translate-y-2">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Phone Number</h3>
          </div>
          <p className="text-gray-600 pl-14">+91 7276240084</p>
        </div>

        {/* Email Card */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 transform hover:-translate-y-2">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Email Address</h3>
          </div>
          <p className="text-gray-600 pl-14">lokesh@gamil.com</p>
        </div>
      </div>

      {/* Map and Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Google Map */}
        <div className="h-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe 
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755837393866!2d72.8332153153849!3d19.03398725822794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8a3f9e143b%3A0x3b32b5a7e0b6e3a4!2sMumbai!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            className="w-full h-full min-h-[400px]"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Type your message here..."
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;


// import { useState } from 'react';

// const Contactus = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: null
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
//     if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
//     if (!formData.message.trim()) newErrors.message = 'Message is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsSubmitting(true);
//       setTimeout(() => {
//         console.log('Form submitted:', formData);
//         setIsSubmitting(false);
//         setSubmitSuccess(true);
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           subject: '',
//           message: ''
//         });
//         setTimeout(() => setSubmitSuccess(false), 5000);
//       }, 1500);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Contact Card */}
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//           <div className="md:flex">
//             {/* Left Side - Contact Info */}
//             <div className="md:w-2/5 bg-gradient-to-b from-teal-600 to-cyan-500 text-white p-10">
//               <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
//               <p className="text-teal-100 mb-10">
//                 Fill out the form and our team will get back to you within 24 hours.
//               </p>

//               <div className="space-y-8">
//                 {/* Contact Item */}
//                 <div className="flex items-start">
//                   <div className="bg-teal-500 p-3 rounded-full mr-4 flex-shrink-0">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg">Our Location</h3>
//                     <p className="text-teal-100">123 Financial Street, Mumbai, India 400001</p>
//                   </div>
//                 </div>

//                 {/* Contact Item */}
//                 <div className="flex items-start">
//                   <div className="bg-teal-500 p-3 rounded-full mr-4 flex-shrink-0">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg">Phone Number</h3>
//                     <p className="text-teal-100">+91 98765 43210</p>
//                   </div>
//                 </div>

//                 {/* Contact Item */}
//                 <div className="flex items-start">
//                   <div className="bg-teal-500 p-3 rounded-full mr-4 flex-shrink-0">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg">Email Address</h3>
//                     <p className="text-teal-100">support@myloans.com</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Social Links */}
//               <div className="mt-12">
//                 <h3 className="font-bold text-lg mb-4">Follow Us</h3>
//                 <div className="flex space-x-4">
//                   <a href="#" className="bg-teal-500 hover:bg-teal-400 p-3 rounded-full transition-colors">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                     </svg>
//                   </a>
//                   <a href="#" className="bg-teal-500 hover:bg-teal-400 p-3 rounded-full transition-colors">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
//                     </svg>
//                   </a>
//                   <a href="#" className="bg-teal-500 hover:bg-teal-400 p-3 rounded-full transition-colors">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Contact Form */}
//             <div className="md:w-3/5 p-10">
//               <h2 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
//               <p className="text-gray-600 mb-8">We'd love to hear from you! Send us a message.</p>

//               {submitSuccess && (
//                 <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-200">
//                   Thank you for your message! We'll get back to you soon.
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                       Full Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                       placeholder="John Doe"
//                     />
//                     {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                       Email <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                       placeholder="your@email.com"
//                     />
//                     {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//                   </div>
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
//                       placeholder="+91 98765 43210"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//                       Subject <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
//                       placeholder="Loan Inquiry"
//                     />
//                     {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
//                   </div>
//                   <div className="md:col-span-2">
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                       Message <span className="text-red-500">*</span>
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows="5"
//                       value={formData.message}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
//                       placeholder="Your message here..."
//                     ></textarea>
//                     {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
//                   </div>
//                 </div>
//                 <div>
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-medium rounded-lg hover:from-teal-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
//                   >
//                     {isSubmitting ? (
//                       <span className="flex items-center justify-center">
//                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Sending...
//                       </span>
//                     ) : (
//                       'Send Message'
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contactus;