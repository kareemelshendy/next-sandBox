import { gql, useQuery } from '@apollo/client';

export const useGetCharacters = () => {
	const Query = gql`
		query {
			characters {
				results {
					name
					id
					gender
					image
				}
			}
		}
	`;

	const { data, loading, error } = useQuery(Query);

	return {
		data,
		loading,
		error,
	};
};
