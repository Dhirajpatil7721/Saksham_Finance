import './App.css'
import Nav from './Component/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contactus  from './Pages/Contactus'
import HomeLoanCalculator from './Calculators/HomeLoanCalculator'
import PersonalLoanCalculator from './Calculators/PersonalLoanCalculator'
import BusinessLoanCalculator from './Calculators/BusinessLoanCalculator'
import CreditCardCalculator from './Calculators/CreditCardCalculator'
import LoanAgainstPropertyCalculator from './Calculators/LoanAgainstPropertyCalculator'
import EMICalculator from './Calculators/EMICalculator'
import PersonalLoanPage from './Pages/Loans/PersonalLoanPage'
import BusinessLoanPage from './Pages/Loans/BusinessLoanPage'
import HomeLoanPage from './Pages/Loans/HomeLoanPage'
import CreditCardLoanPage from './Pages/Loans/CreditCardLoanPage'
import LoanAgainstPropertyPage from './Pages/Loans/LoanAgainstPropertyPage'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />

{/* Loans */}
        <Route path="/Personalloan" element={<PersonalLoanPage/>} />
        <Route path="/businessloan" element={<BusinessLoanPage/>} />
        <Route path="/homeloan" element={<HomeLoanPage/>} />
        <Route path="/creditcardloan" element={<CreditCardLoanPage/>} />
        <Route path="/loanagainstpropartyloan" element={<LoanAgainstPropertyPage/>} />


        {/* Calculators */}
        <Route path="/persnolcal" element={<PersonalLoanCalculator/>} />
        <Route path="/homecal" element={<HomeLoanCalculator/>} />
        <Route path="/businesscal" element={<BusinessLoanCalculator/>} />
        <Route path="/creditcardcal" element={<CreditCardCalculator/>} />
        <Route path="/loanagainstproprtycal" element={<LoanAgainstPropertyCalculator/>} />
        <Route path="/emical" element={< EMICalculator/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
