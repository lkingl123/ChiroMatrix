"use client";

import { useState, useRef, useEffect } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    {
      role: "bot",
      content:
        "Hi, and welcome to Plumber Solutions! To book an immediate appointment click on “Book a Call” above. Need immediate assistance? Call us at 555-123-4567.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the most recent message
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
  
    const userMessage = { role: "user", content: input };
    setInput(""); // Clear input field immediately after sending
    setMessages((prev) => [...prev, userMessage]);
  
    // Simulate bot typing
    setIsTyping(true);
  
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
  
      const data = await response.json();
      const replyLength = data.reply.length;
  
      // Calculate delay dynamically based on message length
      const typingDelay = Math.min(Math.max(replyLength / 10, 1000), 3000);
  
      setTimeout(() => {
        // Directly add the full response
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: data.reply },
        ]);
        setIsTyping(false);
      }, typingDelay);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsTyping(false);
    }
  };

  // const playClickSound = () => {
  //   const audio = new Audio("/audio/click.mp3");
  //   audio.play();
  // };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {/* Inline Styles */}
      <style>{`
        .typing-dots {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }
        .typing-dots span {
          width: 6px;
          height: 6px;
          background-color: #6b7280;
          border-radius: 50%;
          animation: typing 1.5s infinite;
        }
        .typing-dots span:nth-child(1) {
          animation-delay: 0s;
        }
        .typing-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes typing {
          0%, 20% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
        }
      `}</style>

      {/* Toggle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          // playClickSound();
        }}
        className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
        title={isOpen ? "Close Chat" : "Open Chat"}
      >
        💬
      </button>

      {/* Chat Window */}
      <div
        className={`bg-white w-[400px] h-[600px] shadow-xl rounded-lg mt-4 flex flex-col border border-gray-300 overflow-hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{
          transformOrigin: "bottom right",
          position: "absolute",
          bottom: "72px",
          right: "0px",
        }}
      >
        {/* Header */}
        <div className="bg-blue-500 text-white p-3 font-bold flex items-center justify-between rounded-t-lg shadow-md">
          <span> 💬 AI Assistant</span>
          <button
            onClick={() => {
              setIsOpen(false);
              // playClickSound();
            }}
            className="text-white hover:text-gray-200"
          >
            ✖
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-xs px-4 py-2 rounded-lg bg-gray-200 text-gray-700 italic flex items-center">
                <span>Typing</span>
                <div className="typing-dots ml-2">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          {/* Reference div to ensure scrolling to the latest message */}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input */}
        <div className="p-3 bg-gray-100 flex items-center space-x-2 border-t">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
