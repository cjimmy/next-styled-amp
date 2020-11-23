import Head from 'next/head';
import styled from 'styled-components';
import { useAmp } from 'next/amp';
import Link from 'next/link';

const Home = () => {
  const isAmp = useAmp();
  const switchLink = isAmp ? '/' : process.env.NODE_ENV === 'production' ? '/index.amp' : `/?amp=1`;

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          <a href="https://nextjs.org">Next.js</a> + Styled Components
        </Title>
        <Description>
          A starter project for those looking to use AMP in their Next.js project
        </Description>
        <Link href={switchLink}>
          <a>Switch to {isAmp ? 'non-AMP' : 'AMP'} version of this site &rarr;</a>
        </Link>

        <FeaturesBox>
          <FeaturesTitle>Features</FeaturesTitle>
          <ul>
            <li>Styled components</li>
            <li>AMP-compatible Google Analytics</li>
            <li>AMP-comptabile custom font loading</li>
            <li>Global css imports</li>
          </ul>
        </FeaturesBox>

        <Grid>
          <Card href="https://github.com/cjimmy/next-styled-amp">
            <CardTitle>Github repo &rarr;</CardTitle>
            <CardText>The code for this website. Explanation in the README</CardText>
          </Card>

          <Card href="https://github.com/vercel/next.js/tree/master/examples">
            <CardTitle>Other Next.js Examples &rarr;</CardTitle>
            <CardText>This project is a mashup of AMP + Styled Components</CardText>
          </Card>
        </Grid>
      </Main>

      <Footer>
        <div>
          <VercelLogo>
            Powered by{' '}
            {!isAmp ? (
              <FooterLogo src="/vercel.svg" alt="Vercel Logo" />
            ) : (
              <amp-img
                alt="Vercel logo"
                src="/vercel.svg"
                width="80"
                height="16"
                layout="fixed"
              ></amp-img>
            )}
          </VercelLogo>
        </div>
        <div>Modfied by Jimmy Chion</div>
      </Footer>
    </Container>
  );
};

export default Home;

//-- Tells next.js that you want to export an AMP version of this page
export const config = {
  amp: 'hybrid',
};

//-- styled-component styles
const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FeaturesTitle = styled.h3`
  text-align: center;
`;

const FeaturesBox = styled.div`
  margin-top: 20px;
  padding: 10px 40px;
  border-radius: 8px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.22);
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterLogo = styled.img`
  margin-left: 0.5rem;
  height: 1em;
`;

const VercelLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  color: #0070f3;
  text-decoration: none;
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
`;

const Card = styled.a`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const CardText = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`;
