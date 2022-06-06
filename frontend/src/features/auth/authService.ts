import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';
const API_URL = '/api/users/';

// Register user
const register = async (userData) => {
    
    const response = await axios.post(API_URL, userData)
    

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
}

// Login User
const login = async (userData) => {
    
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout User
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService