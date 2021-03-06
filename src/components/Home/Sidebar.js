import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { NavLink, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../style.css";

const Sidebar = () => {
  let match = useRouteMatch();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const LogoutConfirmation = () => {
    setShow(!show);
  };
  const handleLogout = () => {
    history.push("/logout");
  };

  return (
    <div style={{ width: "75px", height: "100vh", backgroundColor: "#1f2d3c" }}>
      <div className="list-group">
        <NavLink
          to={match.url}
          exact={true}
          className="list-group-item list-group-item-action px-0 text-center"
        >
          <i className="fas fa-comment-dots fa-lg" />
          <div>
            <small>Chat</small>
          </div>
        </NavLink>

        <NavLink
          to={`${match.url}/profile`}
          className="list-group-item list-group-item-action px-0 text-center"
        >
          <i className="fas fa-user-circle fa-lg" />
          <div>
            <small>Profile</small>
          </div>
        </NavLink>
        {/* <Link to={`${match.url}/group`} className="list-group-item list-group-item-action">
          Group
        </Link> */}
        <NavLink
          to={`${match.url}/listContact`}
          className="list-group-item list-group-item-action px-0 text-center"
        >
          <i className="fas fa-address-book fa-lg" />
          <div>
            <small>Contacts</small>
          </div>
        </NavLink>
        <NavLink
          to={`${match.url}/about`}
          className="list-group-item list-group-item-action px-0 text-center"
        >
          <i className="fas fa-info-circle fa-lg" />
          <div>
            <small>About</small>
          </div>
        </NavLink>

        <button
          onClick={LogoutConfirmation}
          className="list-group-item list-group-item-action logout-sidebar px-0 text-center"
        >
          <i className="fas fa-sign-out-alt fa-lg text-danger" />
          <div>
            <small className="text-danger">Logout</small>
          </div>
          <Modal show={show} onHide={LogoutConfirmation}>
            <Modal.Header closeButton>
              <Modal.Title className="h5">
                Are You Sure Want to Logout?
              </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="secondary" onClick={LogoutConfirmation}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleLogout}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
