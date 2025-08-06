import React from "react";

export default function HonorableMentionBlog() {
  return (
    <article
      style={{
        maxWidth: 700,
        margin: "40px auto",
        backgroundColor: "#eeeeeeff",
        color: "#ffffffff",
        borderRadius: 8,
        padding: 24,
        boxShadow: "0 0 20px #f0db4f44",
        fontFamily: "'Georgia', serif",
        lineHeight: 1.6,
      }}
    >
      <h2 style={{ marginBottom: 20, fontWeight: "bold", fontSize: "2rem", color: "black" }}>
        Honorable Mention του Μήνα
      </h2>

      <section 
        style={{ 
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 16,
          backgroundColor: "#222",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <img src="/KATAXNIA.png" alt="Kataxnia Band"
          style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8  }}
        />
        <div>
          <h3 style={{ borderBottom: "2px solid #ffffffff", paddingBottom: 6 }}>
            Top Καλλιτέχνης: <span style={{ color: "#fff" }}>ΚΑΤΑΧΝΙΑ</span>
          </h3>
          <p>
            Οι ΚΑΤΑΧΝΙΑ είναι μια πανκ μπάντα με εμβληματικό ήχο και αιχμηρούς
            στίχους. Η μουσική τους συνοδεύει κάθε ιστορία αντίστασης ή επιβίωσης στο soundtrack μιας σκοτεινής καθημερινότητας.
          </p>
        </div>
      </section>

      <section 
        style={{ marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 16,
          backgroundColor: "#222",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <img
          src="/silenthill2.jpg" alt="Silent Hill 2"
          style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8 }}
        />
        <div>
          <h3 style={{ borderBottom: "2px solid #ffffffff", paddingBottom: 6 }}>
            Top Video Game: <span style={{ color: "#fff" }}>Silent Hill 2</span>
          </h3>
          <p>
            Το Silent Hill 2 παραμένει σταθμός του ψυχολογικού horror και τέλειο υπόβαθρο για εμπειρίες που συνδυάζουν αγωνία, ατμόσφαιρα και σκοτεινή αφήγηση.
          </p>
        </div>
      </section>

      <section 
        style={{ marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 16,
          backgroundColor: "#222",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <img
          src="/kafka.jpg" alt="Η Μεταμόρφωση - Franz Kafka"
          style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8 }}
        />
        <div>
          <h3 style={{ borderBottom: "2px solid #ffffffff", paddingBottom: 6 }}>
            Top Βιβλίο: <span style={{ color: "#fff" }}>Η Μεταμόρφωση του Franz Kafka</span>
          </h3>
          <p>
            Η «Μεταμόρφωση» του Κάφκα είναι ένα αριστούργημα του υπαρξισμού, που εξερευνά την αποξένωση, τον παραλογισμό της ζωής και τη μοναξιά, 
            κλασικό ανάγνωσμα για σώματα και ψυχές που ζουν στα όρια μιας απροσδιόριστης πραγματικότητας.
          </p>
        </div>
      </section>
    </article>
  );
}