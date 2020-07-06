import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/Layout';

export default function Poem({ frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={`${frontmatter.title}`}>
      <article className='poem'>
        <h1 className='title'>{frontmatter.title}</h1>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { poem } = ctx.params;

  const content = await import(`../../poems/${poem}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);

      return slug;
    });
    return data;
  })(require.context('../../poems', true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/poem/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
