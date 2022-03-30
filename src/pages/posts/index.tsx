import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Post } from "types/post.types";

import AllPosts from "components/posts/AllPosts/AllPosts";
import { getAllPosts } from "helpers/posts-utils";

interface StaticProps {
	posts: Post[];
}

const AllPostsPage: NextPage<StaticProps> = props => {
	return (
		<>
			<Head>
				<title>All Posts</title>
				<meta
					name="description"
					content="A list of all programming-related tutorials and posts!"
				/>
			</Head>
			<AllPosts posts={props.posts} />
		</>
	);
};

export default AllPostsPage;

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
	const posts = getAllPosts();

	return {
		props: {
			posts,
		},
	};
};
