import React, { useState, useEffect } from "react";

export default function CommunityBoard({ user }) {
  // Τα posts αποθηκεύονται στο localStorage στη μορφή αντικειμένου που κλειδώνει username → posts
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  // Φορτώνουμε όλα τα posts (όλων των χρηστών) αλλά θα εμφανίσουμε tab ή απλά όλα
  useEffect(() => {
    const stored = localStorage.getItem("communityPosts");
    if (stored) {
      setPosts(JSON.parse(stored));
    }
  }, []);

  // Αποθήκευση στο localStorage
  const savePosts = (newPosts) => {
    localStorage.setItem("communityPosts", JSON.stringify(newPosts));
  };

  // Καταχώρηση νέου post από user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) return;

    const newPost = {
      id: Date.now(),
      user,
      text: input.trim(),
      date: new Date().toISOString()
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    savePosts(updatedPosts);
    setInput("");
  };

  return (
    <section>
        <div
            style={{
                backgroundImage: "url('/zoumpi4.jpg')", // από public folder
                backgroundSize: "cover"
            }}
        >
    <h2>Community Board</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <textarea
          rows={3}
          placeholder="Γράψε το μήνυμά σου στον κατάλογο επιζώντων..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "100%", marginBottom: 8, fontSize: 16, resize: "vertical" }}
        />
        <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
          Αποστολή
        </button>
      </form>
      {posts.length === 0 && <p>Κανένα μήνυμα ακόμα. Γίνε ο πρώτος επιζών που θα γράψει κάτι!</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map(({ id, user: postUser, text, date }) => (
          <li key={id} style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
            <strong>{postUser}</strong> <em style={{ color: "#666", fontSize: 12 }}>({new Date(date).toLocaleString()})</em>
            <p style={{ marginTop: 5 }}>{text}</p>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}