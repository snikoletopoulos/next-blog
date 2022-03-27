import styles from "./PostContent.module.css";

import ReactMarkdown from "react-markdown";
import { Post } from "types/post.types";

import PostHeader from "components/posts/PostHeader/PostHeader";

interface Props {
	post: Post;
}

const PostContent: React.FC<Props> = props => {
	const { post } = props;

	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	return (
		<article className={styles.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
