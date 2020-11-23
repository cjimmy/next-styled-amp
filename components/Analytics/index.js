import React from 'react';
import Head from 'next/head';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import { GA_TRACKING_ID } from './helpers';

/**
 * Part of the analytics logging (for non-AMP) is in an effect in pages/_app.js
 * */

const Analytics = React.memo(() => {
  const isAmp = useAmp();
  const isProd = process.env.NODE_ENV === 'production'; // eslint-disable-line
  if (!isProd) return null;
  return isAmp ? <AmpHead /> : <GoogAnalyticsHead />;
});

//-- must be placed in body
const AmpHead = React.memo(() => {
  const router = useRouter();
  const body = {
    vars: {
      account: GA_TRACKING_ID,
    },
    triggers: {
      'default pageview': {
        on: 'visible',
        request: 'pageview',
        vars: {
          canonicalPath: router.asPath,
        },
      },
    },
  };
  return (
    <amp-analytics type="googleanalytics">
      <script
        type="application/json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(body) }}
      ></script>
    </amp-analytics>
  );
});

const GoogAnalyticsHead = React.memo(() => (
  <Head>
    <script
      key="google-tag-manager"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
        `,
      }}
    />
  </Head>
));

export default Analytics;
