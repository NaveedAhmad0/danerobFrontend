import React, { useState } from "react";
import Link from "next/link";
import { CloseIcon, MenuIcon } from "./icons";
import MobileHeader from "./MobileHeader";
import { HEADER_LINKS } from "../constants/data/header";

const renderLink = (link, idx) => {
  if (link.href) {
    <a href={link.to} target={link.target ? link.target : "_parent"}>
      {link.title}
    </a>;
  }
  if (link.to) {
    <Link href={link.to}>
      <a>{link.title}</a>
    </Link>;
  }
};

const Header = ({ scrollHeader, headerRightColorDark }) => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <div
        className={`header ${headerRightColorDark ? "header-dark" : ""} ${
          scrollHeader ? "bg-white scrollable-header" : ""
        }`}
      >
        <div className="header-row">
          <div className="logo mt-2">
            <Link href="/">
              <a>
                <img
                  style={{ width: 250 }}
                  src={
                    scrollHeader
                      ? "images/website-logo-black.png"
                      : "images/logo.png"
                  }
                  alt=""
                />
              </a>
            </Link>
          </div>
          <ul className="links">
            <Link href="/">
              <a>
                <li className="link">Home</li>
              </a>
            </Link>
            <Link href="/marketplace">
              <a>
                <li className="link">Marketplace</li>
              </a>
            </Link>

            <Link href="/seed-claim">
            <a>
              <li className="link">Claim</li>
            </a>
            </Link>

            {HEADER_LINKS.map((headerLink, idx) => renderLink(headerLink, idx))}
            <Link href="/game-demo">

            <a >
              <li className="link">Game Demo</li>
            </a>
            </Link>
          </ul>
          {mobile ? (
            <CloseIcon
              onClick={() => setMobile(!mobile)}
              className="cursor-pointer mobile-icon"
              style={{
                width: 30,
                height: 30,
                color: scrollHeader ? "#000" : "#fff",
              }}
            />
          ) : (
            <MenuIcon
              className="cursor-pointer mobile-icon"
              onClick={() => setMobile(!mobile)}
              style={{
                width: 30,
                height: 30,
                color: scrollHeader ? "#000" : "#fff",
              }}
            />
          )}
        </div>
      </div>
      <MobileHeader mobile={mobile} />
    </>
  );
};

export default Header;
