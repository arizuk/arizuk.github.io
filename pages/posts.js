import Layout from '../components/layout';
import Link from 'next/link'
import {getPostLists} from '../utils/index'

const Page = (props) => (
  <div>
    <Layout>
      <section>
        <h3 className="code">2018</h3>
        {props.posts.map(post => (
          <ul key={post.href}>
            <li>
              <div className="post-date code">
                Aug 8
              </div>
              <div className="title">
                <Link as={"/posts/" + post.href} href={`/_post_content?id=${post.href}`}>
                  <a>{post.title}</a>
                </Link>
              </div>
            </li>
          </ul>
          ))}
      </section>
      <style jsx>{`
        ul, ol {
          margin: 40px 0;
          padding-left: 50px;
        }
        ul li {
          word-wrap: break-word;
        }
        ul img {
          margin: 40px 0;
          border-radius: 5px;
        }
      `}</style>
    </Layout>
  </div>
)

const getInitialProps = async ({ req }) => {
  const posts = await getPostLists();
  return {posts};
};

Page.getInitialProps = getInitialProps;
export default Page;