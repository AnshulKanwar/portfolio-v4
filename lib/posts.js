import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from "next-mdx-remote/serialize";

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => (a > b ? -1 : 1));
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsIds = fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.mdx$/, ""),
    },
  }));

  return allPostsIds;
}

export async function getPost(id) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);
  const content = await serialize(matterResult.content);

  return {
    id,
    content,
    ...matterResult.data,
  };
}