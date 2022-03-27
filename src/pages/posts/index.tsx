import type { GetStaticProps, NextPage } from "next";

import { Post } from "types/post.types";

import AllPosts from "components/posts/AllPosts/AllPosts";
import { getAllPosts } from "helpers/posts-utils";

interface StaticProps {
	posts: Post[];
}

const AllPostsPage: NextPage<StaticProps> = props => {
	return <AllPosts posts={props.posts} />;
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
