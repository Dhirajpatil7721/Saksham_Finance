// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showMobileDropdown, setShowMobileDropdown] = useState(false);
//   const [showCalcDropdown, setShowCalcDropdown] = useState(false);
//   const [showMobileCalcDropdown, setShowMobileCalcDropdown] = useState(false);

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo and main menu items */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <Link to="/" className="text-white font-bold">
//                 MyLoans
//               </Link>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 <Link
//                   to="/"
//                   className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Home
//                 </Link>

//                 {/* Desktop Loans Dropdown */}
//                 <div
//                   className="relative"
//                   onMouseEnter={() => setShowDropdown(true)}
//                   onMouseLeave={() => setShowDropdown(false)}
//                 >
//                   <div className="flex items-center">
//                     <Link
//                       to="#"
//                       className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowDropdown(!showDropdown);
//                       }}
//                     >
//                       Loans
//                     </Link>
//                     <svg
//                       className={`ml-1 h-4 w-4 text-gray-300 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </div>

//                   {showDropdown && (
//                     <div className="absolute left-0 mt-2 w-[700px] bg-white text-black rounded-lg shadow-2xl z-50 p-4 border border-gray-200">
//                       <div className="grid grid-cols-3 gap-4">
//                         <Link
//                           to="/Personalloan"
//                           className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md"
//                         >
//                           <div className="font-semibold">Personal Loan</div>
//                           <div className="text-xs text-gray-500 mt-1">Get up to ₹10L in 10 mins</div>
//                         </Link>
//                         <Link
//                           to="/businessloan"
//                           className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md"
//                         >
//                           <div className="font-semibold">Business Loan</div>
//                           <div className="text-xs text-gray-500 mt-1">Get up to ₹5L with 60M tenure</div>
//                         </Link>
//                         <Link
//                           to="/homeloan"
//                           className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md"
//                         >
//                           <div className="font-semibold">Home Loan</div>
//                           <div className="text-xs text-gray-500 mt-1">Interest starts from 7.75%* p.a.</div>
//                         </Link>
//                       </div>

//                       <div className="grid grid-cols-3 gap-4 mt-4">
//                         <Link
//                           to="/creditcardloan"
//                           className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md"
//                         >
//                           <div className="font-semibold">Credit Card</div>
//                           <div className="text-xs text-gray-500 mt-1">Lifetime FREE cards with up to ₹5L limit</div>
//                         </Link>
//                         <Link
//                           to="/loanagainstpropartyloan"
//                           className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md"
//                         >
//                           <div className="font-semibold">Loan Against Property</div>
//                           <div className="text-xs text-gray-500 mt-1">Up to ₹75L without ITR</div>
//                         </Link>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Desktop Calculators Dropdown - Updated to match Loans style */}
//                 <div
//                   className="relative"
//                   onMouseEnter={() => setShowCalcDropdown(true)}
//                   onMouseLeave={() => setShowCalcDropdown(false)}
//                 >
//                   <div className="flex items-center">
//                     <Link
//                       to="#"
//                       className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowCalcDropdown(!showCalcDropdown);
//                       }}
//                     >
//                       Calculators
//                     </Link>
//                     <svg
//                       className={`ml-1 h-4 w-4 text-gray-300 transition-transform duration-200 ${showCalcDropdown ? 'rotate-180' : ''}`}
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </div>

//                   {showCalcDropdown && (
//                     <div className="absolute left-0 mt-2 w-[700px] bg-white text-black rounded-lg shadow-2xl z-50 p-4 border border-gray-200">
//                       <div className="grid grid-cols-3 gap-4">
//                         <Link
//                           to="/persnolcal"
//                           className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md"
//                         >
//                           <div className="font-semibold">Personal Loan Calculator</div>
//                           <div className="text-xs text-gray-500 mt-1">Calculate EMI, interest & tenure</div>
//                         </Link>
//                         <Link
//                           to="/homecal"
//                           className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md"
//                         >
//                           <div className="font-semibold">Home Loan Calculator</div>
//                           <div className="text-xs text-gray-500 mt-1">Plan your home loan with EMI breakdown</div>
//                         </Link>
//                         <Link
//                           to="/businesscal"
//                           className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md"
//                         >
//                           <div className="font-semibold">Business Loan Calculator</div>
//                           <div className="text-xs text-gray-500 mt-1">Estimate business loan EMIs</div>
//                         </Link>
//                       </div>

