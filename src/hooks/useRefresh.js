import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { apiInstance as AuthApi } from "../api/auth";
import { actions } from "../redux/user/userSlice";
import { storage } from "../classes/Storage";

export const useRefresh = () => {
    const dispatch = useDispatch();

    return useMutation(
        'refresh',
        async () => {
            const {data} = await AuthApi.refresh();

            dispatch(actions.set(data.user));

            return data;
        },
    );
};