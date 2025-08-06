import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000000ff",
        color: "#ffffffff",
        padding: "24px 0 12px",
        textAlign: "center",
        marginTop: 70,
      }}
    >
      {/* Εικόνα footer logo από public */}
      <img
        src="/logofire.png" alt="Zombie Survivor Symbol"
        style={{
          width: 100,
          objectFit: "cover"
        }}
      />
      <div style={{ margin: "18px 0 10px", fontSize: 18 }}>
        <strong>Stay alive. Stay connected.</strong>
      </div>
      <nav style={{ marginBottom: 12 }}>
        <a
          href="mailto:giagkoudim@gmail.com"
          style={{ color: "#ffffffff", margin: "0 8px", textDecoration: 'underline' }}
        >Επικοινωνία</a>
        |
        <a
          href="https://github.com/dgiagkoudi"
          style={{ color: "#ffffffff", margin: "0 8px", textDecoration: 'underline' }}
          target="_blank" rel="noopener noreferrer"
        >GitHub</a>
        |
      </nav>
      <div style={{ fontSize: 13, opacity: 0.75 }}>
        © {new Date().getFullYear()} Zombie Apocalypse Survivor Hub. <br />
      </div>
    </footer>
  );
}