//                       <div className="grid grid-cols-3 gap-4 mt-4">
//                         <Link
//                           to="/creditcardcal"
//                           className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md"
//                         >
//                           <div className="font-semibold">Credit Card Calculator</div>
//                           <div className="text-xs text-gray-500 mt-1">Calculate interest & payments</div>
//                         </Link>
//                         <Link
//                           to="/loanagainstproprtycal"
//                           className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md"
//                         >
//                           <div className="font-semibold">Loan Against Property Calculator</div>
//                           <div className="text-xs text-gray-500 mt-1">Estimate LAP EMIs & eligibility</div>
//                         </Link>
//                         <Link
//                           to="/emical"
//                           className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md"
//                         >
//                           <div className="font-semibold">EMI Calculator</div>
//                           <div className="text-xs text-gray-500 mt-1">Universal calculator for all loan types</div>
//                         </Link>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <Link
//                   to="/contact"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Contact
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-300 hover:text-white focus:outline-none flex items-center"
//             >
//               Menu
//               <svg
//                 className={`ml-1 h-4 w-4 text-gray-300 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               to="/"
//               className="text-white block px-3 py-2 rounded-md text-base font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>

//             {/* Mobile Loans Dropdown */}
//             <div className="relative">
//               <button
//                 className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
//                 onClick={() => setShowMobileDropdown(!showMobileDropdown)}
//               >
//                 Loans
//                 <svg
//                   className={`h-4 w-4 text-gray-300 transition-transform duration-200 ${showMobileDropdown ? 'rotate-180' : ''}`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               {showMobileDropdown && (
//                 <div className="ml-4 mt-2 bg-gray-700 text-white rounded-lg shadow-lg">
//                   <Link
//                     to="/Personalloan"
//                     className="block px-3 py-2 hover:bg-gray-600 rounded-md"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setShowMobileDropdown(false);
//                     }}
//                   >
//                     <div className="font-medium">Personal Loan</div>
//                     <div className="text-xs text-gray-300">Get up to ₹10L in 10 mins</div>
//                   </Link>
//                   <Link
//                     to="/businessloan"
//                     className="block px-3 py-2 hover:bg-gray-600 rounded-md"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setShowMobileDropdown(false);
//                     }}
//                   >
//                     <div className="font-medium">Business Loan</div>
//                     <div className="text-xs text-gray-300">Get up to ₹5L with 60M tenure</div>
//                   </Link>
//                   <Link
//                     to="/homeloan"
//                     className="block px-3 py-2 hover:bg-gray-600 rounded-md"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setShowMobileDropdown(false);
//                     }}
//                   >
//                     <div className="font-medium">Home Loan</div>
//                     <div className="text-xs text-gray-300">Interest starts from 7.75%* p.a.</div>
//                   </Link>
//                   <Link
//                     to="/creditcardloan"
//                     className="block px-3 py-2 hover:bg-gray-600 rounded-md"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setShowMobileDropdown(false);
//                     }}
//                   >
//                     <div className="font-medium">Credit Card</div>
//                     <div className="text-xs text-gray-300">Lifetime FREE cards with up to ₹5L limit</div>
//                   </Link>
//                   <Link
//                     to="/loanagainstpropartyloan"
//                     className="block px-3 py-2 hover:bg-gray-600 rounded-md"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setShowMobileDropdown(false);
//                     }}
//                   >
//                     <div className="font-medium">Loan Against Property</div>
//                     <div className="text-xs text-gray-300">Up to ₹75L without ITR</div>
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Calculators Dropdown - Updated to match Loans style */}
//             <div className="relative">
//               <button
//                 className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
//                 onClick={() => setShowMobileCalcDropdown(!showMobileCalcDropdown)}
//               >
//                 Calculators
//                 <svg
//                   className={`h-4 w-4 text-gray-300 transition-transform duration-200 ${showMobileCalcDropdown ? 'rotate-180' : ''}`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               {showMobileCalcDropdown && (
//                 <div className="ml-4 mt-2 bg-gray-700 text-white rounded-lg shadow-lg">
//                   <Link
//                     to="/persnolcal"
//                     className="block px-3 py-2 hover:bg-gray-600 rounded-md"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setShowMobileCalcDropdown(false);
//                     }}
//                   >
//                     <div className="font-medium">Personal Loan Calculator</div>
//                     <div className="text-xs text-gray-300">Calculate EMI, interest & tenure</div>
//                   </Link>
//                   <Link
//                     to="/homecal"
//                     className="block px-3 py-2 hover:bg-gray-600 rounded-md"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setShowMobileCalcDropdown(false);
//                     }}
//                   >
//                     <div className="font-medium">Home Loan Calculator</div>
//                     <div className="text-xs text-gray-300">Plan your home loan with EMI breakdown</div>
//                   </Link>
//                   <Link
//                     to="/calculators/business-loan"businesscal
//                     className="block px-3 py-2 hover:bg-gray-600 rounded-md"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setShowMobileCalcDropdown(false);
//                     }}
//                   >
//                     <div className="font-medium">Business Loan Calculator</div>
//                     <div className="text-xs text-gray-300">Estimate business loan EMIs</div>
//                   </Link>
//                   <Link
//                     to="/creditcardcal"
//                     className="block px-3 py-2 hover:bg-gray-600 rounded-md"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setShowMobileCalcDropdown(false);
//                     }}
//                   >
//                     <div className="font-medium">Credit Card Calculator</div>
//                     <div className="text-xs text-gray-300">Calculate interest & payments</div>
//                   </Link>
//                   <Link
//                     to="/loanagainstproprtycal"
//                     className="block px-3 py-2 hover:bg-gray-600 rounded-md"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setShowMobileCalcDropdown(false);
//                     }}
//                   >
//                     <div className="font-medium">Loan Against Property Calculator</div>
//                     <div className="text-xs text-gray-300">Estimate LAP EMIs & eligibility</div>
//                   </Link>
//                   <Link
//                     to="/emical"
//                     className="block px-3 py-2 hover:bg-gray-600 rounded-md"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setShowMobileCalcDropdown(false);
//                     }}
//                   >
//                     <div className="font-medium">EMI Calculator</div>
//                     <div className="text-xs text-gray-300">Universal calculator for all loan types</div>
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link
//               to="/contact"
//               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;



