import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/** Axios instance
 * 	initial axios setting
 */
const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_SERVER,
	timeout: 1000,
	withCredentials: true
});
const { interceptors } = instance;

/** Request interceptor */
instance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// Config setting
		(config.headers as any)['Content-Type'] = 'application/json; charset=utf-8';
		(config.headers as any)['Access-Control-Allow-Origin'] = process.env.NEXT_PUBLIC_BACKEND_SERVER;
		// config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	error => {
		return Promise.reject(error.request);
	}
);

/** Response interceptor */
interceptors.response.use(
	(response: AxiosResponse) => response.data,
	error => {
		if (error.response?.status === 422) {
			return Promise.reject(error.response.data);
		}
		return Promise.reject(error.response);
	}
);

export default axios;
