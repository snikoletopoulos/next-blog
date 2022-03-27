import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { Post, PostMeta } from "types/post.types";

const postsDirectory = path.join(process.cwd(), "src", "posts");

const getPostData = (postIdentifier: string): Post => {
	const postSlug = postIdentifier.replace(/\.md$/, ""); // remove .md extension
	const filePath = path.join(postsDirectory, `${postIdentifier}.md`);
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContent);

	return {
		slug: postSlug,
		...(data as PostMeta),
		content,
	};
};

export const getAllPosts = (): Post[] => {
	const postFiles = fs.readdirSync(postsDirectory);

	const posts = postFiles.map(fileName => getPostData(fileName));

	return posts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};

export const getFeaturedPosts = (): Post[] => {
	const posts = getAllPosts();

	return posts.filter(post => post.isFeatured);
};
