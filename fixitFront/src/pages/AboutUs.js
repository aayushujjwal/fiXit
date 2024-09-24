import React from 'react';
import Header from '../components/Header';

function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="px-24 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">This is the about us page.</p>
      </div>
    </div>
  );
}

export default AboutUs;

