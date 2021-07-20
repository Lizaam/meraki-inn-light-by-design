import axios from 'axios';
import CONSTANTS from '../modules/constants';

export function SendContactForm(postData) {
  return new Promise((resolve, reject) => {
    axios.post(`${ CONSTANTS.forms.contactFormHost + CONSTANTS.forms.requests.contactForm }`, {
      name: postData.name,
      surname: postData.surname,
      email: postData.email,
      number: postData.number,
      message: postData.message
    })
    .then(function (response) {
      resolve(response);
    })
    .catch(function (error) {
      reject(error);
    });

    resolve();
  })
}