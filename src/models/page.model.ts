export interface Page<T> {
	results: T[];
	page: number;
	pageCount: number;
	totalCount: number;
}
