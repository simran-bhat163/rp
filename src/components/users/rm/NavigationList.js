import { NavLink } from "react-router-dom";
import Button from "../../login/Button";

const NavigationList = ({ loginTitle }) => {
  return (
    <div className="row">
      <div className="padding-top-20px"></div>
      {/* Username with profile icon */}
      <div className="col s12 m1 push-m8 right">
        <div className="row">
          <div className="col s6 m6 pull-m6 valign-wrapper">
            <h5>{loginTitle}</h5>
          </div>
          <div className="col s6 m6 push-m12">
            <NavLink to="/" className="btn btn-floating green btn-large">
              {loginTitle.toUpperCase()[0]}
            </NavLink>
          </div>
        </div>
      </div>
      {/* View existing release button */}
      <div className="col s6 m6">
        <Button
          buttonName="View Existing Release"
          iconName=""
          btnColor="light-green darken-1"
        />
      </div>
    </div>
  );
};

export default NavigationList;
