
export interface Address {
	id?: string;
	createdAt?: number;
	userId?: string;
	firstName?: string;
	lastName?: string;
	addressLine1?: string;
	addressLine2?: string;
	city?: string;
	state?: string;
	country?: string;
	postalCode?: number;
	phone?: number;
	shipping?: boolean;
	billing?: boolean;
}