import authSlice from "@/app/redux/slices/auth/authSlice";
import {
    AuthStateType,
    UserStateType,
    CustomersStateType,
    CustomerStateType,
    AdminStateType,
    ChatsStateType
} from "@/app/redux/types/types";
import userSlice from "@/app/redux/slices/user/userSlice";
import customersSlice from "@/app/redux/slices/customers/customersSlice";
import customerSlice from "@/app/redux/slices/customer/customerSlice";
import adminSlice from "@/app/redux/slices/admin/adminSlice";
import chatsSlice from "@/app/redux/slices/chats/chatsSlice";

export type StateType = {
    auth: AuthStateType,
    user: UserStateType,
    customers: CustomersStateType
    customer: CustomerStateType
    admin: AdminStateType
    chats: ChatsStateType
};

const rootReducer = {
    auth: authSlice,
    user: userSlice,
    customers: customersSlice,
    customer: customerSlice,
    admin: adminSlice,
    chats: chatsSlice
};

export default rootReducer;