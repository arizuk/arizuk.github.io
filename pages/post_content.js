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

const getInitialProps = async ({ req }) => {
  const post = await getPostContent('first.md');
  return {post};
};

Page.getInitialProps = getInitialProps;
export default Page;