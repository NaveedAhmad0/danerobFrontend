import React from "react";
import NftCard from "../../../components/NftCard";
import { ITEMS } from "../../../constants/data/nfts";

const Items = () => {
  return (
    <div className="row">
      {ITEMS.map((nft, idx) => (
        <div
          key={idx}
          className="marketplace-column col-xl-3 col-lg-6 col-md-6 col-xs-12 col-sm-12"
        >
          <NftCard
            id={nft.id} 
            photoLink={nft.photoLink}
            itemName={nft.itemName}
          />
        </div>
      ))}
    </div>
  );
};

export default Items;
