import { Product } from './product.model';

export interface CartLine {
	id?: string;
	product?: Product;
	cartId?: string;
	productCount?: number;
	total?: number;
	buyingPrice?: number;
	isAvailable?: boolean;
}