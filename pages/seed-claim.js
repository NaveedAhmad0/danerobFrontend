import React from "react";
import Layout from "../components/Layout";

const SeedClaim = () => {
  return (
    <Layout title="Danerob | Seed Claim">
      <div>
        <div
          style={{
            width: 100 + "%",
            background: "#141414",
            paddingTop: 150,
            paddingBottom: 150,
          }}
          className="h-mobile-100"
        >
          <div className="container">
            <h1 className="text-center display-2 mb-5 text-font-glock text-white">
              Seed Claim
            </h1>

            {/* <div
              style={{
                background: "#101010",
                padding: "40px",
                borderRadius: 12,
              }}
            >
              <h1 className="text-white text-center text-lg mb-3">
                CHECK YOUR WHITELIST STATUS
              </h1>

              <div
                className="d-flex align-items-center justify-content-between gap flex-mobile-column"
                style={{ flex: 1 }}
              >
                <input
                  style={{ borderRadius: 12 }}
                  type="text"
                  placeholder="Wallet address"
                />
                <button
                  style={{
                    height: 55,
                    borderRadius: 10,
                    background: "#ffffff0f",
                  }}
                  className="outline position-relative dark"
                >
                  Check
                </button>
              </div>
            </div> */}
            <div
              style={{
                background: "#101010",
                padding: "40px",
                borderRadius: 12,
                marginTop: 40,
              }}
            >
              <h1 className="text-white text-center text-lg mb-3">
                NEXT CLAIM ROUND
              </h1>
              <div
                className="d-flex align-items-center justify-content-between gap flex-mobile-column"
                style={{ flex: 1 }}
              >
                <div>
                  <h1 className="text-md text-white fw-bold">TOTAL</h1>
                  <span className="text-white">2500.00</span>
                </div>
                <div>
                  <h1 className="text-md text-white fw-bold">AVAILABLE</h1>
                  <span className="text-white">2.40</span>
                </div>
                <div>
                  <button
                    style={{
                      height: 55,
                      borderRadius: 12,
                      backgroundImage: "url('images/1-purple.png')",
                    }}
                    className="outline d-flex align-items-center justify-content-center dark clip-none"
                  >
                    Claim
                  </button>
                </div>
              </div>

              <div
                className="mt-5"
                style={{
                  padding: 30,
                  borderRadius: 12,
                  backgroundColor: "#ffffff0f",
                }}
              >
                <ul className="d-flex align-items-center justify-content-between w-100 text-white flex-mobile-column text-mobile-center">
                  <li className="d-flex justify-content-center flex-direction-column">
                    <span>Amount</span>
                    <span className="font-weight-bold text-md">25</span>
                  </li>
                  <li className="d-flex justify-content-center flex-direction-column">
                    <span>Time</span>
                    <span className="font-weight-bold text-md">
                      19 mins ago
                    </span>
                  </li>
                  <li className="d-flex justify-content-center flex-direction-column">
                    <span>Block Number</span>
                    <span className="font-weight-bold text-md">124959833</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SeedClaim;
