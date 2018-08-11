import Link from 'next/link'
import { withRouter } from 'next/router'
import MarkdownIt from 'markdown-it'

import Layout from '../components/layout';
import {getPostContent} from '../utils/index'

const md = MarkdownIt();
const Page = ({post, router}) => {
  return (
    <div>
      <Layout>
        <article>
          <div className="center">
            <h1>{router.query.id}</h1>
            <time className="code">Aug 8</time>
          </div>
          <div className="divider"></div>
          <div dangerouslySetInnerHTML={{__html: md.render(post)}} />
        </article>
        <div className="page-navigation code">
          <Link href="/"><a title="back to index">Index</a></Link>
        </div>
      </Layout>
    </div>
  )
}

const getInitialProps = async ({ query }) => {
  const fname = `${query.id}.md`;
  const post = await getPostContent(fname);
  return {post};
};

Page.getInitialProps = getInitialProps;
export default withRouter(Page);