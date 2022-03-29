import styles from "./PostContent.module.css";
import Image from "next/image";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
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
		p(paragraph) {
			const { node } = paragraph;

			const firstChldren = node.children[0];
			if (firstChldren.type === "element" && firstChldren.tagName === "img") {
				return (
					<div className={styles.image}>
						<Image
							src={`/images/posts/${post.slug}/${firstChldren.properties?.src}`}
							alt={firstChldren.properties?.alt as string}
							width={600}
							height={300}
						/>
					</div>
				);
			}
			return <p>{paragraph.children}</p>;
		},
		code(code) {
			const language = code.className?.split("-")[1];
			return (
				<SyntaxHighlighter language={language} style={atomDark}>
					{code.children}
				</SyntaxHighlighter>
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
