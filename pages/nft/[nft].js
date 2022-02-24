import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { ITEMS } from "../../constants/data/nfts";
const Nft = () => {
  const router = useRouter();
  console.log(router.query);
  const [metadata, setMetadata] = useState(null);

  const query = router.query.nft;

  useEffect(() => {
    if (query) {
      const finded = ITEMS.find(
        (e) => e.id.toLowerCase() === query.toLowerCase()
      );
      console.log(finded, "finded");
      if (finded) {
        setMetadata(finded);
      } else {
        setMetadata(null);
      }
    }
  }, [query]);
  return (
    <Layout className="nft">
      <Section className="section-padding mt-4">
        {metadata ? (
          <div className="row">
            <div className="col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={metadata && metadata.photoLink}
                  width={700}
                  height={400}
                  alt=""
                  style={{ borderRadius: 12 }}
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-12 col-xs-12 col-sm-12">
              <div
                className="py-5 d-flex align-items-center justify-content-center gap flex-direction-column mw-mobile-100"
                style={{
                  maxWidth: 768,
                  margin: "auto",
                }}
              >
                <h1 className="display-5 text-white">{}</h1>
                <h1
                  className="display-7 text-white"
                  style={{ fontWeight: "inherit" }}
                >
                  {" "}
                  {metadata && metadata.itemName}
                </h1>
                <p
                  className="text-p text-center text-white"
                  style={{ fontWeight: 500 }}
                >
                  {metadata && metadata.itemDesc}
                </p>
                <button
                  className="dark clip-none"
                  style={{
                    backgroundImage: "url('images/1-purple.png')",
                  }}
                >
                  Mint Now (Soon)
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="d-flex align-items-center justify-content-center text-white text-center h-mobile-100"
            style={{
              height: "60vh",
            }}
          >
            <h1 className="display-3">NFT Not Found</h1>
          </div>
        )}
      </Section>
    </Layout>
  );
};

export default Nft;
