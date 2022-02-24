import { useState } from "react";
import NftCard from "../../components/NftCard";
import Characters from "./tab/Characters";
import Items from "./tab/Items";

const MarketplaceWrapper = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [{ title: "Items", id: 0, renderer: () => <Items /> }];

  return (
    <section className="marketplace-wrapper section-padding">
      <h1 className="text-white display-5 mb-5 fw-bold text-font-glock text-center">
        NFT Marketplace
      </h1>
      <div className="d-flex align-items-center justify-content-center gap my-4 flex-mobile-column">
        {tabs.map((tab) => (
          <button
            onClick={() => setCurrentTab(tab.id)}
            key={tab.id}
            className={`fw-bold ${
              tab.id === currentTab
                ? "dark clip-none"
                : "text-white bg-transparent border-none clip-none"
            }`}
            style={{
              backgroundColor: tab.id === currentTab ? "#ffffff0f" : "#000",
            }}
          >
            {tab.title}
          </button>
        ))}
        <a
          href="https://solanart.io/collections/danerob"
          target="_blank"
          className={`fw-bold text-white bg-transparent border-none clip-none`}
          style={{
            backgroundColor: "#ffffff0f",
          }} rel="noreferrer"
        >
          Characters
        </a>
      </div>
      {tabs[currentTab].renderer()}
    </section>
  );
};

export default MarketplaceWrapper;
