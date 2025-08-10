// KitContext.js
import { createContext, useState, useEffect } from "react";

export const KitContext = createContext();

export function KitProvider({ user, children }) {
  const [selectedItems, setSelectedItems] = useState([]);
  
  // Φόρτωσε kit από localStorage μόλις αλλάξει ο χρήστης
  useEffect(() => {
    if (!user) {
      setSelectedItems([]);
      return;
    }
    try {
      const savedKit = localStorage.getItem(`kit_${user}`);
      if (savedKit) {
        setSelectedItems(JSON.parse(savedKit));
      } else {
        setSelectedItems([]);
      }
    } catch (e) {
      console.error("Σφάλμα κατά την φόρτωση kit:", e);
      setSelectedItems([]);
    }
  }, [user]);

  // Αποθήκευση στο localStorage
  const saveKit = (items) => {
    if (!user) return;
    try {
      localStorage.setItem(`kit_${user}`, JSON.stringify(items));
    } catch (e) {
      console.error("Σφάλμα κατά την αποθήκευση kit:", e);
    }
  };

  // Προσθήκη item
  const addItem = (item) => {
    if (typeof item !== "string" || !item.trim()) {
      console.error(`Προσπάθεια να προστεθεί μη έγκυρη τιμή:${JSON.stringify(item)}`);
      return;
    }
    if (selectedItems.includes(item)) return;
    const updated = [...selectedItems, item];
    setSelectedItems(updated);
    saveKit(updated);
  };

  // Αφαίρεση item
  const removeItem = (item) => {
    const updated = selectedItems.filter((i) => i !== item);
    setSelectedItems(updated);
    saveKit(updated);
  };

  return (
    <KitContext.Provider value={{ selectedItems, addItem, removeItem}}>
      {children}
    </KitContext.Provider>
  );
}