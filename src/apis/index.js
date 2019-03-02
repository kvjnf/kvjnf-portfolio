import axios from 'axios';
import { restfulApiConfig } from './config';

export default axios.create({
  baseURL: restfulApiConfig.apiURL
});
