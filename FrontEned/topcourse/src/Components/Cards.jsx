import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {// importing through props
    
    // console.log(props);
    // console.log(props.courses);

    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]); // for liked courses , toast.
    //   let allCourse = [];

    // It Returns list of all courses received from the api Response

    // const getCourses = () => {
    //     Object.values(props.courses).forEach((courseCategory) => {
    //         courseCategory.forEach((course) => {
    //             allCourse.push(course);
    //         });
    //     });
    //     return allCourse;
    // };

    function getCourses() {// it is making array of all courses
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            // console.log("In cards");
            // console.log(allCourses);
            return allCourses;
        }
        else
        {
            // console.log("hi");
            return courses[category];// else return courses of category as key , else all courses
        }
    }

    //   console.log(allCourse);
    return (
        
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                
                getCourses().map((course) => {
                    // whenever we are using map , always passed unique id.
                    // console.log(getCourses());
                    return <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
                })
            }
        </div>
    );
};

export default Cards;