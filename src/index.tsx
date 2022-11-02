import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { reactQueryConfig } from './variables';
import App from './App';
import './style.scss';
import './scss/custom/main.scss';

const axiosConfig = {
	withCredentials: true,
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Credentials': true,
	'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,PUT,PATCH,DELETE,HEAD',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
};
const root = document.querySelector('#root');

const queryClient = new QueryClient({ defaultOptions: { queries: { ...reactQueryConfig } } });
// @ts-ignore
ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>,
	root
);

export default queryClient;
export { axiosConfig };
