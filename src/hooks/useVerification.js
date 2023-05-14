import { useMutation } from "react-query";
import { apiInstance as UsersApi } from "../api/users";

export const useVerification = (verificationToken) => {
    return useMutation(
        'verification',
        () => UsersApi.verification(verificationToken),
        {
            onSuccess: () => {
                console.log('success');
            },
        },
        [verificationToken]
    );
};