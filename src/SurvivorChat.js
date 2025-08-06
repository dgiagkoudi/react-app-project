import React, { useState, useRef, useEffect } from "react";

export default function SurvivorChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input.trim(), id: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Προσθέτει την "no response" απάντηση μετά από λίγο
    setTimeout(() => {
      const systemMsg = {
        sender: "system",
        text: "Seems like no one is here... ",
        id: Date.now() + 1
      };
      setMessages(prev => [...prev, systemMsg]);
    }, 1500);
  };

  // Auto-scroll στο τέλος του chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section style={{ maxWidth: "100%", margin: "auto", padding: 20, color: "#eee", borderRadius: 8 }}>
       <h2 style={{ marginBottom: 12 }}>Chat with the Survivors</h2>

      <div
        className="chat-container"
        style={{
          backgroundImage: "url('/zoumpi4.jpg')", // από public folder
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: 600,
          width: "100%",
          borderRadius: 8,
          padding: 12,
          overflowY: "auto",
          marginBottom: 12,
          border: "1px solid #333",
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: 14,
          lineHeight: 1.4,
        }}
      >
        {messages.length === 0 && (
          <p style={{ fontStyle: "italic", color: "#ffffffff" }}>
            No messages yet. Try saying something...
          </p>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              marginBottom: 10,
              color: msg.sender === "system" ? "#f33" : "#ccc",
              fontStyle: msg.sender === "system" ? "italic" : "normal",
            }}
          >
            {msg.sender === "user" ? "> " : ""}
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={sendMessage} style={{ display: "flex" }}>
        <input
          type="text"
          value={input}
          placeholder="Type your message..."
          onChange={e => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "8px 12px",
            fontSize: 16,
            borderRadius: 4,
            border: "1px solid #555",
            marginRight: 8,
            background: "#222",
            color: "#eee",
          }}
        />
        <button
          type="submit"
          disabled={!input.trim()}
          style={{
            padding: "8px 16px",
            fontSize: 16,
            borderRadius: 4,
            border: "none",
            backgroundColor: "#d80b0bff",
            color: "white",
            cursor: input.trim() ? "pointer" : "not-allowed",
          }}
        >
          Send
        </button>
      </form>
    </section>

  );
}