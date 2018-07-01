import { Product } from './product.model';

export interface Cart {
	id?: string;
	createdAt?: number;
	product?: Product;
	userId?: string;
	productCount?: number;
	total?: number;
	buyingPrice?: number;
	isAvailable?: boolean;
}