import React, { useEffect } from "react";
import axios from "axios";

const Instructor = (props) => {
  // useEffect(() => {
  //   return () => {
  //     console.log("5. Runs on unmount Instructor");
  //   };
  // }, []);

  const handlerAddCount=(e)=>{
    props.updateCount();
  }

  const handlerremoveAll=()=>{
    props.removeAll();
  }

  return (
    <div className="container text-light">
      <div className="row">Instructor :<br/> {props.insDetail.instructor}</div>
      <div className="row">Student count : {props.insDetail.studentCount}</div>
      <button className="btn btn-success mx-2" onClick={handlerAddCount}>Add Student</button>
      <button className="btn btn-danger" onClick={handlerremoveAll}>Remove All</button>
      {props.insDetail.student.map((stu, index) => (
        <div className="row" key={index}>
          student : {stu}
        </div>
      ))}
    </div>
  );
};

export default Instructor;