import styles from "./PostContent.module.css";

import ReactMarkdown from "react-markdown";

import PostHeader from "components/posts/PostHeader/PostHeader";

const DUMMY_POST = {
	id: 1,
	slug: "getting-started-with-nextjs",
	title: "Getting Started with Next.js",
	image: "getting-started-nextjs.png",
	date: "2022-02-10",
	content: "# This is a first post",
};

interface Props {}

const PostContent: React.FC<Props> = props => {
	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

	return (
		<article className={styles.content}>
			<PostHeader title={DUMMY_POST.title} image={imagePath} />
			<ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
