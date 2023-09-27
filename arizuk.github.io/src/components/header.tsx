import Link from "next/link";

export default function Header() {
  return (
    <div className="mb-9">
      <nav className="mx-auto flex max-w-[800px] justify-end space-x-4">
        <Link
          href="/"
          className="text-gray-600 hover:text-gray-900 font-medium uppercase tracking-wide"
        >
          About
        </Link>
        <Link
          href="/posts"
          className="text-gray-600 hover:text-gray-900 font-medium uppercase tracking-wide"
        >
          Posts
        </Link>
      </nav>

      <div className="mx-auto text-center">
        <div className="shadow-lg w-24 h-24 inline-block p-1 rounded-full">
          <picture>
            <img
              className="rounded-full"
              alt="Masaki Ariuzka"
              src="https://avatars0.githubusercontent.com/u/923924?v=4"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
