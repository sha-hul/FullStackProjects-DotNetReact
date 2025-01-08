import React, { useState, useEffect } from "react";
import RandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveContact";
import Contact from "./Contact";
import FavContact from "./FavContact";
import OtherContact from "./OtherContact";

const ContactIndex = () => {
  let phoneBookDefault = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      isFavourite: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      isFavourite: false,
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "555-123-4567",
      isFavourite: true,
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "444-567-8901",
      isFavourite: false,
    },
  ];
  //States
  const [phoneBook, setphoneBook] = useState(phoneBookDefault);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateData, setUpdatedata] = useState(undefined);
  //contact handler
  const handlerContact = (newContact) => {
    let response = validateContact(newContact);

    if (response.status === "success") {
      const len = phoneBook.length;
      const newId = len > 0 ? phoneBook[len - 1].id + 1 : 1;
      const updatePhonebook = [
        ...phoneBook,
        {
          id: newId,
          name: newContact.name,
          email: newContact.email,
          phone: newContact.phone,
          isFavourite: false,
        },
      ];
      setphoneBook(updatePhonebook);
    }
    return response;
  };

  //Contact Validation
  const validateContact = (newContact) => {
    let result = { status: "", errMsg: "" };
    const regex = {
      name: /^[a-zA-Z\s]{2,50}$/,
      phone: /^[0-9]{10}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    };
    const duplicateContact = phoneBook.filter((item) => {
      return item.name === newContact.name || item.email === newContact.email;
    });
    if (newContact.name.trim() === "" || newContact.name === null) {
      result.status = "error";
      result.errMsg = "Enter the Name";
    } else if (newContact.email.trim() === "" || newContact.email === null) {
      result.status = "error";
      result.errMsg = "Enter the email";
    } else if (!regex.email.test(newContact.email)) {
      result.status = "error";
      result.errMsg = "Enter the valid email";
    } else if (!regex.name.test(newContact.name)) {
      result.status = "error";
      result.errMsg = "Enter the valid name";
    } else if (duplicateContact.length > 0) {
      result.status = "error";
      result.errMsg = "Duplicate Contact found!!";
    } else {
      result.status = "success";
      result.errMsg = "";
    }
    return result;
  };

  //Fav Icon Validation

  const changeFav = (updateFav) => {
    setphoneBook((prevPhbook) => {
      // Clone the array to ensure immutability
      let tempPhBook = prevPhbook.map((item) => {
        if (item.id === updateFav._id) {
          // Return a new object with updated isFavourite property
          return { ...item, isFavourite: updateFav.isFavourite };
        }
        // Return the item as is if it doesn't match
        return item;
      });
      return tempPhBook;
    });
  };

  //Delete Contact

  const deleteContact = (_id) => {
    setphoneBook((prevPhbook) => {
      return prevPhbook.filter((item) => item.id !== _id);
    });
  };

  //Add Random contact

  const handlerRandomContact = (newContact) => {
    const len = phoneBook.length;
    const newId = len > 0 ? phoneBook[len - 1].id + 1 : 1;
    const updatePhonebook = [
      ...phoneBook,
      {
        id: newId,
        name: newContact.name,
        email: newContact.email,
        phone: newContact.phone,
        isFavourite: false,
      },
    ];
    setphoneBook(updatePhonebook);
  };

  //handlerRemoveAll Contact

  const handlerRemoveAll = () => {
    debugger;
    setphoneBook([]);
  };

  //handlerUpdate Contact Edit button
  const handlerUpdateContact = (data) => {
    setIsUpdate(true);
    setUpdatedata(data);
  };

  // Log state changes after updates
  // useEffect(() => {
  //   console.log(updateData); // This will log the updated updateData
  //   console.log(isUpdate); // This will log the updated isUpdate
  // }, [updateData, isUpdate]); // Dependencies: logs when updateData or isUpdate changes

  //handler Cancel

  const handlerCancel=()=>{
    setIsUpdate(false);
    setUpdatedata(undefined);
  }

  //handler update submission

  const handlerUpdate = (data) => {
    try {
      let tempPhBook = [...phoneBook];
      tempPhBook = tempPhBook.map((item) => {
        if (item.id === data.id) {
          return {
            ...item, // Copy existing properties
            email: data.email, // Update email
            name: data.name, // Update name
            phone: data.phone,
          };
        }
        return item;
      });
      setphoneBook(tempPhBook);
      setIsUpdate(false);
      setUpdatedata(undefined);
      return true;
    } 
    catch (error) {
      return false;
    }
  };

  return (
    <div className="container-fluid vw-70 p-6 m-2">
      <div className="row m-2">
        <RandomContact handlerRanCon={handlerRandomContact} />
        <RemoveAllContact handlerRemoveAllContact={handlerRemoveAll} />
      </div>
      <div
        className="row m-4"
        style={{
          borderBottom: "1px solid gray",
          boxShadow: "0px 0px 3px 0px gray",
        }}
      >
        <Contact
          contactHandler={handlerContact}
          isupdate={isUpdate}
          contactData={updateData}
          setCancel={handlerCancel}
          updateDetails={handlerUpdate}
        />
      </div>
      <div
        className="row m-4 p-2"
        style={{ background: "rgb(90, 90, 90)", borderRadius: "10px" }}
      >
        <div className="col-12 text-light">
          <p>Favorites</p>
          {phoneBook
            .filter((item) => item.isFavourite)
            .map((item) => (
              <FavContact
                deleteContact={deleteContact}
                changeFav={changeFav}
                handlerUpdateContact={handlerUpdateContact}
                contactDetail={item}
                key={item.id}
              />
            ))}
        </div>
      </div>
      <div
        className="row m-4 p-4"
        style={{
          borderBottom: "1px solid gray",
          boxShadow: "0px 0px 3px 0px gray",
          borderRadius: "10px",
        }}
      >
        <p className="text-light">Others</p>
        {phoneBook
          .filter((item) => !item.isFavourite)
          .map((contact) => (
            <OtherContact
              changeFav={changeFav}
              deleteContact={deleteContact}
              contactDetail={contact}
              key={contact.id}
            />
          ))}
      </div>
    </div>
  );
};

export default ContactIndex;