import { useEffect } from 'react';
import Router from 'next/router';
import GlobalStyles from '../styles/other-globals';
import { pageview } from '../components/Analytics/helpers';
import Fonts from '../components/Fonts';
import Analytics from '../components/Analytics';

function MyApp({ Component, pageProps }) {
  /**
   * Logs Google Analytics page view.
   * You can remove this entire effect if you're not using GA
   */
  useEffect(() => {
    const isProd = process.env.NODE_ENV === 'production'; // eslint-disable-line
    const handleRouteChange = (url) => {
      if (isProd) {
        pageview(url);
      }
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Fonts />
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
