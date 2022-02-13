import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rick and Morty Api App</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <NavBar />

      {/* Content */}
      <main>
        <div>{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default BasicLayout;
