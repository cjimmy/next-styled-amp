/* REPLACE WITH YOUR OWN GA TRACKING ID */
export const GA_TRACKING_ID = 'UA-000000000-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
