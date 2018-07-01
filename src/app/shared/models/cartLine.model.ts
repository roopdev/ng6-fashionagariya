import { Product } from './product.model';

export interface CartLine {
	id?: string;
	createdAt?: number;
	product?: Product;
	cartId?: string;
	productCount?: number;
	total?: number;
	buyingPrice?: number;
	isAvailable?: boolean;
}