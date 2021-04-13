import Layout from "../components/Layout";
import PoemList from "../components/PoemList";
import matter from "gray-matter";

const Index = ({ poems, ...props }) => {
  return (
    <Layout>
      <div className="home">
        <h1 className="title">Poems</h1>
        <h2 className="by-line">
          By{" "}
          <a
            href="https://www.xypnox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underlined-link"
          >
            xypnox
          </a>
        </h2>
        <p className="description">
          The best poems are the ones <br />
          we write for ourselves
        </p>
        <main>
          <PoemList poems={poems} />
        </main>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const poems = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../poems", true, /\.md$/));

  return {
    props: {
      poems,
    },
  };
}
