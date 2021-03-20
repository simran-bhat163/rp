const Button = ({ buttonName, iconName, btnColor, clickHandler }) => {
  // create button styling class variable
  const buttonColor =
    "btn " + btnColor + " waves-effect waves-light btn-large btnStyling";
  let btnClickHandler = () => null;
  if (buttonName !== "Submit") {
    btnClickHandler = clickHandler;
  }
  return (
    <div className="input-field col s12">
      <button
        id={buttonName}
        className={buttonColor}
        onClick={(event) => btnClickHandler(event)}
      >
        {buttonName}
        {/* <i className="material-icons right">{iconName}</i> */}
      </button>
    </div>
  );
};

export default Button;
