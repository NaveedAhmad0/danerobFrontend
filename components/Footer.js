import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{ borderTopWidth: 1, borderTopColor: "#4e4b66" }}
    >
      <div className="px-5">
        <div className="w-100 h-100 footer-row d-flex align-items-center justify-content-between flex-mobile-column gap-mobile">
          <img src="images/logo.png" width={250} alt="" />
          <ul className="d-flex align-items-center justify-content-between gap">
            <a
              style={{ color: "#fff" }}
              target="_blank"
              href="https://whitepaper.danerob.com/tokenomics"
            >
              <li>Tokenomics</li>
            </a>
            <a
              style={{ color: "#fff" }}
              target="_blank"
              href="https://whitepaper.danerob.com/tokenomics"
            >
              <li>Roadmap</li>
            </a>
            <a
              style={{ color: "#fff" }}
              target="_blank"
              href="https://whitepaper.danerob.com/roadmap"
            >
              <li>Storyline</li>
            </a>
            <a
              style={{ color: "#fff" }}
              target="_blank"
              href="/documents/pitch-deck-danerob.pdf"
            >
              <li>Pitch Deck</li>
            </a>
            <a
              style={{ color: "#fff" }}
              target="_blank"
              href="https://whitepaper.danerob.com/"
            >
              {" "}
              <li>Whitepaper</li>
            </a>
          </ul>
          <a href="https://discord.gg/ZFsHF3Ex" target="_blank">
            <button
              className="dark"
              style={{
                backgroundImage: 'url("images/1-purple.png")',
              }}
            >
              <i className="fab fa-discord me-3"></i>
              Join Our Discord
            </button>
          </a>
        </div>

        <div
          className="text-white mt-mobile text-mobile-center"
          style={{ fontSize: 15 }}
        >
          © 2022 Danerob. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
