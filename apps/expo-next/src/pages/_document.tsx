import React from "react";
import { getInitialProps } from "@expo/next-adapter/document";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link rel="preload" href="/fonts/MaterialCommunityIcons.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Poppins.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/PoppinsBold.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/PoppinsBolder.ttf" as="font" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = getInitialProps;
