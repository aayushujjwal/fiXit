import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import Header from '../components/Header';

function Home() {
  const [user, setUser] = useState(null);
  const [scrollable, setScrollable] = useState(false);
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setScrollable(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  const handleTryNowClick = () => {
    navigate('/bot');
  };

  return (
    <div className={`bg-black text-white ${scrollable ? 'h-auto' : 'h-screen overflow-hidden'}`}>
      <Header user={user} handleLogout={handleLogout} />
      <div ref={scrollContainerRef} className={`${scrollable ? 'overflow-y-auto' : 'overflow-hidden'} h-[calc(100vh-64px)]`}>
        <div className="flex flex-row items-start justify-between px-48 py-24">
          {/* Main Text Section */}
          <div className="w-1/2 pr-8">
            <h1 className="text-5xl font-bold leading-snug text-gray-200 mb-4">
              Conversational Intelligence for Sales Optimization
            </h1>
            <p className="text-3xl py-8 font-bold text-gray-300 mb-8">
              Enabling Human Intelligence with Artificial Intelligence
            </p>
            {/* Buttons */}
            <div className="flex space-x-6">
              <button onClick={handleTryNowClick} className="text-orange-500 text-xl hover:underline">Try now ></button>
              <a href="#schedule" className="text-orange-500 text-xl hover:underline">Schedule now ></a>
            </div>
          </div>

          {/* Microphone Section */}
          <div className="w-1/2 flex flex-col items-center">
            {/* Mic Icon with layered circles */}
            <div className="relative w-96 h-96">
              {/* Text overlaying circles */}
              <div className="absolute inset-x-0 top-[-20px] flex flex-col items-center z-10">
                <p className="text-white text-2xl mb-1">Give it a try.</p>
                <p className="text-gray-300 text-center px-4 text-sm">Click the mic to transcribe live in English or select another language.</p>
              </div>
              {/* Background circles */}
              <div className="absolute inset-0 w-96 h-96 rounded-full bg-gray-700 opacity-10 animate-pulse"></div>
              <div className="absolute inset-0 w-80 h-80 m-8 rounded-full bg-gray-700 opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 w-64 h-64 m-16 rounded-full bg-gray-700 opacity-40 animate-pulse"></div>
              {/* Main mic circle */}
              <div className="absolute inset-0 w-48 h-48 m-24 rounded-full bg-gradient-to-b from-gray-700 to-black flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v10M5 12h14M8 12l1 9M15 12l1 9" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* New scrollable content */}
        {scrollable && (
          <div className="px-48 py-24 bg-gray-900">
            <h2 className="text-4xl font-bold mb-8">Enabling sales teams in leading companies</h2>
            <div className="grid grid-cols-4 gap-8 mb-16">
              {[...Array(16)].map((_, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-xl font-semibold">Sponsor {index + 1}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Analyze your customer conversations in 500+ languages</h3>
              <p className="text-xl mb-8">
                Get deep insights to shorten sales cycle, increase customer trust, reduce ramp up time & drive more revenue
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
