import React from "react";
import "../style.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { createNewChat } from "../../actionCreators/ChatAction";
import { showDeleteContactForm } from "../../actionCreators/MainAction";

const itemListContact = (props) => {
  const addNewChat = (data) => {
    props.createNewChat(data);

    // props.history.push({
    //   pathname: "/",
    // });
  };
  const showFormDelete = () => {
    props.showDeleteContactForm(props.dataContacts);
  };

  const contactPic = (picture) => {
    const url = process.env.REACT_APP_API_URL;
    const image = `${url}/${picture}`;
    const imageNotFound = `${url}/public/usersImage/default-user-icon.jpg`;
    return {
      backgroundImage: `url(${image}), url(${imageNotFound})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  };
  return (
    <div className="list-group-item list-group-item-action active py-2 px-1 listcontact-chat">
      <button className="w-100 text-white listcontact-chat">
        <div className="d-flex d-row">
          <div
            className="chat-profile-pic rounded-circle"
            style={contactPic(props.dataContacts.image)}
          ></div>
          <div className="section-chat-div">
            <div className="d-flex d-row">
              <h6 className="my-0 name-chat">{props.dataContacts.username}</h6>
              <span className={`dot bg-${props.dataContacts.status === 'online' ? 'success' : 'danger'}`} />
            </div>
            <p className="preview-chat my-0 text-left">
              {props.dataContacts.about}
            </p>
          </div>
          <div className="d-flex d-row ml-auto">
            <Link
              className="align-self-center"
              to={`/app/chat/${props.dataContacts._id}`}
            >
              <p
                onClick={() => addNewChat(props.dataContacts)}
                className="contact-icon2 my-0"
              >
                <i className="fas fa-comment" />
              </p>
            </Link>
            <p onClick={showFormDelete} className="contact-icon2 my-0">
              <i className="fas fa-user-times" />
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  showDeleteContactForm,
  createNewChat,
};

export default connect(null, mapDispatchToProps)(itemListContact);
