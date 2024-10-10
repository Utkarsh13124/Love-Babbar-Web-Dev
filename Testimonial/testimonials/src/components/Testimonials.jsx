import React from 'react'
import Card  from './Card';

const Testimonials = (props) => {
    let reviews = props.reviews;
    // console.log(reviews[0]);
  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
        <Card review={reviews[0]} />
        {/* humne review variable ke saath paas kiya hi , iss object ko. */}
    </div>
  )
}

export default Testimonials;