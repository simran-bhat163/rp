// Profile icon with Username
const Profile = ({ loginTitle }) => {
  return (
    <div className="row">
      <div className="col s6 m6 pull-m10 valign-wrapper">
        <h5>{loginTitle}</h5>
      </div>
      <div className="col s6 m6 push-m10">
        <a
          data-target="dropdown1"
          href="#"
          className="btn btn-floating green btn-large dropdown-trigger btn"
        >
          {loginTitle.toUpperCase()[0]}
        </a>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!">Setting</a>
          </li>
          <li className="divider" tabindex="-1"></li>
          <li>
            <a href="#!">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
