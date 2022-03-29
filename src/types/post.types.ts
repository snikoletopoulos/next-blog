export interface PostMeta {
	title: string;
	date: string;
	image: string;
	excerpt: string;
	isFeatured?: boolean;
}

export interface Post extends PostMeta {
	slug: string;
	content: string;
}
