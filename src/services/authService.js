import api from './api';

const API_URL = '/api';

export const authService = {
  login: async (email, password) => {
    try {
      const response = await api.post(`${API_URL}/auth/login`, { email, password });
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw {
        message: error.response?.data?.message || 'Login failed. Please try again.',
        status: error.response?.status
      };
    }
  },

  register: async (email, password, userType) => {
    try {
      const response = await api.post(`${API_URL}/auth/register`, { email, password, userType });
      return response.data;
    } catch (error) {
      throw {
        message: error.response?.data?.message || 'Registration failed. Please try again.',
        status: error.response?.status
      };
    }
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  }
};
