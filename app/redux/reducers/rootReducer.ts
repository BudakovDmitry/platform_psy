import authSlice from "@/app/redux/slices/auth/authSlice";
import {AuthStateType, UserStateType, CustomersStateType} from "@/app/redux/types/types";
import userSlice from "@/app/redux/slices/user/userSlice";
import customersSlice from "@/app/redux/slices/customersSlice/customersSlice";

export type StateType = {
    auth: AuthStateType,
    user: UserStateType,
    customers: CustomersStateType
};

const rootReducer = {
    auth: authSlice,
    user: userSlice,
    customers: customersSlice
};

export default rootReducer;