import "raf/polyfill";

import React from "react";
import { request } from "graphql-request";
import { NextSeo } from "next-seo";
import { SWRConfig } from "swr";
import { ThemeProvider } from "@org/design-system";

import env from "~constants";

import type { NextSeoProps } from "next-seo";
import type { SolitoAppProps } from "solito";

type PageProps = {
  seo: NextSeoProps;
};

const fetcher = (query: string) => request(env.cmsURL, query);
const onError = (err: any) => console.error(err);

function MyApp({ Component, pageProps }: SolitoAppProps<PageProps>) {
  return (
    <ThemeProvider>
      {pageProps.seo && (
        <NextSeo
          defaultTitle="Expo + Next.js Example App"
          description="Enterprise-grade example of Expo and Next.js Application"
          additionalLinkTags={[{ rel: "icon", href: "/favicon.ico" }]}
          {...pageProps.seo}
        />
      )}
      <SWRConfig value={{ fetcher, onError }}>
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
}

export default MyApp;
