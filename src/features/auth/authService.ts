import axios from "axios";

//** This component is for making HTTp request, sending data back, setting local storage **//

const API_URL = '/user/'

// Register user
const register = async (userData: any) => {
    const response = await axios.post(API_URL + 'register', userData)


    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//login
const login = async (userData: any) => {
    const response = await axios.post(API_URL + 'login', userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//Logout
const logout = async () => {
    localStorage.removeItem('user');
}

const authService = {
    register,
    login,
    logout
}

export default authService