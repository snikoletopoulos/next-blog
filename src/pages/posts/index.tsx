import type { NextPage } from "next";

import { DUMMY_POSTS } from "pages";

import AllPosts from "components/posts/AllPosts/AllPosts";

const AllPostsPage: NextPage = () => {
	return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
