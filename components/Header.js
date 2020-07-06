import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='header'>
        <nav className='nav'>
          <h1 className='site-title'>Poems</h1>
          <div className='links'>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
