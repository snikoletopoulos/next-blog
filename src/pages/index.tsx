import type { NextPage } from "next";

import { Post } from "types/post.types";

import Hero from "components/home-page/Hero/Hero";
import FeaturedPosts from "components/home-page/FeaturedPosts/FeaturedPosts";

const DUMMY_POSTS: Post[] = [
	{
		id: 1,
		slug: "getting-started-with-nextjs",
		title: "Getting Started with Next.js",
		excerpt:
			"NextJS is tje React framework for production - it makes fullstack React apps and sites a breeze and ships with build-in SSR.",
		image: "getting-started-nextjs.png",
		date: "2022-02-10",
	},
	{
		id: 2,
		slug: "getting-started-with-nextjs",
		title: "Getting Started with Next.js",
		excerpt:
			"NextJS is tje React framework for production - it makes fullstack React apps and sites a breeze and ships with build-in SSR.",
		image: "getting-started-nextjs.png",
		date: "2022-02-10",
	},
	{
		id: 3,
		slug: "getting-started-with-nextjs",
		title: "Getting Started with Next.js",
		excerpt:
			"NextJS is tje React framework for production - it makes fullstack React apps and sites a breeze and ships with build-in SSR.",
		image: "getting-started-nextjs.png",
		date: "2022-02-10",
	},
];

const HomePage: NextPage = () => {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</>
	);
};

export default HomePage;
