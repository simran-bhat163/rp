import { NavLink } from "react-router-dom";
import Button from "../../login/Button";

const NavigationList = ({ loginTitle, clickHandler }) => {
  return (
    <div className="row">
      <div className="padding-top-20px"></div>
      {/* new release button */}
      <div className="col s6 m5 pull-m1">
        <Button
          buttonName="New Release"
          iconName=""
          btnColor="light-green darken-1"
          clickHandler={clickHandler}
        />
      </div>
      {/* View existing release button */}
      <div className="col s6 m6 pull-m4">
        <Button
          buttonName="View Existing Release"
          iconName=""
          btnColor="lime darken-4"
          clickHandler={clickHandler}
        />
      </div>
      {/* Username with profile icon */}
      <div className="col s12 m1 pull-m1">
        <div className="row">
          <div className="col s6 m6 pull-m8">
            <h5>{loginTitle}</h5>
          </div>
          <div className="col s6 m6">
            <NavLink to="/" className="btn btn-floating green btn-large">
              {loginTitle.toUpperCase()[0]}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationList;
