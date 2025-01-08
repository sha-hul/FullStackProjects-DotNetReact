import React, { useEffect } from "react";

const Contact = (props) => {
  //Form Submission

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
    if (response.status === "success") {
      document.getElementById("contact-form").reset();
      alert("Contact Added Successfully 💯");
    }
    if (response.status === "error") {
      alert(response.errMsg);
    }
  };

  //Update button
  const isUpdate = props.isupdate;

  //Display Update Contact
  useEffect(() => {
    if (isUpdate) {
      displayContact();
    }
  },[isUpdate]);
  const displayContact = () => {
    const tempContact = { ...props.contactData }; // Create a copy to avoid mutating props

    // Validate and clean the phone number
    const regexPhno = /^[0-9]+$/;
    if (!regexPhno.test(tempContact.phone)) {
      // Remove non-digit characters
      const cleanedPhone = tempContact.phone.toString().replace(/[^0-9]/g, "");
      tempContact.phone = cleanedPhone;
    }

    // Set values to the input fields
    const nameField = document.getElementsByName("contactName")[0];
    const emailField = document.getElementsByName("contactEmail")[0];
    const phoneField = document.getElementsByName("contactPhone")[0];

    if (nameField) nameField.value = tempContact.name;
    if (emailField) emailField.value = tempContact.email;
    if (phoneField) phoneField.value = tempContact.phone;
  };

  //call Cancel

  const callCancel = () => {
    props.setCancel();

    // Set values to the input fields
    const nameField = document.getElementsByName("contactName")[0];
    const emailField = document.getElementsByName("contactEmail")[0];
    const phoneField = document.getElementsByName("contactPhone")[0];

    if (nameField) nameField.value = "";
    if (emailField) emailField.value = "";
    if (phoneField) phoneField.value = "";
  };

  //call UpdateHandler

  const callUpdateHandler = (e) => {
    e.preventDefault();
    const name = document.getElementsByName("contactName")[0].value;
    const email = document.getElementsByName("contactEmail")[0].value;
    const phone = document.getElementsByName("contactPhone")[0].value;
    let updateContact = {
      id: props.contactData.id,
      name,
      email,
      phone,
      isFavourite: false,
    };
    let res = props.updateDetails(updateContact);
    if (res) {
      // Set values to the input fields
      const nameField = document.getElementsByName("contactName")[0];
      const emailField = document.getElementsByName("contactEmail")[0];
      const phoneField = document.getElementsByName("contactPhone")[0];

      if (nameField) nameField.value = "";
      if (emailField) emailField.value = "";
      if (phoneField) phoneField.value = "";
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
        <div className="row">
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
              name="contactPhone"
              className="w-100"
            />
          </div>
        </div>
        {isUpdate ? (
          <div className="row p-4">
            <div className="col-3"></div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-primary w-100 p-2"
                onClick={callUpdateHandler}
              >
                Update
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-primary w-100 p-2"
                onClick={callCancel}
              >
                cancel
              </button>
            </div>
            <div className="col-3"></div>
          </div>
        ) : (
          <div className="row p-4">
            <div className="col-4"></div>
            <div className="col-4">
              <button type="submit" className="btn btn-primary w-100 p-2">
                Create Contact
              </button>
            </div>
            <div className="col-4"></div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
