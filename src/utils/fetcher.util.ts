import { axios, mapAxiosError } from 'utils';

export async function fetcher<T>(
	url: string,
	token?: string,
	locale: string = 'ar',
	params: any = {},
	headers: any = {}
): Promise<T> {
	try {
		const response = await axios.get(url, {
			headers: {
				Authorization: token ? `Bearer ${token}` : '',
				'Accept-Language': locale,
				...headers,
			},
			params,
		});

		return response.data;
	} catch (error: any) {
		throw mapAxiosError(error);
	}
}
