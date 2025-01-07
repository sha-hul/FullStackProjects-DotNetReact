import PropTypes, { func } from "prop-types";

const FavContact = (props) => {
  const { name, email, phone, isFavourite, id } = props.contactDetail;
  const styleCursor = { cursor: "pointer" };

  //Change Fav Icon
  const callchangeFav = (e) => {
    const isFav = !isFavourite;
    let updateFav = {
      _id: id,
      isFavourite: isFav,
    };
    props.changeFav(updateFav);
  };

  //Delete Contact
  const calldeleteContact = () => {
    props.deleteContact(id);
  };

  //Update Contact
  const callupdateContact=()=>{
    const _contactDetail = {
      id,
      name,
      email,
      phone,
      isFavourite,
    };
    props.handlerUpdateContact(_contactDetail);
  }

  return (
    <div
      className="row p-2 m-2 "
      style={{
        borderBottom: "1px solid white",
        boxShadow: "0px 0px 1px 0px white",
        borderRadius: "10px",
      }}
    >
      <div className="col-2">
        <img
          src={`https://ui-avatars.com/api/?name=${name}`}
          alt="profile"
          width="100"
        />
      </div>
      <div className="col-6">
        <h4 className="text-warning">{name}</h4>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <div className="col-2">
        {isFavourite ? (
          <i
            className="bi bi-star-fill text-warning fs-1"
            onClick={callchangeFav}
            style={styleCursor}
          ></i>
        ) : (
          <i
            class="bi bi-star text-warning fs-1"
            onClick={callchangeFav}
            style={styleCursor}
          ></i>
        )}
      </div>
      <div className="col-2 my-3">
        <i
          className="bi bi-pencil-square text-primary fs-4 p-2 cursor-pointer"
          style={styleCursor}
          onClick={callupdateContact}
        ></i>
        <i
          className="bi bi-archive-fill text-danger fs-4"
          onClick={calldeleteContact}
          style={styleCursor}
        ></i>
      </div>
    </div>
  );
};

FavContact.propTypes={
  handlerUpdateContact : PropTypes.func.isRequired,
}

export default FavContact;