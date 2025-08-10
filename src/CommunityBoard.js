import React, { useState, useEffect } from "react";

export default function CommunityBoard({ user }) {
  // Τα posts αποθηκεύονται στο localStorage στη μορφή αντικειμένου που κλειδώνει username → posts
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  // Φόρτωση posts από localStorage κάθε φορά που αλλάζει ο χρήστης
  useEffect(() => {
    const stored = localStorage.getItem("communityPosts");
    if (stored) {
      setPosts(JSON.parse(stored));
    } else {
      setPosts([]);
    }
  }, [user]); // Εξάρτηση από τον χρήστη ώστε να φορτώνει ξανά όταν αλλάζει

  // Συγχρονισμός posts με αλλαγές σε άλλο tab ή παράθυρο
  useEffect(() => {
    const syncPosts = (event) => {
      if (event.key === "communityPosts") {
        if (event.newValue) {
          setPosts(JSON.parse(event.newValue));
        }
      }
    };
    window.addEventListener("storage", syncPosts);
    return () => {
      window.removeEventListener("storage", syncPosts);
    };
  }, []);

  // Αποθήκευση posts στο localStorage
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
                backgroundSize: "cover",
                padding: 20,
                minHeight: 400,
                color: "#eee"
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
            <li key={id} style={{ padding: 10, borderBottom: "1px solid #9c9c9cff", color: "#9c9c9cff" }}>
              <strong>{postUser}</strong>{" "}
              <em style={{ color: "#9c9c9cff", fontSize: 12 }}>
                ({new Date(date).toLocaleString()})
              </em>
              <p style={{ marginTop: 5, color: "#eee" }}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}