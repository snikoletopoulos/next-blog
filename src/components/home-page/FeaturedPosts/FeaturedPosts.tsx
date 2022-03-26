import styles from "./FeaturedPosts.module.css";

import { Post } from "types/post.types";

import PostsGrid from "components/posts/PostsGrid/PostsGrid";

type Props = {
	posts: Post[];
};

const FeaturedPosts: React.FC<Props> = props => {
	return (
		<section className={styles.latest}>
			<h2>Featured Posts</h2>
			<PostsGrid posts={props.posts} />
		</section>
	);
};

export default FeaturedPosts;
