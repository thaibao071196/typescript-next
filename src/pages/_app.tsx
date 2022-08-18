import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';
import { storeWrapper } from '../configs/redux/store';
import '../styles/index.scss';
import { Fragment } from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <Fragment>
      {/* <GlobalStyle /> */}
      <Component {...pageProps} />
    </Fragment>,
  );
}

export default storeWrapper.withRedux(MyApp);
