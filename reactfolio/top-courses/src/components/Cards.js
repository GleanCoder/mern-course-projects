import React from "react";
import Card from "./Card";
function Cards({ courses }) {
  let allCourses = [];
  function getCourses() {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  }

  return (
    <div>
      {!courses ? (
        <p>Not Found</p>
      ) : (
        getCourses().map((course) => {
          return <Card key={course.id} course={course}></Card>;
        })
      )}
    </div>
  );
}
export default Cards;
