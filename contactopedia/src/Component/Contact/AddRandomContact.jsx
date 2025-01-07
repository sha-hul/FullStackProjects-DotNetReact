import axios from "axios";
import PropTypes from "prop-types";

const RandomContact = (props) => {
  // Random Contact call
  const addRandomContact = async () => {
    try {
      const conData = await getRandomData();
      const result = conData.data.results[0];
      const name = `${result.name.first} ${result.name.last}`;
      const email = result.email;
      const phone = result.phone;

      props.handlerRanCon({
        name,
        email,
        phone,
      });
    } catch (error) {
      console.error("Failed to fetch random contact:", error);
    }
  };

  // API Handler
  const getRandomData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      return response;
    } catch (error) {
      console.error("Error fetching random user:", error);
      throw error;
    }
  };

  return (
    <div className="col-6">
      <button className="btn btn-success w-100 p-2" onClick={addRandomContact}>
        Add Random Contact
      </button>
    </div>
  );
};

RandomContact.propTypes = {
  handlerRanCon: PropTypes.func.isRequired,
};

export default RandomContact;
