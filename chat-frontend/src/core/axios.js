import axios from 'axios';
import { storage } from './localStorage';


axios.defaults.baseURL = window.location.origin;
axios.defaults.headers["token"] = storage.getToken(); // only for development

window.axios = axios

export default axios;