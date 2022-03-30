import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { Post } from "types/post.types";
import { getFeaturedPosts } from "helpers/posts-utils";

import Hero from "components/home-page/Hero/Hero";
import FeaturedPosts from "components/home-page/FeaturedPosts/FeaturedPosts";

interface StaticProps {
	posts: Post[];
}

const HomePage: NextPage<StaticProps> = props => {
	return (
		<>
			<Head>
				<title>Stavros's Blog</title>
				<meta
					name="description"
					content="I post about programming and web/mobile development"
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</>
	);
};

export default HomePage;

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
};
