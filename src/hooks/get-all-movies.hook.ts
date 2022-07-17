import { getAllMovies } from 'api';
import { Movie, Page } from 'models';
import { useQuery } from 'react-query';

interface Props {
	initialMovies: any;
	page: number;
}
export const useGetAllMovies = ({ page, initialMovies }: Props) => {
	return useQuery<Page<Movie>>(
		['movies', page],
		() => getAllMovies({ page }),
		{
			initialData: initialMovies,
		}
	);
};
