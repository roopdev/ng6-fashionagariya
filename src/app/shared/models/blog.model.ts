
export class Blog {
	id?: string;
	createdAt?: Date;
	title: string;
	description: string;
	body: string;
	imageUrl: string;
	image: string;
	tags: Array<string>;
	userId: string;
}