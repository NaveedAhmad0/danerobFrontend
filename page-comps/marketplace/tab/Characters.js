import React from "react";
import NftCard from "../../../components/NftCard";

const Characters = () => {
  return (
    <div className="row">
      <div className="marketplace-column col-xl-3 col-lg-6 col-md-6 col-xs-12 col-sm-12">
        <NftCard />
      </div>
      <div className="marketplace-column col-xl-3 col-lg-6 col-md-6 col-xs-12 col-sm-12">
        <NftCard />
      </div>
    </div>
  );
};

export default Characters;
