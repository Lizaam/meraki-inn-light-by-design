import axios from 'axios';
import CONSTANTS from '../modules/constants';

export async function GetAllProducts() {
  return await axios.get(`${ CONSTANTS.api.host + CONSTANTS.api.requests.getAll }`)
    .then(response => response.data)
}