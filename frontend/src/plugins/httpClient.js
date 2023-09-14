import Axios from 'axios';

class HttpClient {
    static instance;
    axiosInstance;
    authToken;


    constructor() {
        this.axiosInstance = Axios.create({
            baseURL: process.env.REACT_APP_API_HOST,
            headers: {
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        this.axiosInstance.interceptors.request.use(request => this.requestHandler(request));
        this.axiosInstance.interceptors.response.use(response => this.responseHandler(response),
            async error => {
                console.error(error);
                throw error;
            });
    }

  requestHandler = async (request) => {
    let idToken = store.getters.authToken;
    if (!_.isEmpty(idToken)) {
      request.headers[process.env.REACT_APP_AUTH_TOKEN_HEADER_KEY] = idToken;
    }
    return request;
  };

  responseHandler = async (response) => {
    const authToken = response.headers[process.env.REACT_APP_AUTH_TOKEN_HEADER_KEY.toLowerCase()];
    if (!_.isEmpty(authToken)) {
   //   if (authToken !== store.getters.authToken) {
   //   }
    }
    return response;
  };

  static getInstance = () => {
    if ((HttpClient.instance === null) || (HttpClient.instance === undefined) || !(HttpClient.instance instanceof HttpClient)) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance.axiosInstance;
  }
}

export default HttpClient.getInstance();


