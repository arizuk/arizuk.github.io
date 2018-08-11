import Layout from '../components/layout';
import Link from 'next/link'
import {getPostContent} from '../utils/index'


const Page = (props) => (
  <div>
    <Layout>
      <h1>Post</h1>
      <pre>
        {props.post}
      </pre>
    </Layout>
  </div>
)

const getInitialProps = async ({ query }) => {
  const fname = `${query.id}.md`;
  const post = await getPostContent(fname);
  return {post};
};

Page.getInitialProps = getInitialProps;
export default Page;