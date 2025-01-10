import Instructor from "./Instructor";
import React, { useState, useEffect } from "react";

const LifeCycleIndex = () => {
  const [insDetail, setInsDetails] = useState({
    instructor: "",
    student: [],
    studentCount: 0,
    hideInstructor: false,
  });

  useEffect(() => {
    console.log("1. Runs on every render");
  });

  useEffect(() => {
    console.log("2. Runs on initial render");
  }, []);

  useEffect(() => {
    console.log("3. Runs when hideInstructor changes");

    return () => {
      console.log("Cleanup for hideInstructor change");
    };
  }, [insDetail.hideInstructor]);

  useEffect(() => {
    return () => {
      console.log("4. Runs on unmount");
    };
  }, []);

  const handletoggleInstructor = () => {
    setInsDetails((prevState) => ({
      ...prevState,
      hideInstructor: !prevState.hideInstructor,
    }));
  };

  return (
    <div>
      <i
        className={`bi ${
          insDetail.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
        } btn btn-success btn-sm`}
        onClick={handletoggleInstructor}
      ></i>
      {insDetail.hideInstructor ? <Instructor insDetail={insDetail} /> : null}
    </div>
  );
};

export default LifeCycleIndex;
