import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import companylogo2 from '../Assets/fixit_gray_bg.1049c903.svg';
import menu from '../Assets/main-menu.png';

function Bot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Load Watson Assistant script
    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);
  }, []);

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');

      try {
        // Fetch response from FastAPI backend
        const response = await fetch('http://localhost:8000/ask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question: input }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data.answer, sender: 'bot' },
        ]);
      } catch (error) {
        console.error('Failed to fetch:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        {sidebarOpen ? (
          <div className="w-1/4 bg-black text-white p-4">
            <button
              className="text-white mb-4"
              onClick={() => setSidebarOpen(false)}
            >
              <img src={menu} alt="Close" className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <ul>
              <li className="mb-2">
                <Link to="/bot/call-audit" className="text-lg hover:underline">Call Audit</Link>
                <ul className="ml-4">
                  <li className="mb-2">
                    <Link to="/bot/call-audit/summary" className="text-sm hover:underline">Summary</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/bot/call-audit/data-score" className="text-sm hover:underline">Data Score</Link>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <Link to="/bot/ai-agent" className="text-lg hover:underline">AI Agent</Link>
                <ul className="ml-4">
                  <li className="mb-2">
                    <Link to="/bot/ai-agent/summary" className="text-sm hover:underline">Summary</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/bot/ai-agent/chat" className="text-sm hover:underline">Chat</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        ) : (
          <div className="w-12 bg-black text-white p-4">
            <button
              className="text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <img src={menu} alt="Open" className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Logo and Text */}
          <div className="flex items-center justify-center p-4">
            <img src={companylogo2} alt="Logo" className="w-12 h-12 mr-4" />
            <h1 className="text-4xl text-black">fiXit</h1>
          </div>
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-4 bg-white flex items-center">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-lg text-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bot;
