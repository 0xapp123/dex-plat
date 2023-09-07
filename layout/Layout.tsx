import React, { ReactNode } from "react";
import Header from "./Header";
import Header2 from "./Header2";
import Footer from "./Footer";
import { useRouter } from "next/router";

interface props {
  children: ReactNode;
}

const Layout = ({ children }: props) => {
  const Router = useRouter();

  return (
    <React.Fragment>
      {Router.pathname === "/tokenomics" ||
      Router.pathname === "/markets" ||
      Router.pathname === "/dex" ? (
        <Header2 />
      ) : (
        <Header />
      )}
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
