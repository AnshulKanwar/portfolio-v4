import { parseISO, format } from "date-fns";
import { MDXRemote } from "next-mdx-remote";
import { getPost, getAllPostsIds } from "../../lib/posts";

const components = {};

export default function Post({ post }) {
  return (
    <div className="mt-36 max-w-[60ch] mx-auto">
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
