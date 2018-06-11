
export interface Product {
	id?: string;
	categoryId: string;
	name: string;
	brand: string;
	code: string;
	description: string;
	imgUrl: string;
	isActive: boolean;
	purchases: number;
	quantity: number;
	supplierId: string;
	unitPrice: number;
	views: number;
}