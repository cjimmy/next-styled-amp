import Head from 'next/head';
import { useAmp } from 'next/amp';

const AmpFontInter = () => (
  <amp-font
    layout="nodisplay"
    font-family="Inter"
    timeout="2000"
    on-error-remove-class=""
    on-error-add-class=""
    on-load-remove-class="fonts-loading"
    on-load-add-class="fonts-loaded"
  ></amp-font>
);

//-- thank you @zachleat https://github.com/zachleat/web-font-loading-recipes
const fontload = `
  (function(){
    if("fonts" in document){
      if(sessionStorage.fontsLoaded) {
        document.documentElement.className+="fonts-loaded";
        return;
      }
      document.fonts.load("1em InterPre").then(function() {
        document.documentElement.className+=" fonts-loading";
        Promise.all([
          document.fonts.load("500 1em Inter")
        ]).then(function(){
          document.documentElement.className+=" fonts-loaded";
          sessionStorage.fontsLoaded=true;
        });
      });
    }
  })();
`;
const NonAmpFonts = () => (
  <Head>
    <script type="text/javascript" dangerouslySetInnerHTML={{ __html: fontload }}></script>
  </Head>
);

const Fonts = () => {
  return useAmp() ? (
    <>
      <AmpFontInter />
      {/* You can add more fonts */}
    </>
  ) : (
    <NonAmpFonts />
  );
};

export default Fonts;
