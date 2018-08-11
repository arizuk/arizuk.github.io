import Link from 'next/link'
export default () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>about</a>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </li>
    </ul>
  </div>
)