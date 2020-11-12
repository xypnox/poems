import Link from 'next/link';
import moment from 'moment';

export default function PoemList({ poems }) {
  if (poems === 'undefined') return null;

  poems.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    } else {
      return -1;
    }
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
