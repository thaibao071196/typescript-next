import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import AboutPage from '../containers/AboutPage';

const about: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>AboutPage</title>
      </Head>
      <AboutPage />
    </Fragment>
  );
};

export const getInitialProps = () => ({ props: {} });
export default about;
