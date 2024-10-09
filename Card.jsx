import  React   from 'react';

import { FcLike } from "react-icons/fc";

const Card = ( {course} ) => {
    return (
        <div className="card">
            <div>
                <img src={course.image.url}></img>
            </div>

            <div>
                <button>
                    <FcLike fontSize="1.75rem" />
                    {/* above line is used for fonts in react , first install , and then import , and the above is syntax. fCLIKE TO WEBSITE HUMNE DEKHA WHA PR DIKHA */}
                </button>
            </div>

            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>

        </div>
    );
}

export default Card;