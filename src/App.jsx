import './App.css'
import Nav from './Component/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contactus from './Pages/Contactus'
import LoanApplicationForm from './Pages/LoanApplicationForm'
import HomeLoanCalculator from './Calculators/HomeLoanCalculator'
import PersonalLoanCalculator from './Calculators/PersonalLoanCalculator'
import BusinessLoanCalculator from './Calculators/BusinessLoanCalculator'
import LoanAgainstPropertyCalculator from './Calculators/LoanAgainstPropertyCalculator'
import PersonalLoanPage from './Pages/Loans/PersonalLoanPage'
import BusinessLoanPage from './Pages/Loans/BusinessLoanPage'
import HomeLoanPage from './Pages/Loans/HomeLoanPage'
import LoanAgainstPropertyPage from './Pages/Loans/LoanAgainstPropertyPage'
import EducationLoanPage from './Pages/Loans/EducationLoanPage'
import VehicleLoanPage from './Pages/Loans/VehicleLoanPage'
import ElectricDeviceLoanPage from './Pages/Loans/ElectricDeviceLoanPage'
import AgricultureLoanPage from './Pages/Loans/AgricultureLoanPage '
import EducationLoanCalculator from './Calculators/EducationLoanCalculator'
import VehicleLoanCalculator from './Calculators/VehicleLoanCalculator'
import AgricultureLoanCalculator from './Calculators/AgricultureLoanCalculator'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/form" element={<LoanApplicationForm />} />

        {/* Loans */}
        <Route path="/Personalloan" element={<PersonalLoanPage />} />
        <Route path="/businessloan" element={<BusinessLoanPage />} />
        <Route path="/homeloan" element={<HomeLoanPage />} />
        <Route path="/loanagainstpropartyloan" element={<LoanAgainstPropertyPage />} />
        <Route path="/educationloan" element={<EducationLoanPage />} />
        <Route path="/vehicalloan" element={<VehicleLoanPage />} />
        <Route path="/electronicsloan" element={<ElectricDeviceLoanPage />} />
        <Route path="/agriculturepage" element={<AgricultureLoanPage/>} />


        {/* Calculators */}
        <Route path="/persnolcal" element={<PersonalLoanCalculator />} />
        <Route path="/homecal" element={<HomeLoanCalculator />} />
        <Route path="/businesscal" element={<BusinessLoanCalculator />} />
        <Route path="/loanagainstproprtycal" element={<LoanAgainstPropertyCalculator />} />
        <Route path="/educationcal" element={<EducationLoanCalculator/>} />
        <Route path="/vehiclecal" element={<VehicleLoanCalculator/>} />
        <Route path="/emical" element={<LoanAgainstPropertyCalculator/>} />
        <Route path="/agriculturecal" element={<AgricultureLoanCalculator/>} />
        <Route path="/agriculturecal" element={<AgricultureLoanCalculator/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
