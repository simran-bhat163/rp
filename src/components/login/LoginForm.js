import Button from "./Button";
import Input from "./Input";
import avatar from "../../images/avatar.jpeg";
const Form = ({ submitHandler, changeHandler }) => {
  return (
    <div className="row">
      <div className="card">
        <div className="card-panel grey-lighten-4 input-field col s12 formStyle">
          <div className="loginFormPadding">
         < img src={avatar} className="avatar" alt="images/avatar.jpeg"/>

            <form onSubmit={(event) => submitHandler(event)}>
              {/* Email input field */}
              <Input inputType="Email" changeHandler={changeHandler} />
              {/* Password input field */}
              <Input inputType="Password" changeHandler={changeHandler} />
              {/* submit button */}
              <Button
                buttonName="Submit"
                iconName="send"
                btnColor="light-green darken-1"
                clickHandler="noHandler"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
