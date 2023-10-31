import Axios from 'axios';

class HttpClient {
    static instance;
    axiosInstance;

    constructor() {
        this.axiosInstance = Axios.create({
            baseURL: process.env.REACT_APP_API_HOST,
            headers: {
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
    }

  static getInstance = () => {
    if ((HttpClient.instance === null) || (HttpClient.instance === undefined) || !(HttpClient.instance instanceof HttpClient)) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance.axiosInstance;
  }
}

export default HttpClient.getInstance();


