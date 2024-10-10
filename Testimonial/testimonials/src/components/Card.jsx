import React from 'react'
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa'

const Card = (props) => {
    // let review = props;
    let review = props.review;  // assuming review is an object with properties like name, job, image, text, reviews.name
    // console.log(props); 
  return (
    <div className="flex flex-col md:relative">
        <div className="absolute top-[-7rem] z-10 mx-auto ">
                {/* <img src={review.image} alt="" className="aspect-square rounded-full w-[140px] h-[140px] z-25" /> */}
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>
        <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize leading-3">{review.name}</p>
        </div>

        <div>
            <p>{review.job}</p>
        </div> 
        <div>
            <FaQuoteLeft />
            {review.text}
            <FaQuoteRight />
        </div>
        
        <div>
        <button>+</button>
        <button>*</button>
        </div>

        <div>
            <button >
                Surprise Me!
            </button>
        </div>
    </div>
  )
}

export default Card;
