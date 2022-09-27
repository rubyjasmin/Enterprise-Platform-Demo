import "raf/polyfill";

import React from "react";
import { NextSeo } from "next-seo";
import { ThemeProvider } from "@org/design-system";

import type { NextSeoProps } from "next-seo";
import type { SolitoAppProps } from "solito";

type PageProps = {
  seo: NextSeoProps;
};

function MyApp({ Component, pageProps }: SolitoAppProps<PageProps>) {
  return (
    <>
      {pageProps.seo && (
        <NextSeo
          defaultTitle="Expo + Next.js Example App"
          description="Enterprise-grade example of Expo and Next.js Application"
          additionalLinkTags={[{ rel: "icon", href: "/favicon.ico" }]}
          {...pageProps.seo}
        />
      )}
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
