import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CreditCardCalculator() {
  const [outstandingBalance, setOutstandingBalance] = useState(50000); // ₹50,000
  const [interestRate, setInterestRate] = useState(3.5); // 3.5% monthly (42% annual)
  const [paymentOption, setPaymentOption] = useState('minimum'); // 'minimum' or 'fixed'
  const [fixedPayment, setFixedPayment] = useState(10000); // ₹10,000
  const [minimumPaymentPercent, setMinimumPaymentPercent] = useState(5); // 5%
  const [repaymentPlan, setRepaymentPlan] = useState([]);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalMonths, setTotalMonths] = useState(0);

  // Format Indian Rupees (₹)
  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Calculate repayment plan
  const calculateRepayment = () => {
    let balance = outstandingBalance;
    let months = 0;
    let interestPaid = 0;
    const plan = [];
    const minPayment = (outstandingBalance * minimumPaymentPercent) / 100;

    while (balance > 0 && months < 60) { // Max 5 years (60 months)
      const monthlyInterest = (balance * interestRate) / 100;
      interestPaid += monthlyInterest;
      balance += monthlyInterest;

      const payment = paymentOption === 'minimum' 
        ? Math.max(minPayment, balance * 0.05) // Ensure at least 5% of remaining balance
        : Math.min(fixedPayment, balance);

      balance -= payment;
      months++;

      plan.push({
        month: months,
        balance: Math.max(0, balance),
        payment,
        interest: monthlyInterest,
      });

      if (balance <= 0) break;
    }

    setRepaymentPlan(plan);
    setTotalInterest(interestPaid);
    setTotalMonths(months);
  };

  useEffect(() => {
    calculateRepayment();
  }, [outstandingBalance, interestRate, paymentOption, fixedPayment, minimumPaymentPercent]);

  // Data for charts
  const chartData = repaymentPlan.slice(0, 12).map(month => ({
    name: `Month ${month.month}`,
    Principal: month.payment - month.interest,
    Interest: month.interest,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* LEFT SIDE: Charts and Summary */}
          <div className="md:w-1/2 p-6 bg-purple-50">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Repayment Analysis</h2>
            
            {/* Bar Chart */}
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => formatINR(value)}
                    labelFormatter={(label) => `${label}`}
                  />
                  <Legend />
                  <Bar dataKey="Principal" stackId="a" fill="#7c3aed" />
                  <Bar dataKey="Interest" stackId="a" fill="#a78bfa" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-500 text-center">First 12 months payment breakdown</p>
            </div>

            {/* Summary Cards */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                <div className="flex justify-between">
                  <p className="text-gray-600">Outstanding Balance</p>
                  <p className="text-lg font-bold text-purple-600">{formatINR(outstandingBalance)}</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                <div className="flex justify-between">
                  <p className="text-gray-600">Total Interest</p>
                  <p className="text-lg font-bold text-pink-500">{formatINR(totalInterest)}</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                <div className="flex justify-between">
                  <p className="text-gray-600">Repayment Period</p>
                  <p className="text-lg font-bold text-purple-700">
                    {totalMonths} months ({Math.floor(totalMonths/12)} yrs {totalMonths%12} mos)
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                <div className="flex justify-between">
                  <p className="text-gray-600">Total Repayment</p>
                  <p className="text-lg font-bold text-purple-800">
                    {formatINR(outstandingBalance + totalInterest)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Input Controls */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Credit Card Calculator</h1>
            <p className="text-gray-600 mb-6">Calculate interest and repayment options for your credit card</p>

            {/* Outstanding Balance Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="balance" className="block text-sm font-medium text-gray-700">
                  Outstanding Balance (₹)
                </label>
                <span className="text-lg font-semibold text-purple-600">
                  {formatINR(outstandingBalance)}
                </span>
              </div>
              <input
                type="range"
                id="balance"
                min="1000"
                max="500000"
                step="1000"
                value={outstandingBalance}
                onChange={(e) => setOutstandingBalance(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹1,000</span>
                <span>₹5L</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                  Monthly Interest Rate (%)
                </label>
                <span className="text-lg font-semibold text-pink-500">
                  {interestRate}% ({(interestRate * 12).toFixed(1)}% annual)
                </span>
              </div>
              <input
                type="range"
                id="interest"
                min="1"
                max="4"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1%</span>
                <span>4%</span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Option</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentOption('minimum')}
                  className={`py-2 px-4 rounded-lg border ${
                    paymentOption === 'minimum'
                      ? 'bg-purple-100 border-purple-500 text-purple-700'
                      : 'bg-gray-50 border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="font-medium">Minimum Payment</div>
                  <div className="text-xs mt-1">
                    {minimumPaymentPercent}% of balance (₹
                    {Math.round((outstandingBalance * minimumPaymentPercent) / 100)})
                  </div>
                </button>
                <button
                  onClick={() => setPaymentOption('fixed')}
                  className={`py-2 px-4 rounded-lg border ${
                    paymentOption === 'fixed'
                      ? 'bg-purple-100 border-purple-500 text-purple-700'
                      : 'bg-gray-50 border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="font-medium">Fixed Payment</div>
                  <div className="text-xs mt-1">
                    {formatINR(fixedPayment)} per month
                  </div>
                </button>
              </div>
            </div>

            {/* Conditional Inputs */}
            {paymentOption === 'minimum' && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="minPayment" className="block text-sm font-medium text-gray-700">
                    Minimum Payment (%)
                  </label>
                  <span className="text-lg font-semibold text-purple-600">
                    {minimumPaymentPercent}%
                  </span>
                </div>
                <input
                  type="range"
                  id="minPayment"
                  min="3"
                  max="10"
                  step="1"
                  value={minimumPaymentPercent}
                  onChange={(e) => setMinimumPaymentPercent(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>3%</span>
                  <span>10%</span>
                </div>
              </div>
            )}

            {paymentOption === 'fixed' && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="fixedPayment" className="block text-sm font-medium text-gray-700">
                    Fixed Monthly Payment (₹)
                  </label>
                  <span className="text-lg font-semibold text-purple-600">
                    {formatINR(fixedPayment)}
                  </span>
                </div>
                <input
                  type="range"
                  id="fixedPayment"
                  min="1000"
                  max={Math.min(50000, outstandingBalance * 2)}
                  step="500"
                  value={fixedPayment}
                  onChange={(e) => setFixedPayment(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹1,000</span>
                  <span>₹50,000</span>
                </div>
              </div>
            )}

            {/* Key Insight */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-medium text-purple-800 mb-2">Key Insight</h3>
              {paymentOption === 'minimum' ? (
                <p className="text-sm text-gray-700">
                  Paying only the minimum ({minimumPaymentPercent}%) will take <span className="font-bold">{totalMonths} months</span> and cost <span className="font-bold">{formatINR(totalInterest)}</span> in interest.
                </p>
              ) : (
                <p className="text-sm text-gray-700">
                  Paying {formatINR(fixedPayment)} monthly will clear your debt in <span className="font-bold">{totalMonths} months</span> with <span className="font-bold">{formatINR(totalInterest)}</span> interest.
                </p>
              )}
              <p className="text-xs text-purple-600 mt-2">
                Tip: Increasing payments by just 10% can significantly reduce interest costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}