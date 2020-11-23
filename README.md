# Next.js + AMP + Styled Components

[Next.js](https://nextjs.org/) supports Google AMP generation out of the box. In practice, I found AMP to be very fragile when using third-party packages. This repo is an example project of a Next.js project with [Styled Components](https://styled-components.com/) styling, focusing on making the associated AMP page the same as the standard page with minimal impact to the dev experience.

It also, mainly to show as an examples, how to add AMP-compatible Google Analytics and custom fonts.

## See the demo

Demo page: [next-styled-amp.vercel.app/](https://next-styled-amp.vercel.app/)

Or see it locally:
```bash
yarn dev
```
And then open [http://localhost:3000](http://localhost:3000) with your browser.

### See it in AMP
To see the associated AMP page, append a `?amp=1` to the end of URL if you're running it locally, or a `.amp` (e.g `www.example.com/index.amp`) to see it in production.

## Features

### Styled Components
Of the many ways to write css-in-js, Styled Components provides a flexible way to write css naturally without cluttering your JSX. It also works with AMP, unlike the very similar styling option `@emotion/styled`.

Getting `styled-components` to work with Next required overriding `pages/_document.js` + adding a babel plugin.

### Global css import
Enabling Styled Components in Next causes us to override the style injection (by customizing `pages/_document.js`). As a result, loading raw css files like this no longer works.
```js
// this won't work after overriding _document.js
import ../myStyles.css
```
Even though Styled Components provides a means to add in global styles (see `styles/other-globals.js`), a standard css file, globally imported, is sometimes useful or necessary.

`styles/globals.css` can be edited. It is minified (on build only) to `styles/globals.min.css`. That file is hard-coded to import and be injected into `pages/_document.js`. `package.json`'s commands were also modified. (The hardcoded part makes me cringe too, but for sake of example, it works).

### Google Analytics
Included is a AMP-compatible module for Google Analytics. It loads either the standard script or AMP's `<amp-analytics>` tag and logs pageviews in `_app.js`. Google Analytics is commonly used, but I mainly include it to show how to create a standard + AMP way of adding a component.

It's easy to rip out if you don't need it. Simply delete `components/Analytics/` and the `useEffect` in `pages/_app.js`.

### Custom fonts
Adding a custom font also requires AMP-specific specialness. You can find the code in `components/Fonts`. I load the font `Inter` using either @zachleat's [Critical FOFT recipe](https://github.com/zachleat/web-font-loading-recipes) or AMP's `<amp-font>` tag.

To remove this, delete `components/Fonts/` and the associated code in `pages/_app.js`.

---

## Code
In `pages/index.js`, this is the config that tells Next you want to also export it as AMP.
```js
export const config = {
  amp: 'hybrid',
};
```
