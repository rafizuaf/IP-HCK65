import axios from "axios"
import { useEffect, useState } from "react"

export default function Profile() {
    let [profile, setProfile] = useState([])

    const fetchProfile = async () => {
        try {
            const response = await axios.get('https://api.rafizuaf.online/users/my-profile', {
                headers: {
                    Authorization: `${localStorage.getItem('access_token')}`
                }
            });
            console.log(response);
            setProfile(response.data.body)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(profile);

    useEffect(() => {
        fetchProfile()
    }, [])
    return (
        <>
            
                <div className="tertiaryBg px-4 py-4 m-4 rounded-lg flex flex-row">
                    <div className="relative rounded-full shadow-xl">
                    
                        <img
                            className="w-72 h-72 rounded-full object-cover"
                            src={profile.images[1].url}
                            alt="User"
                        />
                        
                    </div>
                    <div className="flex flex-col px-6  items-start justify-center">
                        <div className="flex h-8 flex-row">
                                <h2 className="text-6xl font-semibold">{profile.display_name}</h2>
                        </div>
                        
                        <div className="mt-12 flex flex-row space-x-2 ">
                            
                            
                            {/* Badge Email*/}
                            <div className="flex flex-row items-center">
                                <svg
                                    className="mr-2 h-5 w-5 fill-gray-500/80"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z" />
                                </svg>
                                <div className="text-gray-400/80 hover:text-gray-400">
                                    {profile.email}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Actions Container */}
                    <div className="w-100 flex flex-grow flex-col items-end justify-start">
                        <div className="flex flex-row space-x-3">
                            {/* Follow Button */}
                            <button className="flex rounded-full bg-primary py-2 px-8 text-secondary font-bold duration-300 hover:scale-105 ">
                                Edit
                            </button>
                            {/* More Actions Button */}
                            
                        </div>
                    </div>
                </div>

        </>
    )
}