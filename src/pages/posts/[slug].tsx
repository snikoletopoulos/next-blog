import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Post } from "types/post.types";
import { ParsedUrlQuery } from "querystring";
import { getPostData, getPostsFiles } from "helpers/posts-utils";

import PostContent from "components/posts/PostContent/PostContent";

interface Params extends ParsedUrlQuery {
	slug: string;
}

interface StaticProps {
	post: Post;
}

const PostDetailPage: NextPage<StaticProps> = props => {
	return <PostContent post={props.post} />;
};

export default PostDetailPage;

export const getStaticProps: GetStaticProps<
	StaticProps,
	Params
> = async context => {
	const { params } = context;

	if (!params?.slug) {
		throw new Error("Missing slug");
	}

	const post = getPostData(params.slug);

	return {
		props: {
			post,
		},
	};
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const postsFileNames = getPostsFiles();

	const slugs = postsFileNames.map(fileName => fileName.replace(/\.md$/, ""));

	return {
		paths: slugs.map(slug => ({ params: { slug } })),
		fallback: false,
	};
};
