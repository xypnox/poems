import Link from 'next/link';
import moment from 'moment';

export default function PoemList({ poems }) {
  if (poems === 'undefined') return null;
  poems.sort((a, b) => {
    return moment(b.frontmatter.date).isAfter(a.frontmatter.date);
  });

  return (
    <div>
      {!poems && <div>No poems!</div>}
      <ul className='poem-list'>
        {poems &&
          poems.map((poem) => {
            return (
              <li key={poem.slug}>
                <Link href={{ pathname: `/poem/${poem.slug}` }}>
                  <a>
                    <div className='link-text'>{poem.frontmatter.title}</div>
                    <div className='date'>
                      {moment(poem.frontmatter.date).format('D MMMM, y')}
                    </div>
                  </a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
