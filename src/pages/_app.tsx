import "@/styles/globals.css";
import type { AppProps } from "next/app";

import PageLayout from "@/client/components/page-layout";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "@/client/react-query/query-client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout>
        <Component {...pageProps} />{" "}
      </PageLayout>

      <Hydrate state={pageProps.dehydratedState} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
