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
            Top Video Game: <span style={{ color: "#fff" }}>Silent Hill 2 Remake</span>
          </h3>
          <p>
            Το remake του Silent Hill 2, που κυκλοφόρησε τον Οκτώβριο του 2024, έχει πουλήσει πάνω από 2 εκατομμύρια αντίτυπα παγκοσμίως, με πάνω 
            από 1 εκατομμύριο μόνο στις πρώτες 3 μέρες. Η υψηλής ποιότητας ατμόσφαιρα και η εξελιγμένη αφήγηση το κρατούν σταθερά αγαπημένο των παικτών.
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
            Η «Μεταμόρφωση» έχει πουλήσει πάνω από 10 εκατομμύρια αντίτυπα και διαβάζεται καθημερινά από χιλιάδες σε όλο τον κόσμο, 
            αποτελώντας κλασικό ορόσημο στην παγκόσμια λογοτεχνία.
          </p>
        </div>
      </section>

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
            Η punk μπάντα ΚΑΤΑΧΝΙΑ μετρά πάνω από 1 εκατομμύριο ψηφιακές ακροάσεις και η μουσική της ακούγεται από τα 
            μπαλκόνια των πόλεων, με τους πολίτες να δηλώνουν ότι σχεδόν αποκλειστικά αυτήν ακούνε, αντικαθιστώντας άλλους καλλιτέχνες 
            στο αστικό μουσικό τοπίο.
          </p>
        </div>
      </section>
    </article>
  );
}