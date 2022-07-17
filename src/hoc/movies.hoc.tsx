import { useGetAllMovies } from 'hooks';
import { Movie, Page } from 'models';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

interface Props {
	initialMovies: Page<Movie>;
}

export const MoviesHOC: React.FC<Props> = ({ initialMovies }) => {
	const [page, setPage] = useState<number>(1);
	const {
		data: movies,
		error,
		isLoading,
	} = useGetAllMovies({ page, initialMovies });
	return (
		<Container>
			<Row>
				{movies?.results.map((movie: Movie) => {
					return (
						<Col md={4} key={movie?.id} className='mb-4'>
							<Card className='h-100'>
								<Card.Img
									variant='top'
									src={`https://image.tmdb.org/t/p/w400/${movie?.poster_path}`}
								/>
								<Card.Body>
									<Card.Title>{movie.title}</Card.Title>
									<Card.Text>{movie.overview}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
