import Dashboard from "../users/dev/Dashboard";
import NavigationList from "../users/dev/NavigationList";

const LoginSuccess = (props) => {
  let btnOption = null;
  var display = <Dashboard />;
  const loginTitle = props.location.title ? props.location.title : "";
  const clickHandler = (value) => {
    btnOption = value.target.id;
    if (btnOption === "New Release") {
      display = "Nothing";
    }
    console.log(display);
  };
  return (
    <div>
      <NavigationList loginTitle={loginTitle} clickHandler={clickHandler} />
      {display}
    </div>
  );
};

export default LoginSuccess;
