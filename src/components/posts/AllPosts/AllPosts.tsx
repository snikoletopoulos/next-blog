import styles from "./AllPosts.module.css";

import { Post } from "types/post.types";

import PostsGrid from "components/posts/PostsGrid/PostsGrid";

interface Props {
	posts: Post[];
}

const AllPosts: React.FC<Props> = props => {
	return (
		<section className={styles.posts}>
			<h1>All Posts</h1>
			<PostsGrid posts={props.posts} />
		</section>
	);
};

export default AllPosts;
