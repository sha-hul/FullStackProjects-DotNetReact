import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'; 

const StudentReview=()=>{
  return (
    <div style={{ display: "inline px-6" }}>
      <FontAwesomeIcon icon={faThumbsUp} className="text-success px-2 " style={{cursor:"pointer"}} />
      <FontAwesomeIcon icon={faThumbsDown} className="text-danger " style={{cursor:"pointer"}}/>
    </div>
  );
}

export default StudentReview;
