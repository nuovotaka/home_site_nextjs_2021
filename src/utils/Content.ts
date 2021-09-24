import { Octokit } from '@octokit/rest';
import matter from 'gray-matter';

const octokit = new Octokit({
  auth: `${process.env.GITHUB_TOKEN}`,
});
const base64 = require('js-base64').Base64;

export type PostItems = {
  [key: string]: string;
};

export async function getPostSlugs() {
  const response = await octokit.rest.repos
    .getContent({
      owner: 'nuovotaka',
      repo: 'home-site-contents',
      path: '_posts',
    })
    .catch((error) => {
      console.error(error);
    });

  const data: any = response?.data;
  const list = data.map((obj: any) => obj.name);

  return list;
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');

  const response = await octokit.rest.repos
    .getContent({
      owner: 'nuovotaka',
      repo: 'home-site-contents',
      path: `_posts/${realSlug}.md`,
    })
    .catch((error) => {
      console.error(error);
    });

  const file: any = response;
  const fileContents = base64.decode(file?.data?.content);

  const { data, content } = matter(fileContents);
  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs
      .map(async (slug: any) => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1: any, post2: any) => (post1.date < post2.date ? 1 : -1)),
  );
  return posts;
}
