import { api } from "../api";

class AuthAPI {
    login = (payload) => api.post('v1/auth/login', payload);
    logout = () => api.post('v1/auth/logout');
    refresh = () => api.post('v1/auth/refresh');
}

export const apiInstance = new AuthAPI();