import Head from 'next/head';
import Header from './Header';

export default function Layout(props) {
  return (
    <div className='page'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title> {props.pagetitle || ''} Poems, by xypnox</title>
      </Head>
      <Header />
      <section className='layout'>
        <div className='content'>{props.children}</div>
      </section>
      <footer>©{new Date().getFullYear()} Poems - by xypnox</footer>
    </div>
  );
}
