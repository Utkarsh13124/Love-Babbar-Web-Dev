import React from 'react'
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
    return (
    <div>
        
        <div>
            <h1>{title}</h1>
            <p>
                <span >{desc1}</span>
                <span >{desc2}</span>
            </p>

            {formType === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}
            {/* we use bracket because we have to write condition */}

            <div>
                {/* creating line ---or--- */}
                <div className="h-[1px] w-full bg-richblack-700"></div>
                <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
                <div className="h-[1px] w-full bg-richblack-700"></div>
            </div>

            <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6">
                <p>Sign Up with Google</p>
            </button>
        </div>

        <div className="relative w-11/12 max-w-[450px]">
            <img
            src={frame}
            alt="Pattern"
            width={558}
            height={504}
            loading="lazy"

            />
            <img
            src={image}
            alt="Students"
            width={558}
            height={504}
            loading="lazy"
            className="absolute -top-4 right-4 "
            />
        </div>
    </div>
  )
};

export default Template