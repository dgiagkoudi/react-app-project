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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="news-banner"
      role="alert"
      aria-live="assertive"
    >
      <div
        key={currentNewsIndex}
        style={{ animation: "flash 1.5s ease-in-out" }}
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