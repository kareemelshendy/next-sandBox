import { MoviesHOC } from 'hoc';
import { Movie, Page } from 'models';
import type { GetServerSideProps, NextPage } from 'next';
import { fetcher } from 'utils';

interface Props {
	initialMovies: Page<Movie>;
}

const Home: NextPage<Props> = ({ initialMovies }) => {
	console.log('data', initialMovies);
	return <MoviesHOC initialMovies={initialMovies} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const initialMovies = await fetcher<Page<Movie>>(
			`/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=1`
		);

		return {
			props: {
				initialMovies,
			},
		};
	} catch (error: any) {
		return {
			notFound: true,
		};
	}
};

export default Home;
