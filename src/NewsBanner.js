import React, { useEffect, useState } from "react";

const newsItems = [
  "💀 ALERT: Η πλατεία καταλήφθηκε από τον μεγάλο horde!",
  "🦠 Νέο outbreak στα ανατολικά προάστια!",
  "🚨 Survivor radio: Νερό αποθηκευμένο στην εγκαταλελειμμένη βιβλιοθήκη!",
  "🧟‍♂️ Zombie horde πλησιάζει, οργάνωσε το καταφύγιό σου!"
];

export default function NewsBanner() {
    const newsItems = ["💀 ALERT: Η πλατεία καταλήφθηκε από τον μεγάλο horde!",
  "🦠 Νέο outbreak στα ανατολικά προάστια!",
  "🚨 Survivor radio: Νερό αποθηκευμένο στην εγκαταλελειμμένη βιβλιοθήκη!",
  "🧟‍♂️ Zombie horde πλησιάζει, οργάνωσε το καταφύγιό σου!"];
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex(prev => (prev + 1) % newsItems.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div
      className="news-banner"
      role="alert"
      aria-live="assertive"
      style={{
        backgroundImage: "url('/black.jpg')", // 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        key={currentNewsIndex}
        style={{ animation: "flash 1.5s ease-in-out" }}
      >
        {newsItems[currentNewsIndex]}
      </div>
    </div>
  );
}