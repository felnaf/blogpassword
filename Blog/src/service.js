import instance from './api/instance';
import cryptoJs from 'crypto-js';

export const getData = (url) => instance.get(url);
export const postData = (url, data) => instance.post(url, data);
export const deleteData = (url) => instance.delete(url);
export const editData = (url, data) => instance.patch(url, data);

export const validatePassword = (ciphertext, password) => {
  var bytes = cryptoJs.AES.decrypt(ciphertext, 'my-secret-key@123');
  var decrypedPassword = JSON.parse(bytes.toString(cryptoJs.enc.Utf8));
  if (decrypedPassword === password) {
    return true;
  }
  return false;
};

export const encrypt = (password) =>
  cryptoJs.AES.encrypt(
    JSON.stringify(password),
    'my-secret-key@123'
  ).toString();
