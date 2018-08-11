import Layout from '../components/layout';
import Link from 'next/link'
import {getPostLists} from '../utils/index'


const Page = (props) => (
  <div>
    <Layout>
      <h1>Posts</h1>
      <ul>
          {props.posts.map(post => (
            <li key={post.href}>
              <Link href={"/posts/" + post.href}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  </div>
)

const getInitialProps = async ({ req }) => {
  const posts = await getPostLists();
  return {posts};
};

Page.getInitialProps = getInitialProps;
export default Page;