import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showCalcDropdown, setShowCalcDropdown] = useState(false);
  const [showMobileCalcDropdown, setShowMobileCalcDropdown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`bg-gray-800 fixed w-full z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and main menu items */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold text-xl">
                MyLoans
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </Link>

                {/* Desktop Loans Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <div className="flex items-center">
                    <Link
                      to="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowDropdown(!showDropdown);
                      }}
                    >
                      Loans
                    </Link>
                    <svg
                      className={`ml-1 h-4 w-4 text-gray-300 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {showDropdown && (
                    <div className="absolute left-0 mt-2 w-[700px] bg-white text-black rounded-lg shadow-2xl z-50 p-4 border border-gray-200 animate-fadeIn">
                      <div className="grid grid-cols-3 gap-4">
                        <Link
                          to="/Personalloan"
                          className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="font-semibold">Personal Loan</div>
                          <div className="text-xs text-gray-500 mt-1">Get up to ₹10L in 10 mins</div>
                        </Link>
                        <Link
                          to="/businessloan"
                          className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="font-semibold">Business Loan</div>
                          <div className="text-xs text-gray-500 mt-1">Get up to ₹5L with 60M tenure</div>
                        </Link>
                        <Link
                          to="/homeloan"
                          className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="font-semibold">Home Loan</div>
                          <div className="text-xs text-gray-500 mt-1">Interest starts from 7.75%* p.a.</div>
                        </Link>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <Link
                          to="/creditcardloan"
                          className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="font-semibold">Credit Card</div>
                          <div className="text-xs text-gray-500 mt-1">Lifetime FREE cards with up to ₹5L limit</div>
                        </Link>
                        <Link
                          to="/loanagainstpropartyloan"
                          className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="font-semibold">Loan Against Property</div>
                          <div className="text-xs text-gray-500 mt-1">Up to ₹75L without ITR</div>
                        </Link>
                        <Link
                          to="/emical"
                          className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="font-semibold">EMI Calculator</div>
                          <div className="text-xs text-gray-500 mt-1">Universal calculator for all loan types</div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Desktop Calculators Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setShowCalcDropdown(true)}
                  onMouseLeave={() => setShowCalcDropdown(false)}
                >
                  <div className="flex items-center">
                    <Link
                      to="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowCalcDropdown(!showCalcDropdown);
                      }}
                    >
                      Calculators
                    </Link>
                    <svg
                      className={`ml-1 h-4 w-4 text-gray-300 transition-transform duration-200 ${showCalcDropdown ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {showCalcDropdown && (
                    <div className="absolute left-0 mt-2 w-[700px] bg-white text-black rounded-lg shadow-2xl z-50 p-4 border border-gray-200 animate-fadeIn">
                      <div className="grid grid-cols-3 gap-4">
                        <Link
                          to="/persnolcal"
                          className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="font-semibold">Personal Loan Calculator</div>
                          <div className="text-xs text-gray-500 mt-1">Calculate EMI, interest & tenure</div>
                        </Link>
                        <Link
                          to="/homecal"
                          className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="font-semibold">Home Loan Calculator</div>
                          <div className="text-xs text-gray-500 mt-1">Plan your home loan with EMI breakdown</div>
                        </Link>
                        <Link
                          to="/businesscal"
                          className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="font-semibold">Business Loan Calculator</div>
                          <div className="text-xs text-gray-500 mt-1">Estimate business loan EMIs</div>
                        </Link>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <Link
                          to="/creditcardcal"
                          className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="font-semibold">Credit Card Calculator</div>
                          <div className="text-xs text-gray-500 mt-1">Calculate interest & payments</div>
                        </Link>
                        <Link
                          to="/loanagainstproprtycal"
                          className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="font-semibold">Loan Against Property Calculator</div>
                          <div className="text-xs text-gray-500 mt-1">Estimate LAP EMIs & eligibility</div>
                        </Link>
                        <Link
                          to="/emical"
                          className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="font-semibold">EMI Calculator</div>
                          <div className="text-xs text-gray-500 mt-1">Universal calculator for all loan types</div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none flex items-center px-3 py-2 rounded-md text-base font-medium"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Loans Dropdown */}
          <div className="relative">
            <button
              className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition-colors duration-200"
              onClick={() => setShowMobileDropdown(!showMobileDropdown)}
            >
              Loans
              <svg
                className={`h-4 w-4 text-gray-300 transition-transform duration-200 ${showMobileDropdown ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className={`ml-4 mt-1 space-y-1 transition-all duration-300 overflow-hidden ${showMobileDropdown ? 'max-h-96' : 'max-h-0'}`}>
              <Link
                to="/Personalloan"
                className="block px-3 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  setShowMobileDropdown(false);
                }}
              >
                <div className="font-medium">Personal Loan</div>
                <div className="text-xs text-gray-300 mt-1">Get up to ₹10L in 10 mins</div>
              </Link>
              <Link
                to="/businessloan"
                className="block px-3 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  setShowMobileDropdown(false);
                }}
              >
                <div className="font-medium">Business Loan</div>
                <div className="text-xs text-gray-300 mt-1">Get up to ₹5L with 60M tenure</div>
              </Link>
              <Link
                to="/homeloan"
                className="block px-3 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  setShowMobileDropdown(false);
                }}
              >
                <div className="font-medium">Home Loan</div>
                <div className="text-xs text-gray-300 mt-1">Interest starts from 7.75%* p.a.</div>
              </Link>
              <Link
                to="/creditcardloan"
                className="block px-3 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  setShowMobileDropdown(false);
                }}
              >
                <div className="font-medium">Credit Card</div>
                <div className="text-xs text-gray-300 mt-1">Lifetime FREE cards with up to ₹5L limit</div>
              </Link>
              <Link
                to="/loanagainstpropartyloan"
                className="block px-3 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  setShowMobileDropdown(false);
                }}
              >
                <div className="font-medium">Loan Against Property</div>
                <div className="text-xs text-gray-300 mt-1">Up to ₹75L without ITR</div>
              </Link>
            </div>
          </div>

          {/* Mobile Calculators Dropdown */}
          <div className="relative">
            <button
              className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition-colors duration-200"
              onClick={() => setShowMobileCalcDropdown(!showMobileCalcDropdown)}
            >
              Calculators
              <svg
                className={`h-4 w-4 text-gray-300 transition-transform duration-200 ${showMobileCalcDropdown ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className={`ml-4 mt-1 space-y-1 transition-all duration-300 overflow-hidden ${showMobileCalcDropdown ? 'max-h-96' : 'max-h-0'}`}>
              <Link
                to="/persnolcal"
                className="block px-3 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  setShowMobileCalcDropdown(false);
                }}
              >
                <div className="font-medium">Personal Loan Calculator</div>
                <div className="text-xs text-gray-300 mt-1">Calculate EMI, interest & tenure</div>
              </Link>
              <Link
                to="/homecal"
                className="block px-3 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  setShowMobileCalcDropdown(false);
                }}
              >
                <div className="font-medium">Home Loan Calculator</div>
                <div className="text-xs text-gray-300 mt-1">Plan your home loan with EMI breakdown</div>
              </Link>
              <Link
                to="/businesscal"
                className="block px-3 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  setShowMobileCalcDropdown(false);
                }}
              >
                <div className="font-medium">Business Loan Calculator</div>
                <div className="text-xs text-gray-300 mt-1">Estimate business loan EMIs</div>
              </Link>
              <Link
                to="/creditcardcal"
                className="block px-3 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  setShowMobileCalcDropdown(false);
                }}
              >
                <div className="font-medium">Credit Card Calculator</div>
                <div className="text-xs text-gray-300 mt-1">Calculate interest & payments</div>
              </Link>
              <Link
                to="/loanagainstproprtycal"
                className="block px-3 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  setShowMobileCalcDropdown(false);
                }}
              >
                <div className="font-medium">Loan Against Property Calculator</div>
                <div className="text-xs text-gray-300 mt-1">Estimate LAP EMIs & eligibility</div>
              </Link>
              <Link
                to="/emical"
                className="block px-3 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  setShowMobileCalcDropdown(false);
                }}
              >
                <div className="font-medium">EMI Calculator</div>
                <div className="text-xs text-gray-300 mt-1">Universal calculator for all loan types</div>
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;