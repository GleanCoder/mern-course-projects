import React, { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let courses = props.courses;
  let category = props.category;
  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }
  const [likedCourse, setLikedCourse] = useState([]);

  return (
    <div className=" flex flex-wrap justify-center gap-4 mb-4 ">
      {!courses ? (
        <p>Not Found</p>
      ) : (
        getCourses().map((course) => {
          return (
            <Card
              key={course.id}
              course={course}
              likedCourse={likedCourse}
              setLikedCourse={setLikedCourse}
            ></Card>
          );
        })
      )}
    </div>
  );
}
export default Cards;
