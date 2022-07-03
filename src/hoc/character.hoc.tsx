import dynamic from 'next/dynamic';
import { Characters } from 'components';

import { useGetCharacters } from 'hooks';
interface Props {}

export const CharactersHOC: React.FC<Props> = () => {
	const { data, loading, error } = useGetCharacters();
	return (
		<div className='container'>
			<Characters characters={data?.characters?.results} />
		</div>
	);
};
