import { parseISO, format } from "date-fns";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { TbArrowLeft } from "react-icons/tb";
import Layout from "../../components/layout";
import ThemeToggle from "../../components/themeToggle";
import { getPost, getAllPostsIds } from "../../lib/posts";
import Alert from "../../components/blog/alert";
import A from "../../components/blog/a";
import Code from "../../components/blog/code";

const components = {
  Alert,
  a: A,
  pre: Code,
};

export default function Post({ post }) {
  return (
    <Layout>
      <div className="py-36 max-w-[60ch] mx-auto">
        <div className="mb-5 hover:underline cursor-pointer">
          <Link href="/blog">
            <div className="flex gap-1 items-center text-xs font-bold">
              <TbArrowLeft className="text-2xl" />
              <span>Go back</span>
            </div>
          </Link>
        </div>
        <div className="border-b border-[#96A0B3] pb-4">
          <h1 className="text-6xl mb-8">{post.title}</h1>
          <span className="font-light text-[#96A0B3]">
            <time dateTime={parseISO(post.date)}>
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </span>
        </div>
        <div className="prose dark:prose-invert prose-slate mt-10">
          <MDXRemote {...post.content} components={components} />
        </div>
      </div>
      <div className="fixed bottom-20 right-20">
        <ThemeToggle />
      </div>
    </Layout>
  );
}

export function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return {
    props: {
      post,
    },
  };
}
