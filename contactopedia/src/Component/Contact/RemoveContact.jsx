import PropTypes from "prop-types";

const RemoveAllContact = (props) => {
  //RemoveAllContacts
  const removeAll = () => {
    props.handlerRemoveAllContact();
  };

  return (
    <div className="col-6">
      <button onClick={removeAll} className="btn btn-danger w-100 p-2">
        Remove All Contacts
      </button>
    </div>
  );
};

RemoveAllContact.propTypes = {
  handlerRemoveAllContact: PropTypes.func.isRequired,
};

export default RemoveAllContact;