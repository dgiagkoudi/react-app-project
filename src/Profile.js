import React, { useState, useEffect, useContext } from "react";
import { KitContext } from "./KitContext";

export default function Profile({ user }) {
  const [bio, setBio] = useState("");
  const { selectedItems } = useContext(KitContext);

  // Φόρτωση bio από localStorage ανά χρήστη
  useEffect(() => {
    if (!user) return;
    const savedBio = localStorage.getItem(`profileBio_${user}`) || "";
    setBio(savedBio);
    }, [user]);

  const saveBio = () => { // Αποθήκευση bio
    if (!user) return alert("Δεν υπάρχει χρήστης.");
    localStorage.setItem(`profileBio_${user}`, bio);
    alert("Η ιστορία επιζώντα αποθηκεύτηκε!");
  };

  return (
    <main style={{ 
      maxWidth: 700, 
      margin: "auto", 
      padding: 20,  
      color: "#ffffff" }}>
      <h1 style={{ marginBottom: 30 }}>Προφίλ Επιζώντα: {user}</h1>

      <section style={{ // Πλαίσιο kit
        backgroundColor: "#222",
        color: "#fff",
        borderRadius: 8,
        padding: 20,
        boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
        marginBottom: 40
      }}>
        <h2 style={{ marginBottom: 15, borderBottom: "2px solid #cc0000", paddingBottom: 8 }}>Το kit σου</h2>
        {selectedItems.length === 0 ? (
          <p style={{ fontStyle: "italic", color: "#666" }}>Το kit σου είναι άδειο.</p>
        ) : (
          <ul style={{ listStyle: "disc outside", paddingLeft: 20 }}>
            {selectedItems.map(item => (
              <li key={item} style={{ marginBottom: 6 }}>{item}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Πλαίσιο βιογραφικού / ιστορίας */}
      <section style={{
        backgroundColor: "#222",
        color: "#fff",
        borderRadius: 8,
        padding: 20,
        boxShadow: "0 2px 8px rgba(0,0,0,0.4)"
      }}>
        <h2 style={{ marginBottom: 10, borderBottom: "2px solid #cc0000", paddingBottom: 6 }}>Ιστορία Επιζώντα</h2>
        <textarea
          rows={8}
          style={{
            width: "100%",
            borderRadius: 6,
            border: "none",
            padding: 12,
            fontSize: 16,
            fontFamily: "inherit",
            resize: "vertical",
            boxSizing: "border-box",
            backgroundColor: "#333",
            color: "#fff"
          }}
          placeholder="Πες μας την ιστορία σου..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
        <button
          onClick={saveBio}>Αποθήκευση
        </button>
      </section>
    </main>
  );
}