import axios from "axios";
// *** Live ***//
// const serverUrl = "http://52.15.186.222:8000";
// export const serverImageUrl = 'http://52.15.186.222:8000/images'

// *** Local Testing ***//
export const serverImageUrl = 'http://127.0.0.1:8000/images'
const serverUrl = "http://127.0.0.1:8000";

export const baseUrl = `${serverUrl}/api`;

export const get = async (url) => {
  try {
    let response = await axios.get(baseUrl + url, {});
    return response;
  } catch (error) {
    return error;
  }
};
export const post = async (url, data,) => {
  try {
    let response = await axios.post(baseUrl + url, data);
    return response;
  } catch (error) {
    return error;
  }
};
