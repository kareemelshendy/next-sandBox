import { GetServerSideProps, NextPage } from 'next';
import { gql } from '@apollo/client';
import client from '../../apollo-client';
import { CharactersHOC } from 'hoc';

interface Props {
	initialCharacters: any;
}

const CharactersPage: NextPage<Props> = ({ initialCharacters }) => {
	console.log('initialCharacters', initialCharacters);
	return <CharactersHOC />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	// const { data } = await client.query({
	// 	query: gql`
	// 		query {
	// 			characters {
	// 				results {
	// 					name
	// 					id
	// 					gender
	// 					image
	// 				}
	// 			}
	// 		}
	// 	`,
	// });

	return {
		props: {},
	};
};

export default CharactersPage;
