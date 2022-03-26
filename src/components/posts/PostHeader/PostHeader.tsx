import styles from "./PostHeader.module.css";

import { Post } from "types/post.types";

import Image from "next/image";

interface Props {
	title: Post["title"];
	image: Post["image"];
}

const PostHeader: React.FC<Props> = props => {
	return (
		<header className={styles.header}>
			<h1>{props.title}</h1>
			<Image src={props.image} alt={props.title} width={200} height={150} />
		</header>
	);
};

export default PostHeader;
