import styles from "./PostsGrid.module.css";

import { Post } from "types/post.types";

import PostItem from "components/posts/PostItem/PostItem";

type Props = {
	posts: Post[];
};

const PostsGrid: React.FC<Props> = props => {
	return (
		<ul className={styles.grid}>
			{props.posts.map(post => (
				<PostItem
					key={post.title}
					title={post.title}
					date={post.date}
					excerpt={post.excerpt}
					image={post.image}
					slug={post.slug}
				/>
			))}
		</ul>
	);
};

export default PostsGrid;
