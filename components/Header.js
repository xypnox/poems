import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link href="/">
            <a className="site-title">Poems</a>
          </Link>
          <div className="links">
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
