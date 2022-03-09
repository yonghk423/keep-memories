import axios from 'axios';

export const getData = async () => {
  const response = await axios.get('http://localhost:8080/initialState');
  console.log(response);
  return response.data;
};