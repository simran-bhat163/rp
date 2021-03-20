import ValidateInput from "../../validation/ValidateInput";
//import pageImg from "../../images/page_img.png";
import { withRouter } from "react-router";
import { Component } from "react";
import { Card,  CardText, CardTitle } from 'reactstrap'; 
import Form from "./LoginForm";

class Login extends Component {
  // state variable with email and password attributes
  state = {
    Email: null,
    Password: null,
  };
  // set value to state variable
  changeHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  // submit the form
  submitHandler = (event) => {
    event.preventDefault();
    ValidateInput(this.state.Email, this.props.history);
  };
  render() {
    return (
      <div className="container">
      <div className="container center">
          <div className="container loginFormPadding">
            {/* form to take login input */}
            <Form
              changeHandler={this.changeHandler}
              submitHandler={this.submitHandler}
            />
          </div>
        </div>
        {/* display login failed message if incorrect login credentials is entered */}
      </div>
    );
  }
}

export default withRouter(Login);
