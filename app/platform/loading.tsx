import Loader from "@/app/components/Loader/Loader";

const Loading = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-stone-100'>
            <Loader />
        </div>
   );
}
 
export default Loading;