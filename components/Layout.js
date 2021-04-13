import Head from "next/head";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="page">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          {props.pageTitle ? props.pageTitle + " | " : ""}Poems, by xypnox
        </title>

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />

        <meta
          name="title"
          content={`${
            props.pageTitle ? props.pageTitle + " | " : ""
          }Poems, by xypnox`}
        />
        <meta
          property="og:title"
          content={`${
            props.pageTitle ? props.pageTitle + " | " : ""
          }Poems, by xypnox`}
        />
        <meta
          property="twitter:title"
          content={`${
            props.pageTitle ? props.pageTitle + " | " : ""
          }Poems, by xypnox`}
        />

        <meta
          name="description"
          content="A collection of poems and poetic pieces"
        />
        <meta
          property="og:description"
          content="A collection of poems and poetic pieces"
        />
        <meta
          property="twitter:description"
          content="A collection of poems and poetic pieces"
        />

        <meta
          property="og:image"
          content="https://poems.xypnox.com/social.png"
        />
        <meta
          property="twitter:image"
          content="https://poems.xypnox.com/social.png"
        />
      </Head>
      <Header />
      <section className="layout">
        <div className="content">{props.children}</div>
      </section>
      <footer>
        ©{new Date().getFullYear()} - Poems, by{" "}
        <a
          href="https://www.xypnox.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underlined-link"
        >
          xypnox
        </a>
      </footer>
    </div>
  );
}
