import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_BASE_URL = 'http://localhost:1337/api'; // Remplace par l'IP locale de Strapi

export async function apiRequest(method:string, endpoint:string, data = null, params = null) {
  try {
    const token = await SecureStore.getItemAsync('userToken');

    const config = {
      method,
      url: `${API_BASE_URL}${endpoint}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data,
      params,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
}