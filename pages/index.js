import '../styles/main.scss'
import Layout from '../components/layout';
export default () => (
  <Layout>
    <article>
      <h1 className="title">Masaki Arizuka</h1>
      <div className="divider"></div>
      <div className="links">
        <div className="fa-2x">
          <a href="https://github.com/arizuk" target="_blank"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <style jsx>{`
        .links {
          text-align: center;
        }
        .links a {
          border: none;
        }
      `}</style>
    </article>
  </Layout>
)