import Layout from '../components/Layout';

const About = () => {
  return (
    <div className='about'>
      <Layout pageTitle='About'>
        <h1 className='title'>About these poems</h1>

        <p>
          I have written these poems whenever I got time here and there. I am no
          professional writer and consider poems as a way to get my emotions on
          paper.
        </p>

        <p>
          The main blog aka. blag is at{' '}
          <a href='https://www.xypnox.com/blag/'>xypnox.com/blag</a>. I have
          replicated some of the poems published on the blog here. I plan to
          publish future poems here to keep the blog clean and specific to
          prose.
        </p>

        <p>
          Some of these poems are based on events in my life while some are pure
          figments of imagination.
        </p>

        <p>
          The dates attached with the poems are the last dates I could find that
          relate to the poem, they might have been written before that date.
        </p>
      </Layout>
    </div>
  );
};

export default About;
