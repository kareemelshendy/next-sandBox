/* eslint-disable @next/next/no-img-element */
import { Character } from 'models';
import Link from 'next/link';
import { Fragment } from 'react';

import styles from './characters.module.scss';

interface Props {
	characters: Character[];
}

export const Characters: React.FC<Props> = ({ characters }) => {
	return (
		<div className='row'>
			{characters?.map((character) => (
				<div className={`col-md-4 mb-4`} key={character?.id}>
					<div>
						<h2>{character?.name}</h2>
						<p>{character?.gender}</p>
						<img src={character?.image} alt='' />
					</div>
				</div>
			))}
		</div>
	);
};
