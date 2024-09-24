import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Redirect to home page after successful sign-in
        navigate('/');
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg p-12 flex flex-col items-center shadow-md">
        <div className="text-center mb-8">
          <img src="/path-to-google-logo.png" alt="Google Logo" className="w-[75px] h-auto mb-2" />
          <h1 className="text-2xl font-normal mb-2">Sign in</h1>
          <p className="text-base font-normal text-gray-800">to continue to Fixit</p>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center bg-blue-500 text-white border-none rounded px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors hover:bg-blue-600"
        >
          <img src="/path-to-google-icon.png" alt="Google Icon" className="w-[18px] h-[18px] mr-2" />
          Sign in with Google
        </button>
        <div className="mt-4 flex flex-col items-center">
          <select className="mb-4 p-2 border border-gray-300 rounded text-xs">
            <option>English (United States)</option>
            {/* Add more language options here */}
          </select>
          <div className="flex gap-4">
            <button onClick={() => window.open('/help', '_blank')} className="text-gray-600 text-xs hover:underline">Help</button>
            <button onClick={() => window.open('/privacy', '_blank')} className="text-gray-600 text-xs hover:underline">Privacy</button>
            <button onClick={() => window.open('/terms', '_blank')} className="text-gray-600 text-xs hover:underline">Terms</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;