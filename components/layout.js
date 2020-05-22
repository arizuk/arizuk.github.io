import Head from 'next/head';
import Header from './header'
import Footer from './footer'

const GA_TRACKING_ID = "UA-131422067-1"

export default (props) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <title>{props.title || 'arizuk.github.io'}</title>
      <meta name="description" content="arizuk.github.io" />
      <meta name="author" content="Masaki Arizuka" />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)};
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </Head>
    <Header />
    <div id="content">
      {props.children}
    </div>
    <Footer />
  </div>
)