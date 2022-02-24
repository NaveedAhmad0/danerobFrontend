import React from "react";
import Link from "next/link";

const NftCard = ({ photoLink, id, itemName }) => {
  return (
    <Link href={"/nft/" + id}>
      <a>
        <div
          className="nft-card"
          style={{
            backgroundColor: "#101010",
            borderRadius: 12,
          }}
        >
          <div className="nft-card-row">
            <div className="nft-image">
              <img
                style={{
                  borderRadius: 12,
                }}
                src={photoLink}
                alt=""
              />
            </div>
            <div className="nft-content">
              <h1 className="nft-title text-white">{itemName}</h1>
              <button
                className="dark"
                style={{
                  backgroundColor: "#8efe1c",
                  color: "#000",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NftCard;
