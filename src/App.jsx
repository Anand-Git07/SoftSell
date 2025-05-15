import { useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLock, FaClock, FaHeadset } from "react-icons/fa";

export default function SoftSellLandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const testimonials = [
    {
      name: "Anand Raj",
      role: "IT Manager",
      company: "Next.co",
      message: "SoftSell helped us recover value from unused licenses quickly and easily."
    },
    {
      name: "Priya Sharma",
      role: "Procurement Lead",
      company: "ByteGrade",
      message: "Smooth process and instant payments. Highly recommend!"
    }
  ];

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-all">
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SoftSell</h1>
          <button onClick={toggleDarkMode} className="border px-3 py-1 rounded">
            {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
        <section className="text-center py-20 px-4">
          <h2 className="text-4xl font-bold mb-4">Turn Unused Software Into Cash</h2>
          <p className="mb-6">Easily resell your unused licenses and recover value instantly.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Sell My Licenses</button>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-16 text-center">
          <h3 className="text-2xl font-bold mb-8">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div>
              <FaLock className="mx-auto text-4xl mb-4" />
              <h4 className="font-semibold">Upload License</h4>
              <p>Submit details of your unused software license.</p>
            </div>
            <div>
              <FaClock className="mx-auto text-4xl mb-4" />
              <h4 className="font-semibold">Get Valuation</h4>
              <p>We evaluate your license and provide a quote.</p>
            </div>
            <div>
              <FaRocket className="mx-auto text-4xl mb-4" />
              <h4 className="font-semibold">Get Paid</h4>
              <p>Receive fast payments via your preferred method.</p>
            </div>
          </div>
        </section>
        <section className="py-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Why Choose Us</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-4 border rounded-lg">
              <FaClock className="mx-auto text-3xl mb-2" />
              <p>Instant Valuations</p>
            </div>
            <div className="p-4 border rounded-lg">
              <FaLock className="mx-auto text-3xl mb-2" />
              <p>Secure Transactions</p>
            </div>
            <div className="p-4 border rounded-lg">
              <FaHeadset className="mx-auto text-3xl mb-2" />
              <p>24/7 Support</p>
            </div>
            <div className="p-4 border rounded-lg">
              <FaRocket className="mx-auto text-3xl mb-2" />
              <p>Fast Payouts</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-16 text-center">
          <h3 className="text-2xl font-bold mb-8">What Our Customers Say</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, index) => (
              <motion.div key={index} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
                <p className="mb-2">"{t.message}"</p>
                <div className="text-sm font-semibold">{t.name}, {t.role} @ {t.company}</div>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="py-16 px-4 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Get in Touch</h3>
          <form className="grid gap-4">
            <input type="text" placeholder="Name" required className="p-3 border rounded" />
            <input type="email" placeholder="Email" required className="p-3 border rounded" />
            <input type="text" placeholder="Company" className="p-3 border rounded" />
            <select required className="p-3 border rounded">
              <option value="">Select License Type</option>
              <option value="SaaS">SaaS</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Subscription">Subscription</option>
            </select>
            <textarea placeholder="Message" required className="p-3 border rounded"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Submit</button>
          </form>
        </section>
        <footer className="text-center py-6 border-t">
          <p>&copy; 2025 SoftSell. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
