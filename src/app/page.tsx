import Divider from "@/components/divider";
import PostList from "@/components/postList";
import { getAllPosts } from "@/lib/posts";

type SocialLinkProps = {
  href: string;
  text: string;
};
const SocialLink: React.FC<SocialLinkProps> = ({ href, text }) => {
  return (
    <li className="mt-1">
      <a href={href} className="hover:underline" target="_blank">
        {text}
      </a>
    </li>
  );
};

type SectionTitleProps = {
  title: string;
};
const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="text-lg my-4 font-bold text-gray-700">{title}</h2>;
};

const socialLinks = [
  { href: "https://github.com/arizuk", text: "Github" },
  { href: "https://atcoder.jp/users/arzk", text: "AtCoder" },
  { href: "https://codeforces.com/profile/arzk", text: "Codeforces" },
  { href: "https://www.kaggle.com/arizuk", text: "Kaggle" },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 5);
  return (
    <main>
      <div className="mx-auto max-w-[500px]">
        <h1 className="text-center font-bold text-2xl">Masaki Arizuka</h1>
        <Divider />
        <section className="px-4 md:px-8">
          <SectionTitle title="Links" />
          <ul className="list-disc list-inside">
            {socialLinks.map(({ href, text }) => (
              <SocialLink href={href} text={text} key={text} />
            ))}
          </ul>
        </section>
        <Divider />
        <section className="px-4 md:px-8">
          <SectionTitle title="Contact" />
          <ul className="list-disc list-inside">
            <SocialLink
              href={"https://www.linkedin.com/in/masakiarizuka/"}
              text="Linkedin"
            />
            <li className="mt-1">masaki.arizuka(at)gmail.com</li>
          </ul>
        </section>
        <Divider />
        <PostList posts={posts} />
      </div>
    </main>
  );
}
