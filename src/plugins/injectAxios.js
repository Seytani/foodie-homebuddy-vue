import axios from 'axios';

const install = (app) => {
  const { store } = app._context.provides;

  const client =  axios.create({
    baseURL: 'http://localhost:8080/api',
  });

  client.interceptors.request.use(addAuthorizationHeader);
  client.interceptors.response.use(handleSuccess, handleError)

  store.$http = client;
};

function handleSuccess(response) {
	return response.data;
}

function handleError(error) {
	console.log(error);
}

function addAuthorizationHeader(config) {
  const token = localStorage.getItem('auth_token_default');
  config.headers.Authorization = `Bearer ${token}`;
  return config
}

export default { install }