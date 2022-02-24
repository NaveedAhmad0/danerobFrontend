import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
const Layout = ({ children, headerRightColorDark = false, ...otherProps }) => {
  const [scrollHeader, setScrollHeader] = useState(false);

  const handleScroll = (e) => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{otherProps.title}</title>
      </Head>
      <div className="layout">
        <Header
          headerRightColorDark={headerRightColorDark}
          scrollHeader={scrollHeader}
        />
        <div {...otherProps}>{children}</div>
        {!otherProps.withoutfooter ? <Footer /> : null}
      </div>
    </>
  );
};

export default Layout;
