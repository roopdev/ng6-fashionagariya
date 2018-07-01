
export class Blog {
	id?: string;
	createdAt?: number;
	title: string;
	description: string;
	body: string;
	imageUrl: string;
	image: string;
	tags: Array<string>;
	userId: string;
}