import React, { useEffect } from "react";

const Instructor = ({ insDetail }) => {
  useEffect(() => {
    return () => {
      console.log("5. Runs on unmount Instructor");
    };
  }, []);

  return (
    <div className="container">
      <div className="row">Instructor : {insDetail.instructor}</div>
      {insDetail.student.map((stu, index) => (
        <div className="row" key={index}>
          student : {stu.student}
        </div>
      ))}
      <div className="row">Student count : {insDetail.studentCount}</div>
    </div>
  );
};

export default Instructor;