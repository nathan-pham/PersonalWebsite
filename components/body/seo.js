import Head from "next/head";

let fallback = {
  description:
    "Hello! I'm Nathan Pham. Passionate about technology, healthcare, and agriculture.",
  title: "Home"
};

const Seo = (props) => {
  let description = props.description
    ? props.description
    : fallback.description;
  let title = "Nathan Pham | " + (props.title ? props.title : fallback.title);
  return (
    <Head>
      <meta charSet="utf-8" />

      <meta name="author" content="Nathan Pham" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Nathan, Pham, technology, programming, doctor, healthcare, chickens, agriculture, FFA"
      />
      <meta property="og:author" content="Nathan Pham" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/icons/apple-icon.png" />
      <meta property="og:title" content={title} />
      <title>{title}</title>

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/icons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/icons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/icons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/icons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/icons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/icons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/icons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/icons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/icons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/icons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#F5CB5C" />
      <meta
        name="msapplication-TileImage"
        content="/icons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#F5CB5C" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="HandheldFriendly" content="true" />

      <link
        href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Seo;
