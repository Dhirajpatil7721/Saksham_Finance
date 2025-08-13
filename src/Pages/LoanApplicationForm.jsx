import { useState } from "react";

export default function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    bank: "",
    loan: "",
    duration: "",
  });

  
  const banks = [
    "State Bank of India (SBI)",
    "Bank of Maharashtra (BoM)",
    "Bank of Baroda (BoB)",
    "Punjab National Bank (PNB)",
    "Canara Bank",
    "Union Bank of India",
    "Central Bank of India",
    "Indian Bank",
    "Indian Overseas Bank (IOB)",
    "UCO Bank",
    "Bank of India (BoI)",
    "Punjab & Sind Bank",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "IndusInd Bank",
    "Yes Bank",
    "IDFC First Bank",
    "RBL Bank",
  ];

  const loans = [
    "Personal Loan",
    "Home Loan",
    "Business Loan",
    "Education Loan",
    "Loan Against Property",
    "Vehicle Loan",
    "Electronics Loan",
    "Agriculture Loan",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted! Check console for details.");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Loan Application Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        {/* Contact Number */}
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        {/* Bank Dropdown */}
        <select
          name="bank"
          value={formData.bank}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        >
          <option value="">Select Bank</option>
          {banks.map((bank, idx) => (
            <option key={idx} value={bank}>
              {bank}
            </option>
          ))}
        </select>

        {/* Loan Dropdown */}
        <select
          name="loan"
          value={formData.loan}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        >
          <option value="">Select Loan Type</option>
          {loans.map((loan, idx) => (
            <option key={idx} value={loan}>
              {loan}
            </option>
          ))}
        </select>

        {/* Duration */}
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g. 5 Years)"
          value={formData.duration}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
}
