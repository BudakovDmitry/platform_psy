import {UserType} from "@/app/types/types";
import {Endpoints} from "@/app/helpers/endpoints";
import {API_URL} from "@/app/http/axios";

type ProfileCardProps = {
    user: UserType
}

const ProfileCard = ({ user }: ProfileCardProps) => {

    console.log('user', user)

    return (
        <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
            <div className="px-6">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full flex justify-center">
                        <div className="relative">
                            <div className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 w-[150px] h-[150px] overflow-hidden">
                                <img src={`${API_URL}${Endpoints.AVATAR}/1694209400395-keanu.jpg`} className='object-cover w-full h-full' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-center mt-20">
                        <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                            <div className="p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">{user.diarySuccess.length}</span>
                                <span className="text-sm text-slate-400">Щоденник успіху</span>
                            </div>
                            <div className="p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">{user.diaryOfGoodness.length}</span>
                                <span className="text-sm text-slate-400">Щоденник блага</span>
                            </div>

                            {/*<div className="p-3 text-center">*/}
                            {/*    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>*/}
                            {/*    <span className="text-sm text-slate-400">Following</span>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">{user.name}</h3>
                    <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{user.email}
                    </div>
                </div>
                {/*<div className="mt-6 py-6 border-t border-slate-200 text-center">*/}
                {/*    <div className="flex flex-wrap justify-center">*/}
                {/*        <div className="w-full px-4">*/}
                {/*            <p className="font-light leading-relaxed text-slate-600 mb-4">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default ProfileCard;
