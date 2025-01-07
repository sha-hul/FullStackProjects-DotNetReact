const Contact = (props) => {
  const submitContact = (e) => {
    e.preventDefault();
    let name = e.target.elements.contactName.value.trim();
    let email = e.target.elements.contactEmail.value.trim();
    let phone = e.target.elements.contactPhone.value.trim();
    let newContact = {
      name,
      email,
      phone,
      isFavourite: false,
    }; 
    let response = props.contactHandler(newContact);
    if (response.status ==="success") {
      document.getElementById("contact-form").reset();
      alert("Contact Added Successfully 💯")
    }
    if (response.status ==="error") {

      alert(response.errMsg);
    }
  };
  return (
    <div className="col-12">
      <form onSubmit={submitContact} id="contact-form">
        <div className="row">
          <div className="col-12">
            <p className="text-light p-1">Add a new Contact</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-4">
            <input
              type="text"
              placeHolder="Name.."
              name="contactName"
              maxLength={30}
              className="w-100"
            />
          </div>
          <div className="col-4">
            <input
              type="email"
              placeHolder="Email.."
              maxLength={30}
              name="contactEmail"
              className="w-100"
            />
          </div>
          <div className="col-4">
            <input
              type="number"
              placeHolder="Phone.."
              maxLength={10}
              name="contactPhone"
              className="w-100"
            />
          </div>
        </div>
        <div className="row p-4">
          <div className="col-4"></div>
          <div className="col-4">
            <button type="submit" className="btn btn-primary w-100 p-2">
              Create Contact
            </button>
          </div>
          <div className="col-4"></div>
        </div>
      </form>
    </div>
  );
};

export default Contact;