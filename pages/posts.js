import Layout from '../components/layout';
import PostList from '../components/post_list';
import Link from 'next/link';
import {getPostLists} from '../utils/index';
import moment from 'moment';

const Page = (props) => {
  return (
    <div>
      <Layout>
        <PostList posts={props.posts}></PostList>
      </Layout>
    </div>
  )
}

const getInitialProps = async ({ req }) => {
  const posts = await getPostLists();
  return {posts};
};

Page.getInitialProps = getInitialProps;
export default Page;