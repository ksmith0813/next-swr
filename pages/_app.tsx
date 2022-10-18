import { FC } from 'react';
import type { AppProps } from 'next/app';
import { Layout } from 'components/common/display/layout/layout';

import { SWRConfig } from 'swr';
import { request } from 'graphql-request';
import 'styles/global.css';

export const gqlFetcher = (query: string, variables: object) => {
  const url = process.env.NODE_ENV !== 'development' ? '/graphql' : 'http://localhost:3001/graphql';
  return request(url, query, variables);
};

const NextSwr: FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => (
  <SWRConfig
    value={{
      revalidateOnFocus: false,
      fetcher: gqlFetcher,
    }}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SWRConfig>
);

export default NextSwr;
