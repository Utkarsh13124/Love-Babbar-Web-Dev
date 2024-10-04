import React from "react";
import Card from "./Card";

const Cards = ({courses}) => {

    // inserting all data in single array to use map function
    // not much intutive, on seeing courses , we noticed that if we not do  then we have to call map function for each index 
    let allCourses = [];
    const getCourses = () => {
        Object.values(courses).forEach( (couseCategory) => {
            couseCategory.forEach ( (course) => {
                allCourses.push(course);
            })
        })
        // object ki key-vale pair hoti hi 
        // Object.values(courses) this much is representing set of list containing values , buiseness , design , rtc
        // for each value  contains further list of array of courses from buiseness , etc
        // 2nd for each for that thing
        return  allCourses;
    }

    return (
        <div>
            {
                getCourses().map( (course) => {
                    return <Card/>
                })
            }
        </div>
    )
}

export default Cards;