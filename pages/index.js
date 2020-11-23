import Head from 'next/head';
import styled from 'styled-components';
import { useAmp } from 'next/amp';

const Home = (props) => {
  const isAmp = useAmp();

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <Description>
          Get started by editing <Code>pages/index.js</Code>
        </Description>

        <Grid>
          <Card href="https://nextjs.org/docs">
            <CardTitle>Documentation &rarr;</CardTitle>
            <CardText>Find in-depth information about Next.js features and API.</CardText>
          </Card>

          <Card href="https://nextjs.org/learn">
            <CardTitle>Learn &rarr;</CardTitle>
            <CardText>Learn about Next.js in an interactive course with quizzes!</CardText>
          </Card>

          <Card href="https://github.com/vercel/next.js/tree/master/examples">
            <CardTitle>Examples &rarr;</CardTitle>
            <CardText>Discover and deploy boilerplate example Next.js projects.</CardText>
          </Card>

          <Card href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <CardTitle>Deploy &rarr;</CardTitle>
            <CardText>Instantly deploy your Next.js site to a public URL with Vercel.</CardText>
          </Card>
        </Grid>
      </Main>

      <Footer>
        <FooterLink
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        </FooterLink>
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

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLogo = styled.img`
  margin-left: 0.5rem;
  height: 1em;
`;

const FooterLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
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

const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
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
