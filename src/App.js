import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Profile from './Profile';
import CommunityBoard from './CommunityBoard';
import KitBuilder from './KitBuilder';
import SurvivorChat from './SurvivorChat';
import NewsBanner from './NewsBanner';
import HonorableMentionBlog from './HonorableMentionBlog';
import Footer from './Footer';

function App() {
  // Απλό auth με username αποθηκευμένο στο localStorage
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (username) => {
    setUser(username);
    localStorage.setItem("user", username);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  if (!user) {
    return <Login onLogin={login} />;
  }

  return (
    <Router>
      <div style={{ maxWidth: 900, margin: "auto", padding: 20, backgroundColor: "#000", minHeight: "100vh", color: "#eee", fontFamily: "Arial, sans-serif" }}>
        {/* Πάντα ορατό banner ως header */}
        <header style={{ marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ margin: 0 }}>Zombie Apocalypse Survivor Hub</h1>
          <div>
            <span>Logged in as <strong>{user}</strong></span>{" "}
            <button onClick={logout} style={{ cursor: "pointer", padding: "6px 12px", marginLeft: 10 }}>Logout</button>
          </div>
        </header>

        {/* News Banner σταθερό πάνω */}
        <NewsBanner />

        {/* Navigation */}
        <nav style={{ marginBottom: 20 }}>
          <Link to="/profile" style={{ marginRight: 15, color: "#eee", textDecoration: "underline" }}>Profile</Link>
          <Link to="/kit-builder" style={{ marginRight: 15, color: "#eee", textDecoration: "underline" }}>Kit Builder</Link>
          <Link to="/survivor-chat" style={{ marginRight: 15, color: "#eee", textDecoration: "underline" }}>Chat</Link>
          <Link to="/honorable-mention" style={{ marginRight: 15, color: "#eee", textDecoration: "underline" }}>Honorable Mention</Link>
          <Link to="/community" style={{ marginRight: 15, color: "#eee", textDecoration: "underline" }}>Community Board</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/profile" />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/community" element={<CommunityBoard user={user} />} />
          <Route path="/kit-builder" element={<KitBuilder user={user} />} />
          <Route path="/survivor-chat" element={<SurvivorChat />} />
          <Route path="/honorable-mention" element={<HonorableMentionBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
    
  );
}

// Login component
function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = username.trim();
    if (trimmed.length >= 3) {
      onLogin(trimmed);
    } else {
      alert("Enter a valid username (at least 3 chars).");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "20vh auto", textAlign: "center", color: 'white' }}>
      <img src="/logofire.png" alt="Site Logo" style={{ width: 250, height: "auto", display: "block", margin: "auto" }} />
      <h1>Welcome, Survivor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your survivor name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: 10, fontSize: 16, width: "100%", marginBottom: 10 }}
          autoFocus
        />
        <button type="submit" style={{ padding: "10px 20px", fontSize: 16 }}>Enter</button>
      </form>
    </div>
  );
}

// Not Found component
function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
       <h2>404 - Page Not Found</h2>
        <p>Oops! Seems like this place was eaten by zombies.</p>
       <Link to="/" style={{ color: "#0af" }}>Go Home</Link>
       <img src="/logofire.png" alt="Site Logo" style={{ width: 150, height: "auto" }} />
     </div>
     
  );
}

export default App;