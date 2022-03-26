import styles from "./PostItem.module.css";
import Link from "next/link";
import Image from "next/image";

import { Post } from "types/post.types";

interface Props {
	title: Post["title"];
	image: Post["image"];
	excerpt: Post["excerpt"];
	date: Post["date"];
	slug: string;
}

const PostItem: React.FC<Props> = props => {
	const { title, image, excerpt, date, slug } = props;

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const imagePath = `/images/posts/${slug}/${image}`;
	const linkPath = `/posts/${slug}`;

	return (
		<li className={styles.post}>
			<Link href={linkPath}>
				<a>
					<div className={styles.image}>
						<Image
							src={imagePath}
							alt={title}
							height={200}
							width={300}
							layout="responsive"
						/>
					</div>

					<div className={styles.content}>
						<h3>{title}</h3>
						<time>{formattedDate}</time>
						<p>{excerpt}</p>
					</div>
				</a>
			</Link>
		</li>
	);
};

export default PostItem;
