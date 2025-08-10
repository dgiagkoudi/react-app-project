import React, { useState, useContext } from "react";
import { KitContext } from "./KitContext";

const categories = {
  Εργαλεία: ["Φακός", "Κυάλια", "Πυξίδα", "Ράδιο"],
  Εξοπλισμοί: ["Τσεκούρι", "Ρόπαλο", "Τόξο", "Μαχαίρι"],
  Ρούχα: ["Μπότες", "Καπέλο", "Γάντια", "Μπουφάν"],
  Προμήθειες: ["Νερό", "Τρόφιμα", "Ταινία", "Φάρμακα"],
};

const categoryOrder = [
  ["Εργαλεία", "Ρούχα"],  // πρώτη σειρά 2 κατηγορίες δίπλα
  ["Εξοπλισμοί", "Προμήθειες"], // δεύτερη σειρά 2 κατηγορίες δίπλα
];

export default function KitBuilder() {
  const { selectedItems, addItem, removeItem } = useContext(KitContext);
  const [customItem, setCustomItem] = useState("");

  const handleAddCustom = (e) => {
    e.preventDefault();
    const item = customItem.trim();
    if (item && !selectedItems.includes(item)) {
      addItem(item);
      setCustomItem("");
      // Το saveKit αποθηκεύει αυτόματα στο context
    }
  };

  return (
    <div>
      <h2>Δημιούργησε το Kit Επιβίωσης σου</h2>

      {categoryOrder.map((rowCats, idx) => ( // Κατηγορίες 
        <div key={idx} style={{display:"flex", gap:48, justifyContent:"center", marginBottom:40, textAlign: "center" }}>
          {rowCats.map(cat => (
            <div key={cat}>
              <h3>{cat}</h3>
              <ul style={{listStyle:"none", paddingLeft:0, textAlign: "center" }}>
                {Array.isArray(categories[cat]) ? (
                  categories[cat].map(item => (
                    <li key={item} style={{ textAlign: "center" }}>
                      <button
                        onClick={() => addItem(item)}
                        disabled={selectedItems.includes(item)}
                        style={{
                          width: "100%",
                          backgroundColor: selectedItems.includes(item) ? "#444" : "#cc0000ff",
                          color: "#fff",
                          cursor: selectedItems.includes(item) ? "not-allowed" : "pointer",
                        }}
                        title={selectedItems.includes(item) ? "Ήδη στο kit σου" : "Πρόσθεσε στο kit"}
                      >
                        {item}
                      </button>
                    </li>
                  ))
                ) : (
                  <li>Κατηγορία άγνωστη</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      ))}

      <form onSubmit={handleAddCustom} style={{ textAlign: "center", marginBottom: 40 }}>
        <input
          type="text"
          placeholder="Προσθήκη custom item"
          value={customItem}
          onChange={(e) => setCustomItem(e.target.value)}
          style={{ padding: 10, width: "60%", fontSize: 16 }}
        />
        <button type="submit" disabled={!customItem.trim()}>
          Πρόσθεσε
        </button>
      </form>

      <div
        style={{
          maxWidth: 700,
          margin: "auto",
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: 8,
          padding: 20,
        }}
      >
        <h3 style={{ textAlign: "center" }}>Το Kit που έχεις επιλέξει</h3>
        {Array.isArray(selectedItems) && selectedItems.length > 0 ? (
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {selectedItems.map(item => (
              <li
                key={item}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 10,
                  backgroundColor: "#cc0000ff",
                  color: "#000",
                  padding: "8px 12px",
                  borderRadius: 6,
                  fontWeight: "bold",
                }}
              >
                {item}
                <button
                  onClick={() => removeItem(item)}
                  title="Αφαίρεσε από το kit"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#000",
                    cursor: "pointer",
                    fontSize: 20,
                    fontWeight: "bold",
                    padding: 0,
                    marginLeft: 8,
                    lineHeight: 1,
                  }}
                  aria-label={`Αφαίρεσε ${item}`}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ fontStyle: "italic", textAlign: "center" }}>Δεν έχεις επιλέξει ακόμα αντικείμενα.</p>
        )}
      </div>
    </div>
  );
}