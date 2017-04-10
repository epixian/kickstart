import axios from 'axios';

export default {
	get(url, request) {
		return axios.get(url, request)
			.then((response) => Promise.resolve(response.data))
			.catch((error) => Promise.reject(error));
	},

	post(url, request) {
		return axios.post(url, request)
			.then((response) => Promise.resolve(response))
			.catch((error) => Promise.reject(error));
	},
	put(url, request) {
		return axios.put(url, request)
			.then((response) => Promise.resolve(response))
			.catch((error) => Promise.reject(error));
	},

	delete(url, request) {
		return axios.delete(url, request)
			.then((response) => Promise.resolve(response))
			.catch((error) => Promise.reject(error));
	},

	baseUrl(url) {
		axios.defaults.baseURL = url;
	},

	interceptors: {
		request(options, onRejected = false) {
			return axios.interceptors.request.use(config => {
					return Object.assign(config, options);
				}, error => {
					if ( onRejected !== false ) {
						return Promise.reject(onRejected(error));
					}

					return Promise.reject(error);
				})
        },

		response(onFulfilled, onRejected = false) {
			return axios.interceptors.response.use(response => {
				return onFulfilled(response);
			}, error => {
				if ( onRejected !== false ) {
                    return Promise.reject(onRejected(error));
				}

				return Promise.reject(error);
			})
		}
	}
}
