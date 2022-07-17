import { axios, mapAxiosError } from 'utils';
interface Props {
	page: number;
}
export const getAllMovies = async ({ page }: Props) => {
	try {
		const response = await axios.get(
			`/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=${page}`
		);

		return response.data;
	} catch (error: any) {
		throw mapAxiosError(error);
	}
};
