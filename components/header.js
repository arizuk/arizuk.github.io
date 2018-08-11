import Link from 'next/link'
import '../styles/header.scss'
export default () => (
  <aside className="header">
    <ul className="nav">
      <li>
        <Link href="/">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </li>
    </ul>
    <div className="logo">
      <Link href="/">
        <a>
          <img src="https://avatars0.githubusercontent.com/u/923924?v=4" className="logo-avatar" />
        </a>
      </Link>
    </div>
  </aside>
)