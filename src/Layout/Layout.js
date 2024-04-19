import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "70vh" }}> {props.children} </main>
      <Footer />
    </div>
  );
};

export default Layout;
