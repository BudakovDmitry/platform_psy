'use client'

import ProfileCard from "@/app/components/ProfileCard/ProfileCard";
import {useSelector} from "react-redux";
import Loader from "@/app/components/Loader/Loader";

const Profile = () => {
    const user = useSelector((state: any) => state.user)

    if(user.pending) {
        return <Loader />
    }

    return (
        <>
            <div className="h-screen overflow-hidden flex items-center justify-center">
                <ProfileCard user={user.user} />
            </div>
        </>
    )
}

export default Profile;