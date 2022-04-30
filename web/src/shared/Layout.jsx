import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main style={{ overflow: 'hidden', boxSizing: 'border-box' }} className="pt-5">
        {props.children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
