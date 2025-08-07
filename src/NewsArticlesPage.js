import React from "react";

const articles = [
  {
    id: 1,
    title: "Κατάληψη πλατείας από μεγάλο horde",
    content: "Η πλατεία καταλήφθηκε από ένα μεγάλο κοπάδι μεταλλαγμένων ζόμπι, προκαλώντας πανικό στους κατοίκους. Οι τοπικές αρχές καλούν σε προσοχή και εκκένωση των γύρω περιοχών."
  },
  {
    id: 2,
    title: "Νέο outbreak στα ανατολικά προάστια",
    content: "Έκτακτη ανακοίνωση για νέο outbreak του ιού στα ανατολικά προάστια. Συνιστάται η άμεση λήψη μέτρων προστασίας και περιορισμός μετακινήσεων στην περιοχή."
  },
  {
    id: 3,
    title: "Νερό αποθηκευμένο στην εγκαταλελειμμένη βιβλιοθήκη",
    content: "Οι επιζώντες ενημερώνονται για την ύπαρξη αποθεμάτων νερού στην εγκαταλελειμμένη βιβλιοθήκη. Συνιστάται συντονισμένη προσπάθεια για την ασφαλή πρόσβαση και διανομή του νερού."
  },
  {
    id: 4,
    title: "Zombie horde πλησιάζει, οργανώστε το καταφύγιο!",
    content: "Η προσοχή στρέφεται στο επικείμενο κύμα ζόμπι που πλησιάζει. Οι κάτοικοι καλούνται να οργανώσουν τα καταφύγια και να εξοπλιστούν κατάλληλα για την επιβίωση."
  },
];

export default function NewsArticlesPage() {
  return (
    <main 
    style={{ 
      padding: "20px", 
      maxWidth: "800px", 
      margin: "auto", 
      backgroundImage: "url('/newsback.jpg')", 
      backgroundSize: "cover",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat" 
      }}
    >
      <h1 
      style={{ 
        borderBottom: "3px solid #333", 
        paddingBottom: "10px", 
        marginBottom: "20px",
        color: "#fdc611ff" 
        }}
        >Ειδήσεις</h1>
        {articles.map(({ id, title, content }) => (
        <article key={id} 
          style={{ 
            marginBottom: "30px", 
            padding: "15px",  
            borderRadius: "8px", 
            boxShadow: "0 5px 9px rgba(0, 0, 0, 0.93)" }}>
          <h2 style={{ color: "#fdc611ff", marginBottom: "10px" }}>{title}</h2>
          <h3 style={{ lineHeight: 1.6 }}>{content}</h3>
        </article>
      ))}
    </main>
  );
}