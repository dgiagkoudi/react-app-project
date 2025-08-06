import React, { useState, useEffect } from "react";

const categories = {
  Gadgets: ["Φακός", "Κυάλια", "Πυξίδα", "Radio"],
  Weapons: ["Τσεκούρι", "Ρόπαλο", "Τόξο", "Μαχαίρι", "Στιλέτο"],
  Clothes: ["Μπότες", "Καπέλο", "Γάντια", "Fly"],
  Supplies: ["Νερό", "Τρόφιμα", "Ταινία", "Χαρτονομίσματα", "Χάπια"],
};

const categoryOrder = [
  ["Gadgets", "Clothes"],  // πρώτη σειρά 2 κατηγορίες δίπλα
  ["Weapons", "Supplies"], // δεύτερη σειρά 2 κατηγορίες δίπλα
];

export default function KitBuilder({ user }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [customItem, setCustomItem] = useState("");

  // Φορτώνουμε kit ανά χρήστη (localStorage)
  useEffect(() => {
    const savedKit = localStorage.getItem(`kit_${user}`);
    if (savedKit) setSelectedItems(JSON.parse(savedKit));
    else setSelectedItems([]);
  }, [user]);

  // Αποθήκευση kit στο localStorage
  const saveKit = (items) => {
    if (!user) return;
    localStorage.setItem(`kit_${user}`, JSON.stringify(items));
  };

  // Προσθήκη αντικειμένου στη λίστα
  const addItem = (item) => {
    if (!item.trim() || selectedItems.includes(item)) return;
    const updated = [...selectedItems, item];
    setSelectedItems(updated);
    saveKit(updated);
  };

  // Αφαίρεση αντικειμένου
  const removeItem = (item) => {
    const updated = selectedItems.filter(i => i !== item);
    setSelectedItems(updated);
    saveKit(updated);
  };

  // Προσθήκη αντικειμένου από τον χρήστη
  const handleAddCustom = (e) => {
    e.preventDefault();
    const item = customItem.trim();
    if (item && !selectedItems.includes(item)) {
      addItem(item);
      setCustomItem("");
    }
  };

  return (
    <div
       style={{
        minHeight: "100vh",
        backgroundImage: "url('/zoumpitoolkit.jpg')", // εικόνα από public
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 40,
        boxSizing: "border-box",
        color: "#eee",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: 24, textAlign: "center" }}>Build Your Apocalypse Kit</h2>

      {/* Δύο σειρές με δύο κατηγορίες δίπλα-δίπλα */}
      {categoryOrder.map((rowCats, i) => (
        <div key={i} style={{ display: "flex", gap: 48, justifyContent: "center", marginBottom: 40 }}>
          {rowCats.map(cat => (
            <div key={cat} style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              padding: 16,
              borderRadius: 8,
              flex: "1 1 300px",
              maxWidth: 350,
              boxShadow: "0 0 10px rgba(0,0,0,0.9)"
            }}>
              <h3 style={{ borderBottom: "2px solid #cc6600", paddingBottom: 6, marginBottom: 12 }}>{cat}</h3>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {categories[cat].map(item => (
                  <li key={item} style={{ marginBottom: 8 }}>
                    <button
                      onClick={() => addItem(item)}
                      disabled={selectedItems.includes(item)}
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        borderRadius: 5,
                        border: "none",
                        cursor: selectedItems.includes(item) ? "not-allowed" : "pointer",
                        backgroundColor: selectedItems.includes(item) ? "#444" : "#cc0000ff",
                        color: "#fff",
                        fontWeight: "bold",
                        transition: "background-color 0.3s",
                      }}
                      title={selectedItems.includes(item) ? "Ήδη στο kit σου" : "Πρόσθεσε στο kit"}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      {/* Περιοχή για custom αντικείμενα */}
      <form onSubmit={handleAddCustom} style={{ textAlign: "center", marginBottom: 40 }}>
        <input
          type="text"
          placeholder="Πρόσθεσε δικό σου αντικείμενο..."
          value={customItem}
          onChange={e => setCustomItem(e.target.value)}
          style={{
            padding: "10px 14px",
            fontSize: 16,
            borderRadius: 5,
            border: "2px solid #cc0000ff",
            width: "300px",
            maxWidth: "90%",
            marginRight: 10,
            outline: "none",
            color: "#000"
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: 16,
            borderRadius: 5,
            border: "none",
            backgroundColor: "#cc0000ff",
            color: "#fff",
            cursor: customItem.trim() ? "pointer" : "not-allowed",
            fontWeight: "bold",
          }}
          disabled={!customItem.trim()}
        >
          Πρόσθεσε
        </button>
      </form>

      {/* Λίστα επιλεγμένων αντικειμένων */}
      <div style={{
        maxWidth: 700,
        margin: "auto",
        backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: 8,
        padding: 20,
      }}>
        <h3 style={{ borderBottom: "2px solid #cc0000ff", paddingBottom: 6, marginBottom: 14, textAlign: "center" }}>
          Το Kit σου
        </h3>
        {selectedItems.length === 0 ? (
          <p style={{ textAlign: "center", fontStyle: "italic" }}>Δεν έχεις επιλέξει ακόμα αντικείμενα.</p>
        ) : (
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {selectedItems.map(item => (
              <li key={item} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                backgroundColor: "#cc0000ff",
                color: "#000",
                padding: "8px 12px",
                borderRadius: 6,
                fontWeight: "bold",
              }}>
                {item}
                <button
                  onClick={() => removeItem(item)}
                  aria-label={`remove ${item}`}
                  title="Αφαίρεσε από το kit"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#000",
                    cursor: "pointer",
                    fontSize: 18,
                    fontWeight: "bold",
                    lineHeight: 1,
                    padding: 0,
                  }}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}