import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { apiInstance as AuthApi } from "../api/auth";
import { storage } from "../classes/Storage";
import { actions } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return useMutation(
        'login',
        async (payload) => {
            const {data} = await AuthApi.login(payload);

            dispatch(actions.set(data.user));
            storage.set('accessToken', data.accessToken);

            navigate('/account');

            return data;
        }
    );
};