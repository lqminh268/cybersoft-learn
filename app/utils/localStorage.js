export const validateAuthentication = () => {
  const user = localStorage.getItem('auth');
  const userParse = JSON.parse(user);
  return !!(userParse && userParse === 'admin');
};

export const setLocalStorage = (key, value) => {
  const data = localStorage.setItem(key, JSON.stringify(value));
  return data;
};

export const getLocalStorage = key => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

export const getToken = () => {
  const data = localStorage.getItem('token');
  const dataTmp = JSON.parse(data);
  return dataTmp;
};
export const getExpires = () => {
  const data = localStorage.getItem('expires');
  const dataTmp = JSON.parse(data);
  return dataTmp;
};
