import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
});

instance.interceptors.request.use(
	(config) => {
		if (process.browser) {
			config.headers = {
				...config.headers,
			};
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default instance;
