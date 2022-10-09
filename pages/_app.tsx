import { FC, useEffect } from 'react';
import TagManager from 'react-gtm-module';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Layout } from 'components/__common__/layout/layout';
import 'styles/global.css';
import { SWRConfig } from 'swr';
import { request } from 'graphql-request';

export const gqlFetcher = (query: string, variables: object) => {
  const url = process.env.NODE_ENV !== 'development' ? '/graphql' : 'http://localhost:3001/graphql';
  return request(url, query, variables);
};

const NextSwr: FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  useEffect(() => {
    TagManager.initialize({
      gtmId: process.env.NEXT_PUBLIC_GTM_CODE as string,
    });
  }, []);
  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          fetcher: gqlFetcher,
        }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </SessionProvider>
  );
};
export default NextSwr;
