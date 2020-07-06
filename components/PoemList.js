import Link from 'next/link';

export default function PoemList({ poems }) {
  if (poems === 'undefined') return null;

  return (
    <div>
      {!poems && <div>No poems!</div>}
      <ul className='poem-list'>
        {poems &&
          poems.map((poem) => {
            return (
              <li key={poem.slug}>
                <Link href={{ pathname: `/poem/${poem.slug}` }}>
                  <a>{poem.frontmatter.title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
