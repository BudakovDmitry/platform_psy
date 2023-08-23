import authSlice from "@/app/redux/slices/auth/authSlice";
import {AuthStateType, UserStateType} from "@/app/redux/types/types";
import userSlice from "@/app/redux/slices/user/userSlice";

export type StateType = {
    auth: AuthStateType,
    user: UserStateType
};

const rootReducer = {
    auth: authSlice,
    user: userSlice
};

export default rootReducer;