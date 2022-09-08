import { parseISO, format } from "date-fns";
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

const Blog = ({ allPostsData }) => {
  return (
    <div className="mt-20 max-w-2xl mx-auto px-12">
      <h1 className="text-8xl font-thin mb-20">Blog</h1>
      <div>
        <ul className="flex flex-col gap-10">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <li
              key={id}
              className="border-b border-[#96A0B3] py-3 cursor-pointer group"
            >
              <Link href={`/blog/${id}`}>
                <div>
                  <h2 className="text-2xl group-hover:underline">{title}</h2>
                  <span className="font-light text-[#96A0B3]">
                    <time dateTime={parseISO(date)}>
                      {format(parseISO(date), "LLLL d, yyyy")}
                    </time>
                  </span>
                  <p>{excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const allPostsData = getAllPosts();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Blog;
