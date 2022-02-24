import React from "react";
import "../assets/styles/app.scss";
const App = ({ Component, ...pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
