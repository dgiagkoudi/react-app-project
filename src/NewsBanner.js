import React, { useEffect, useState } from "react";

const newsItems = [
  "💀 ALERT: Η πλατεία καταλήφθηκε από τον μεγάλο horde!",
  "🦠 Νέο outbreak στα ανατολικά προάστια!",
  "🚨 Survivor radio: Νερό αποθηκευμένο στην εγκαταλελειμμένη βιβλιοθήκη!",
  "🧟‍♂️ Zombie horde πλησιάζει, οργάνωσε το καταφύγιό σου!",
];

export default function NewsBanner() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex(prev => (prev + 1) % newsItems.length);
    }, 5000); // αλλάζουμε μήνυμα κάθε 5 δευτερόλεπτα

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      role="alert"
      aria-live="assertive"
      style={{
        top: 0,
        left: 0,
        backgroundImage: "url('/banblack (1).jpg')", // apo public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffffffff",
        fontWeight: "bold",
        padding: "12px 15px",
        fontSize: "1.2rem",
        borderRadius: 0,
        textAlign: "center",
        boxShadow: "0 0 10px #ff0000",
        userSelect: "none",
        marginBottom: 20,
        whiteSpace: "nowrap",
        overflow: "hidden",
        zIndex: 9999
      }}
    >
      <div
        key={currentNewsIndex}
        style={{
          animation: "flash 1.5s ease-in-out",
        }}
      >
        {newsItems[currentNewsIndex]}
      </div>

      <style>{`
        @keyframes flash {
          0%, 100% { opacity: 0; transform: translateY(-10%);}
          30% { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
  
}