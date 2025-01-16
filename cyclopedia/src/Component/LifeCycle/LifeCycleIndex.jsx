import Instructor from "./Instructor";
import React, { useEffect, useState, useRef, useId } from "react";
import axios from "axios";

const LifeCycleIndex = () => {
  const [insDetail, setInsDetails] = useState(() => ({
    instructor: "",
    student: [],
    studentCount: 0,
    hideInstructor: true,
  }));

  const [formName, setFormName] = useState("");
  const [formFeedback, setFeedback] = useState("");
  //Wrong Implementation
  // const [totalRender, settotalRender] = useState(0);

  //Correct Implementation by useRef
  const totRender = useRef(0);
  const focusTextarea = useRef(null);
  const inputId = useId();

  useEffect(() => {
    // console.log("1. Runs on every render");
    // settotalRender((prev)=> {return prev+1})
    // console.log(totalRender);

    totRender.current = totRender.current + 1;
    console.log("Total Render : " + totRender.current);
    focusTextarea.current.focus();
  });

  // API Handler
  const getRandomData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      return response;
    } catch (error) {
      // console.error("Error fetching random user:", error);
      throw error;
    }
  };

  useEffect(() => {
    const addRandomContact = async () => {
      try {
        const conData = await getRandomData();
        const result = conData.data.results[0];
        const instructorRandom = `Name : ${result.name.first} ${result.name.last}`;

        setInsDetails((prevInsDetails) => ({
          ...prevInsDetails,
          instructor: instructorRandom,
        }));
      } catch (error) {
        console.error("Failed to fetch random contact:", error);
      }
    };

    console.log("2. Runs on initial render");
    if (insDetail.hideInstructor) {
      addRandomContact();
    }
  }, []); // Dependency array added

  useEffect(() => {
    console.log("3. Runs on render studentCount");
    const addRandomContact = async () => {
      try {
        const conData = await getRandomData();
        const result = conData.data.results[0];
        const instructorRandom = `Name : ${result.name.first} ${result.name.last}`;

        setInsDetails((prevInsDetails) => {
          const updatedDetails = {
            ...prevInsDetails,
            student: [...prevInsDetails.student, instructorRandom], // Correct way to add a new student
          };

          // Save the updated details to localStorage
          localStorage.setItem("studentList", JSON.stringify(updatedDetails));

          return updatedDetails;
        });

        // Retrieve and log the updated details from localStorage
        const storedDetails = JSON.parse(localStorage.getItem("studentList"));
        // console.log(storedDetails);
      } catch (error) {
        console.error("Failed to fetch random contact:", error);
      }
    };
    if (insDetail.studentCount != 0) {
      addRandomContact();
    }
    return () => {
      // console.log("Cleanup for hideInstructor change");
    };
  }, [insDetail.studentCount]);

  // useEffect(() => {
  //   return () => {
  //     // console.log("4. Runs on unmount");
  //   };
  // }, []);

  const handletoggleInstructor = () => {
    setInsDetails((prevState) => ({
      ...prevState,
      hideInstructor: !prevState.hideInstructor,
    }));
  };

  //Update std count
  const updateCount = (e) => {
    setInsDetails((prevInsDetails) => {
      return {
        ...prevInsDetails,
        studentCount: prevInsDetails.studentCount + 1,
      };
    });
  };

  //remove All

  const removeAll = () => {
    setInsDetails((prevInsDetails) => {
      const updatedDetails = {
        ...prevInsDetails,
        student: [], // Correct way to add a new student
        studentCount: 0,
      };

      // Save the updated details to localStorage
      localStorage.setItem("studentList", JSON.stringify(updatedDetails));

      return updatedDetails;
    });
    // Retrieve and log the updated details from localStorage
    const storedDetails = JSON.parse(localStorage.getItem("studentList"));
    // console.log(storedDetails);
  };

  return (
    <div className="container-fluid">
      <h6 className="text-light">Total Render : {totRender.current} </h6>
      <i
        className={`bi ${
          insDetail.hideInstructor ? "bi-toggle-on" : "bi-toggle-off"
        } btn btn-success btn-sm`}
        onClick={handletoggleInstructor}
      ></i>
      {insDetail.hideInstructor ? (
        <Instructor
          insDetail={insDetail}
          updateCount={updateCount}
          removeAll={removeAll}
        />
      ) : null}
      <br />
      <h3 className="text-primary" >Feedback Form</h3>
      <label className="text-light" htmlFor={`${inputId}-Name`}>Write your Name</label>
      <div className="text-light p-4">
        <input
          id={`${inputId}-Name`}
          type="text"
          placeholder="Name.."
          className="form-control"
          onChange={(e) => setFormName(e.target.value)}
        />{" "}
        <br />
        <p className="text-success" htmlFor={`${inputId}-Name`}>{formName}</p>
        <br/>
      <label htmlFor={`${inputId}-Feedback`}>Write your Feedback</label>
      <br/>
      <br/>

        <textarea
          ref={focusTextarea}
          id={`${inputId}-Feedback`}
          type="text"
          placeholder="Feedback.."
          className="form-control"
          onChange={(e) => setFeedback(e.target.value)}
        />{" "}
        <br />
        <p className="text-info">{formFeedback}</p>
      </div>
    </div>
  );
};

export default LifeCycleIndex;
