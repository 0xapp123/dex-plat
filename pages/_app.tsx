import React, { useState } from "react";
import "@/styles/globals.css";
import "@/styles/drawer.css";
import "@/styles/faq.css";
import "@/styles/pagination.css";
import type { AppProps } from "next/app";
import Layout from "@/layout/Layout";
import { ThemeProvider } from "next-themes";
// ==> slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ThemeProvider defaultTheme="dark-theme">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}
