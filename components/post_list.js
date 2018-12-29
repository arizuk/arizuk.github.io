import Layout from '../components/layout';
import Link from 'next/link';
import {getPostLists} from '../utils/index';
import moment from 'moment';

const createPost = (post, prev = null) => {
  const year = post.date.substr(0, 4);
  const prevYear = prev ? prev.date.substr(0, 4) : null;
  return (
    <div key={post.href}>
      {(() => year !== prevYear ? <h3 className="code">{year}</h3> : null)()}
      <ul>
        <li>
          <div className="post-date code">
            {moment(post.date).format('MMM DD')}
          </div>
          <div className="title">
            <Link as={"/posts/" + post.href} href={`/_post_content?id=${post.href}`}>
              <a>{post.title}</a>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  )
};

export default (props) => (
  <section>
    {props.posts.map((post, i) => createPost(post, props.posts[i-1]))}
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
  </section>
)