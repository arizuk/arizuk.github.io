import Link from 'next/link'
import { withRouter } from 'next/router'
import MarkdownIt from 'markdown-it'
import fm from 'front-matter'
import moment from 'moment'

import Layout from '../components/layout';
import {getPostContent} from '../utils/index'

const md = MarkdownIt();
const Page = ({title, date, html, router}) => {
  return (
    <div>
      <Layout>
        <article>
          <div className="center">
            <h1>{title}</h1>
            <time className="code">{moment(date).format('MMMM DD, Y')}</time>
          </div>
          <div className="divider"></div>
          <div dangerouslySetInnerHTML={{__html: html}} />
        </article>
        <div className="page-navigation code">
          <Link href="/posts"><a title="back to index">Index</a></Link>
        </div>
      </Layout>
    </div>
  )
}

const getInitialProps = async ({ query }) => {
  const fname = `${query.id}.md`;
  const post = await getPostContent(fname);
  const meta = fm(post);
  return {
    title: meta.attributes.title,
    date: fname.split("_")[0],
    html: md.render(meta.body),
  };
};

Page.getInitialProps = getInitialProps;
export default withRouter(Page);