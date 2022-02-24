import React from "react";
import { animated, useTransition } from "react-spring";
import { HEADER_LINKS } from "../constants/data/header";
import Link from "next/link";
const renderLink = (link, idx) => {
  if (link.href) {
    return (
      <a
        key={idx}
        href={link.to}
        target={link.target ? link.target : "_parent"}
      >
        <li className="fw-bold text-black">{link.title}</li>
      </a>
    );
  }
  if (link.to) {
    return (
      <Link key={idx} href={link.to}>
        <a>
          <li className="fw-bold text-black">{link.title}</li>
        </a>
      </Link>
    );
  }
};

const MobileHeader = ({ mobile }) => {
  const transition = useTransition(mobile, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return transition(
    (style, render) =>
      render && (
        <animated.div style={style} className={"mobile-header-modal"}>
          <div
            className="mobile-header p-5 bg-white w-100 mw-mobile-100 mx-5"
            style={{ maxWidth: 500, borderRadius: 12, backgroundColor: "#101010 !important;" }}
          >
            <h1 className="display-6 text-font-glock text-center">
              Danerob NFT's
            </h1>

            <ul className="d-flex align-items-center justify-content-between flex-direction-column">
              {HEADER_LINKS.map((item, idx) => renderLink(item, idx))}
              <a href="/game-demo">
                <li className="fw-bold text-black">Game Demo</li>
              </a>
            </ul>
          </div>
        </animated.div>
      )
  );
};

export default MobileHeader;
