import { useMutation, useQuery } from "react-query";
import { apiInstance as UsersAPI } from "../api/users";

const paginationMock = {page: 0, size: 20};

export const useGetUsers = () => {

    return useQuery(
        'get_users',
        () => UsersAPI.getUsers(paginationMock).then(({data}) => data),
    );
};