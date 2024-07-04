// src/services/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const register = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_URL}register/`, {
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Registration error', error);
        throw error;
    }
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}token/`, {
            username,
            password,
        });
        if (response.data.access) {
            localStorage.setItem('token', response.data.access);
        }
        return response.data;
    } catch (error) {
        console.error('Login error', error);
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const getToken = () => {
    return localStorage.getItem('token');
};

