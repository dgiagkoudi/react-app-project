import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const newsItems = [
  "💀 ALERT: Η πλατεία καταλήφθηκε από τον μεγάλο horde!",
  "🦠 Νέο outbreak στα ανατολικά προάστια!",
  "🚨 Survivor radio: Νερό αποθηκευμένο στην εγκαταλελειμμένη βιβλιοθήκη!",
  "🧟‍♂️ Zombie horde πλησιάζει, οργάνωσε το καταφύγιό σου!"
];

export default function NewsBanner() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => navigate('/news-articles');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex(prev => (prev + 1) % newsItems.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="news-banner"
      role="alert"
      aria-live="assertive"
      onClick={handleClick}
      style={{
        backgroundImage: "url('/black.jpg')", // 
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        marginBottom: 20, 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center" , 
        cursor: 'pointer'}}
    >
      <div
        key={currentNewsIndex}
        style={{ animation: "flash 0.1s ease-in-out" }}
      >
        {newsItems[currentNewsIndex]}
      </div>
    </div>
  );
}