import { Link } from "react-router-dom"
export default function Notfound(){
    return(
        <>
            <div className="h-[51vh] md:h-[83vh] lg:h-[76vh]   ">
                <div className="w-full flex justify-center items-center h-full flex-wrap">
                    <div className="space-y-4">
                        <h1 className="text-2xl font-medium animate-bounce">ERROR 404 NOT FOUND</h1>
                          <Link to={'/'}>
                        <h1 className="text-2xl mt-7 text-center font-medium animate-bounce bg-black text-white py-2 rounded-3xl">
                          Back To Home Page
                        </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}