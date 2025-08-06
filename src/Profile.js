import React, { useState, useEffect } from "react";

export default function Profile({ user }) {
  const [bio, setBio] = useState("");

  // Φορτώνουμε bio από localStorage κατά username
  useEffect(() => {
    const savedBio = localStorage.getItem(`profileBio_${user}`) || "";
    setBio(savedBio);
  }, [user]);

  const saveBio = () => {
    localStorage.setItem(`profileBio_${user}`, bio);
    alert("Bio αποθηκεύτηκε!");
  };

  return (
    <section>
      <h2>Survivor Profile: {user}</h2>
      <label>
        <strong>Βιογραφικό / Ιστορία Επιζώντα:</strong>
        <textarea
          rows={6}
          style={{ width: "100%", marginTop: 8 }}
          placeholder="Πες μας την ιστορία σου..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </label>
      <button onClick={saveBio} style={{ marginTop: 10, padding: "8px 16px", cursor: "pointer" }}>
        Αποθήκευση
      </button>
    </section>
  );
}