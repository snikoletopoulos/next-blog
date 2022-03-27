import styles from "./PostContent.module.css";
import Image from "next/image";

import ReactMarkdown from "react-markdown";
import { Post } from "types/post.types";

import PostHeader from "components/posts/PostHeader/PostHeader";

type ReactMarkdownRenderers = React.ComponentProps<
	typeof ReactMarkdown
>["components"];

interface Props {
	post: Post;
}

const PostContent: React.FC<Props> = props => {
	const { post } = props;

	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const customRenderers: ReactMarkdownRenderers = {
		img(image) {
			return (
				<Image
					src={`/images/posts/${post.slug}/${image.src}`}
					alt={image.alt}
					width={600}
					height={300}
				/>
			);
		},
	};

	return (
		<article className={styles.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
