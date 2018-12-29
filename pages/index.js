import '../styles/main.scss'
import Layout from '../components/layout';
import PostList from '../components/post_list';
import {getPostLists} from '../utils/index';

const Page = (props) => {
  return (
    <Layout>
      <article>
        <h1 className="title">Masaki Arizuka</h1>
        <div className="hr"></div>
        <div className="links">
          <h2>Links</h2>
          <ul>
            <li>
              <a href="https://github.com/arizuk" target="_blank">Github</a>
            </li>
            <li>
              <a href="https://atcoder.jp/users/arzk" target="_blank">AtCoder</a>
            </li>
            <li>
              <a href="https://www.kaggle.com/arizuk" target="_blank">Kaggle</a>
            </li>
          </ul>
        </div>
        <div className="hr"></div>
      </article>
      <section>
        <PostList posts={props.posts}></PostList>
      </section>
    </Layout>
  )
}

const getInitialProps = async ({ req }) => {
  const posts = await getPostLists();
  return {posts};
};

Page.getInitialProps = getInitialProps;
export default Page;