import authSlice from "@/app/redux/slices/auth/authSlice";
import {AuthStateType, UserStateType, CustomersStateType, CustomerStateType} from "@/app/redux/types/types";
import userSlice from "@/app/redux/slices/user/userSlice";
import customersSlice from "@/app/redux/slices/customers/customersSlice";
import customerSlice from "@/app/redux/slices/customer/customerSlice";

export type StateType = {
    auth: AuthStateType,
    user: UserStateType,
    customers: CustomersStateType
    customer: CustomerStateType
};

const rootReducer = {
    auth: authSlice,
    user: userSlice,
    customers: customersSlice,
    customer: customerSlice
};

export default rootReducer;