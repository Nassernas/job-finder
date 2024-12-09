"use client";
import { useState } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import { raleway } from '../styles/fonts';
import Image from 'next/image';
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`flex flex-col min-h-screen bg-white ${raleway.className}`}>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center mt-12 mb-12  text-gray-700 ">
        <h1 className="text-4xl font-bold mb-14">Contact Us</h1>
        {submitted ? (
          <p className="">Thank you for your message! We will get back to you soon.</p>
        ) : (
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
            
          <form onSubmit={handleSubmit} className="w-full max-w-lg mb-8 md:mb-0 md:mr-8">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded text-gray-700"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-[#033941] text-white px-4 py-2 rounded-full hover:bg-[#022b31]"
            >
              Submit
            </button>
          </form>
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 bg-gray-100 rounded-xl transform translate-x-10 translate-y-12"></div>
              <Image
                src="/images/contact.jpg" 
                alt="Contact Us"
                width={1000}
                height={600}
                className="relative rounded-xl shadow-lg"
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}