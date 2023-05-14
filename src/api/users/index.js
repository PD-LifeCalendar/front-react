import { api } from "../api";

class UsersAPI {
    getUsers = (payload) => api.get('v1/users/', {params: payload});
    verification = (verificationToken) => api.patch(`v1/users/verify/${verificationToken}`)
}

export const apiInstance = new UsersAPI();