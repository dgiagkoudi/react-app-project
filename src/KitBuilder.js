import React, { createContext, useState, useEffect } from "react";

export const KitContext = createContext();

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
  const [selectedItems, setSelectedItems] = useState([]);  // για αρχικό load
  const [unsavedItems, setUnsavedItems] = useState([]);    // αλλαγές πριν αποθήκευση
  const [customItem, setCustomItem] = useState("");

  // Φόρτωση kit μόνο στην αρχή ή όταν αλλάζει user
  useEffect(() => {
    const savedKit = localStorage.getItem(`kit_${user}`);
    if (savedKit) {
      const parsed = JSON.parse(savedKit);
      setSelectedItems(parsed);
      setUnsavedItems(parsed);  // ξεκινάει με αποθηκευμένα
    } else {
      setSelectedItems([]);
      setUnsavedItems([]);
    }
  }, [user]);

  // Προσθήκη item στο προσωρινό unsavedItems
  const addItem = (item) => {
    if (!item.trim() || unsavedItems.includes(item)) return;
    setUnsavedItems(prev => [...prev, item]);
  };

  // Αφαίρεση item από προσωρινό unsavedItems
  const removeItem = (item) => {
    setUnsavedItems(prev => prev.filter(i => i !== item));
  };

  // Αποθήκευση kit στο localStorage και ενημέρωση selectedItems
  const saveKit = () => {
    if (!user) return alert("Δεν έχεις ορίσει χρήστη.");
    localStorage.setItem(`kit_${user}`, JSON.stringify(unsavedItems));
    setSelectedItems(unsavedItems);
    alert("Το kit αποθηκεύτηκε!");
  };

  // Προσθήκη custom item
  const handleAddCustom = (e) => {
    e.preventDefault();
    const item = customItem.trim();
    if (item && !unsavedItems.includes(item)) {
      addItem(item);
      setCustomItem("");
    }
  };

  return (
    <div /* το background και στυλ σου */>
      <h2>Build Your Apocalypse Kit</h2>

      {/* Κατηγορίες */}
      {categoryOrder.map((rowCats, i) => (
        <div key={i} style={{display:"flex", gap:48, justifyContent:"center", marginBottom:40}}>
          {rowCats.map(cat => (
            <div key={cat} style={{/* δικό σου στυλ */}}>
              <h3>{cat}</h3>
              <ul style={{listStyle:"none", paddingLeft:0}}>
                {categories[cat].map(item => (
                  <li key={item}>
                    <button
                      onClick={() => addItem(item)}
                      disabled={unsavedItems.includes(item)}
                      style={{
                        width: "100%",
                        backgroundColor: unsavedItems.includes(item) ? "#444" : "#cc0000ff",
                        color: "#fff",
                        cursor: unsavedItems.includes(item) ? "not-allowed" : "pointer",
                        /* υπόλοιπο στυλ σου */
                      }}
                      title={unsavedItems.includes(item) ? "Ήδη στο kit σου" : "Πρόσθεσε στο kit"}
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

      {/* Custom item */}
      <form onSubmit={handleAddCustom} style={{textAlign: "center", marginBottom: 40}}>
        <input /* όπως πριν */ />
        <button type="submit" disabled={!customItem.trim()}>Πρόσθεσε</button>
      </form>

      {/* Προεπισκόπηση kit που θα αποθηκευτεί (unsavedItems) */}
      <div style={{
        maxWidth:700, 
        margin:"auto", 
        backgroundColor:"rgba(0,0,0,0.6)", 
        borderRadius:8, 
        padding:20}}>
        <h3 style={{textAlign:"center"}}>Το Kit που θα αποθηκευτεί</h3>
        {unsavedItems.length === 0 ? (
          <p style={{fontStyle:"italic", textAlign:"center"}}>Δεν έχεις επιλέξει ακόμα αντικείμενα.</p>
        ) : (
          <ul style={{listStyle:"none", paddingLeft:0}}>
            {unsavedItems.map(item => (
              <li key={item} 
              style={{
                display:"flex", 
                justifyContent:"space-between", 
                alignItems:"center", 
                marginBottom:10, 
                backgroundColor:"#cc0000ff", 
                color:"#000", 
                padding:"8px 12px", 
                borderRadius:6, 
                fontWeight:"bold"
                }}
              >
                {item}
                <button onClick={() => removeItem(item)} title="Αφαίρεσε από το kit" 
                style={{
                  background:"none", border:"none", 
                  color:"#000", 
                  cursor:"pointer", 
                  fontSize:18, 
                  fontWeight:"bold", 
                  padding:0
                  }}>×
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Κουμπί αποθήκευσης */}
        <button onClick={saveKit} disabled={unsavedItems.length === 0} 
        style={{
          marginTop:20, 
          padding:"10px 20px", 
          backgroundColor:"#cc0000", 
          color:"#fff", 
          border:"none", 
          borderRadius:6, 
          cursor: unsavedItems.length === 0 ? "not-allowed" : "pointer"
          }}>
          Αποθήκευση Kit
        </button>
      </div>
    </div>
  );
}