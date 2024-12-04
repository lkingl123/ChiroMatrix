"use client";

import { useState, useEffect } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "bot", content: "Hi, and welcome to Plumber Solutions! We're here to help grow your plumbing business with professional websites and marketing strategies. To book an immediate appointment click on “Book a Call” above. Need immediate assistance? Call us at 555-123-4567."},
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { role: "bot", content: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput("");
  };

  const playClickSound = () => {
    const audio = new Audio("/audio/click.mp3");
    audio.play();
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {/* Toggle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          playClickSound();
        }}
        className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
        title={isOpen ? "Close Chat" : "Open Chat"}
      >
        💬
      </button>

      {/* Chat Window */}
      <div
        className={`bg-white w-80 h-96 shadow-xl rounded-lg mt-4 flex flex-col border border-gray-300 overflow-hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{
          transformOrigin: "bottom right",
          position: "absolute",
          bottom: "72px", // Keeps it aligned with the button
          right: "0px",
        }}
      >
        {/* Header */}
        <div className="bg-blue-500 text-white p-4 font-bold flex items-center justify-between rounded-t-lg">
          Chat with Us!
          <button
            onClick={() => {
              setIsOpen(false);
              playClickSound();
            }}
            className="text-white hover:text-gray-200"
          >
            ✖
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-gray-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`${
                msg.role === "user"
                  ? "text-right"
                  : "text-left text-gray-700"
              }`}
            >
              <div
                className={`inline-block px-3 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-400 text-white"
                    : "bg-gray-200"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 bg-gray-100">
          <div className="flex items-center space-x-2">
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
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
