import authSlice from "@/app/redux/slices/auth/authSlice";
import {AuthStateType, UsersStateType} from "@/app/redux/types/types";
import usersSlice from "@/app/redux/slices/users/usersSlice";

export type StateType = {
    auth: AuthStateType,
    users: UsersStateType
};

const rootReducer = {
    auth: authSlice,
    users: usersSlice
};

export default rootReducer;