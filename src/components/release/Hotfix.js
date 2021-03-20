import { Component } from "react";
import ValidateURL from "../../validation/ValidateURL";
import Button from "../login/Button";
import DatePicker from "../login/DatePicker";

class Hotfix extends Component {
  state = {
    item: null,
    pod: null,
    releaseType: null,
    description: null,
    impact: null,
    impactAreas: null,
    releaseStatus: null,
    developerPOC: null,
    tor: null,
    prLink: null,
    releaseDate: null,
    releaseWindow: null,
    approvedBy: null,
    heavySQLAlter: null,
    qaBy: null,
    srd: null,
    soh: null,
  };
  changeHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    ValidateURL(this.state.prLink)
      ? console.log(this.state)
      : alert("Enter Valid PR Link");
  };
  render() {
    return (
      <div className="card z-depth-2 formStyle1">
        <div className="padding-top-20px">
          <form onSubmit={(event) => this.submitHandler(event)}>
            <div className="row">
              <div className="input-field col s12 m6">
                <input
                  id="item"
                  type="text"
                  className="validate"
                  onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="item">Item</label>
              </div>
              <div className="input-field col s12 m3">
                <input
                  id="pod"
                  type="text"
                  onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="pod">POD</label>
              </div>
              <div className="input-field col s12 m3">
                <input
                  id="releaseType"
                  type="text"
                  onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="releaseType">Release Type</label>
              </div>
            </div>
            {/* <div className="row">
          
        </div> */}
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="description"
                  className="materialize-textarea"
                  onChange={(event) => this.changeHandler(event)}
                ></textarea>
                <label htmlFor="description">Description</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m4">
                <input
                  id="impact"
                  type="text"
                  onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="impact">Impact</label>
              </div>
              <div className="input-field col s12 m4">
                <input
                  id="impactAreas"
                  type="text"
                  onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="impactAreas">Impact Areas</label>
              </div>
              {/* </div>
        <div className="row"> */}
              <div className="input-field col s12 m4">
                <input
                  id="releaseStatus"
                  type="text"
                  onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="releaseStatus">Release Status</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m6">
                <input
                  id="developerPOC"
                  type="text"
                  onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="developerPOC">Developer Point of Contact</label>
              </div>
              {/* </div>
        <div className="row"> */}
              <div className="input-field col s12 m6">
                <input
                  id="tor"
                  type="text"
                  onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="tor">Type of Release</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m3 valign-wrapper">
                {/* <input
                id="releaseSate"
                type="text"
                className="datepicker"
                onChange={(event) => this.changeHandler(event)}
              /> */}
                <DatePicker
                  changeHandler={(event) => this.changeHandler(event)}
                  disabled="true"
                />
                {/* <label htmlFor="releaseSate">Release Date</label> */}
              </div>
              <div className="input-field col s9">
                <textarea
                  id="prLink"
                  className="materialize-textarea"
                  onChange={(event) => this.changeHandler(event)}
                ></textarea>
                <label htmlFor="prLink">PR Link</label>
              </div>
              {/* </div>
          <div className="row"> */}
              {/* </div>
        <div className="row"> */}
              <div className="input-field col s12 m4">
                <input
                  id="releaseWindow"
                  type="text"
                  onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="releaseWindow">Release Window</label>
              </div>
              {/* </div>
        <div className="row"> */}
              <div className="input-field col s12 m4">
                <input
                  id="approvedBy"
                  type="text"
                  onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="approvedBy">Approved By</label>
              </div>
              {/* </div>
        <div className="row"> */}
              <div className="input-field col s12 m4">
                <input
                  id="heavySQLAlter"
                  type="text"
                  onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="heavySQLAlter">Heavy SQL Alter</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m4">
                <input
                  id="qaBy"
                  type="text"
                  onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="qaBy">QA By</label>
              </div>
              {/* </div>
        <div className="row"> */}
              {/* <div className="input-field col s12 m4"> */}
              {/* <input
                id="srd"
                type="text"
                className="datepicker"
                onChange={(event) => this.changeHandler(event)}
              />
              <label htmlFor="srd">Source Release Date</label> */}
              <div className="col s12 m4">
                {/* <input
                id="releaseSate"
                type="text"
                className="datepicker"
                onChange={(event) => this.changeHandler(event)}
              /> */}
                <DatePicker
                  changeHandler={(event) => this.changeHandler(event)}
                  disabled={false}
                />
                {/* <label htmlFor="releaseSate">Release Date</label> */}
              </div>
              {/* </div> */}
              {/* </div>
        <div className="row"> */}
              <div className="input-field col s12 m4">
                <input
                  id="soh"
                  type="text"
                  className="datepicker"
                  onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="soh">Source of Hotfix (Previous release)</label>
              </div>
            </div>
            <div className="input-field col s12">
              <Button
                buttonName="Submit"
                iconName="send"
                btnColor="red accent-3"
              />
            </div>
            <div className="padding-top-10px"></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Hotfix;
