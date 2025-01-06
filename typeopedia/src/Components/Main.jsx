import { faker } from "@faker-js/faker";
import StudentReview from "./StudentReview";

const Main=()=>{
  const totalLec = 3;
  return (
    <div>
      <p>In the course we will learn react by TaskOPedia</p>
      <p>Total Number of lectures : {totalLec} </p>
      <ul>
        <li>Function and Class component</li>
        <li>Life cycle of react</li>
        <li>React Props</li>
      </ul>

      <input
        type="text"
        readOnly={false}
        maxLength={6}
        placeHolder="Enter the Author Name.."
      ></input>
      <button
        type="button"
        style={{ marginLeft: "10px" }}
        className="btn btn-primary"
      >
        Go
      </button>
      <div className="container-fluid">
        <h4 className="text-info">Student Enrollment</h4>
      </div>
    </div>
  );
}

const Student=(props)=> {
  const stuName = props.stuname;
  const experience = props.exp;

  return (
    <div className="container p-4">
      <div className="row border">
        <div className="col-2 p-0">
          <img
            // src={faker.image.avatar()}
            src={`https://ui-avatars.com/api/?name=${stuName}`}
            width={100}
            alt={`${stuName}'s avatar`}
          />
        </div>
        <div className="col-8 p-0">
          {stuName} has {experience} years of experience as a Software Engineer.
        </div>
        <div className="col-2 p-0">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export { Main, Student };