import Head from 'next/head'
import styled from 'styled-components';
import EmailSignup from '../components/EmailSignup';
import Header from '../components/Header';

const Main = styled.main`
  min-height: 100vh;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.action {
    padding: 0 0 8rem 0;
    h2 {
      font-size: 2.5rem;
      color: #222;
      letter-spacing: -1.5px;
      line-height: 1;
      text-align: center;
      margin-bottom: 4rem;
    }
  }

  &.about,
  &.why {
    padding: 6rem 0 6rem;
    
    h2 {
      text-align: center;

      &:first-of-type {
        margin-top: 0;
        margin-bottom: 2rem;
      }
    }
  }

  &.about {
    background-color: #fff;

    h2 {

    }
  }

  &.why {
    background-color: #f5f4f0;
  }
`;

const Container = styled.div`
  max-width: 600px;
  padding: 0 1rem;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 900px;
`;

const Cell = styled.div`
  flex-basis: 50%;
  padding: 0 1rem;

  &.centred {
    text-align: center;
  }
`;

const Headline = styled.h1`
  font-size: 3.5rem;
  line-height: 1;
  letter-spacing: -2px;
  margin: 8rem 0 8rem 0;
  font-weight: 500;
  text-align: center;
`;

const Small = styled.p`
  font-size: .75rem;
  color: #555;
  line-height: 1.2;
  margin: 1rem 0 0;
  text-align: left;
`;

const Portrait = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: .5rem;
`;

const Bio = styled.p`
  font-size: .8rem;
`;

const Tree = styled.img`
  width: 48px;
  margin: 4rem auto 2rem;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Voice of Reason</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />
        <Section className="hero">
          <Container>
            <Headline>“Change is the only constant.”</Headline>
          </Container>
        </Section>
        <Section className="content">
          <Container>
            <p>“Pivot or die.”</p>
            <p>“Change is the only constant.”</p>
            <p>These phrases aren’t part of everyday conversation, but we all know them. You most likely heard them when you found yourself in the middle of an abrupt and dramatic transition.</p>
            <p>Businesses continually adapt to survive, it’s always been this way. Startups treat change the same way they do many general business principles: intensely. The changes are bigger. They happen more often. They’re fast.</p>
            <p>The strategy that was presented last month? The big project you’ve fully invested into for weeks? Forget it. That’s yesterday’s news, we’re doing this now.</p>
            <p>Founders know to their core that this is how it’s done. The point has been driven home by investors, mentors, coaches, other founders.</p>
            <p>But no one thought to tell the team. Teams are expected to take every change, delivered onto them from above, in stride. They have to drop everything, with little to no context, no plan, no idea what’s to come.</p>
            <h2>Change is in itself unstable.</h2>
            <p>Even good change, even desired change, will create a moment of imbalance. It will always drain energy. It drains more energy if it isn’t clear why it’s happening, if it’s happening faster and faster, if we don’t know what’s coming next.</p>
            <h2>Change can hurt people.</h2>
            <p>It leads to burnout: at an individual level and with the organization. People lose trust in leadership. The more often it happens, leadership looks desperate, like they can’t make up their minds. People become apathetic with the vision. There’s no reason to get attached to an idea because it’ll change soon. People move on, either engaging with the company or from their position in organization altogether.</p>
            <h2>Change needs a voice of reason.</h2>
            <p>This is a resource for individuals to get the information their founders have had for years. What does “normal” change look like? What can I do to understand the changes in my organization? What can I do to move forward?</p>
            <p>It’s a work in progress right now. The resources are still being put together, sign up below to be notified when we post them.</p>
            <center><Tree src="/tree.png" /></center>
          </Container>
        </Section>
        <Section className="action">
          <Container>
            <h2>What can you do right now?</h2>
          </Container>
          <Grid>
            <Cell className="centred">
              <h3>Share a story</h3>
              <p>We want to hear about your experiences  with change in your organization. Share a story with us, good or bad, we’ll be in touch.</p>
              <a href="mailto:hey@voiceofreason.tech">hey@voiceofreason.tech</a>
            </Cell>
            <Cell className="centred">
              <h3>Sign up for occasional emails</h3>
              <p>We’re creating resources for understanding and having productive conversations around change.</p>
              <EmailSignup />
              <Small>We will never share this with anyone and won’t use it to sell anything to you.</Small>
            </Cell>
          </Grid>
        </Section>
        <Section className="why">
          <Container>
            <h2>Why are we making this?</h2>
            <p>Voice of Reason was an idea that came after dealing with yet another big, unexpected change. After 10 years in tech, I’m tired of how change is communicated in start-ups. </p>
            <p>I’ve seen the impact of poorly communicated change on the people around me, when it comes over and over. I see how it wears my teammates down. They lose their passion. Their drive, that inspired me to join them, is gone.</p>
            <p>I care deeply about the people on my team.</p>
            <p>I created Voice of Reason together with Quinn Keast (<a href="https://twitter.com/quinnkeast" target="_blank">@quinnkeast</a>), to give my team and others the resources they need when change comes. They should know why change happens when their leadership doesn’t tell them. They should know how to ask for what they need. They should know when change is normal and when it is unhealthy.</p>
            <p>I made this because I care.</p>
            <p>—Jen Goertzen (<a href="https://twitter.com/jengoertzen" target="_blank">@jengoertzen</a>)</p>
          </Container>
        </Section>
      </Main>

      <footer></footer>

      <style jsx global>{`
        @font-face {
          font-family: "CalibreWeb";
          font-style: normal;
          font-weight: 400;
          src: url('/fonts/CalibreWeb-Regular.eot') format("eot"),
            url('/fonts/CalibreWeb-Regular.woff') format("woff"),
            url('/fonts/CalibreWeb-Regular.woff2') format("woff2");
        }

        @font-face {
          font-family: "CalibreWeb";
          font-style: normal;
          font-weight: 500;
          src: url('/fonts/CalibreWeb-Semibold.eot') format("eot"),
            url('/fonts/CalibreWeb-Semibold.woff') format("woff"),
            url('/fonts/CalibreWeb-Semibold.woff2') format("woff2");
        }

        html {
          font-size: 22px;
          background-color: #fff;
          color: #222;
          font-family: CalibreWeb, Helvetica, sans-serif;
        }

        p {
          line-height: 1.4;
          font-size: 1rem;
          margin: 0 0 1rem 0;
        }

        strong {
          font-weight: 500;
        }

        h1 {
          font-weight: 500;
        }

        h2 {
          font-size: 1.25rem;
          font-weight: 500;
          color: #222;
          margin: 2.5rem 0 .5rem 0;
        }

        h3 {
          font-weight: 500;
          margin: 0 0 0.5rem 0;
        }

        a {
          color: blue;
        }

        a:visited {
          color: blue;
        }
      `}</style>
    </div>
  )
}
