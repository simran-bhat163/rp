import { Component } from "react";

class DevForm extends Component {
  render() {
    return (
      <form>
        <div className="row">
          <div className="input-field col s6">
            <input id="item" type="text" className="validate" />
            <label htmlFor="item">Item</label>
          </div>
          <div className="input-field col s6">
            <input id="POD" type="text" />
            <label htmlFor="POD">POD</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="release_type" type="text" />
            <label htmlFor="release_type">Release Type</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              id="description"
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="description">Description</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="impact_areas" type="text" />
            <label htmlFor="impact_areas">Impact Areas</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="release_status" type="text" />
            <label htmlFor="release_status">Release Status</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="developer_poc" type="text" />
            <label htmlFor="developer_poc">Developer Point of Contact</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="tor" type="text" />
            <label htmlFor="tor">Type of Release</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea id="pr_link" className="materialize-textarea"></textarea>
            <label htmlFor="pr_link">PR Link</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="release_date"
              type="text"
              setDefaultDate="true"
              class="datepicker"
            />
            <label htmlFor="release_date">Release Date</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="release_window" type="text" />
            <label htmlFor="release_window">Release Window</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="approved_by" type="text" />
            <label htmlFor="approved_by">Approved By</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="heavy_sql_alter" type="text" />
            <label htmlFor="heavy_sql_alter">Heavy SQL Alter</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="QA_by" type="text" />
            <label htmlFor="QA_by">QA By</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="srd" type="text" className="datepicker" />
            <label htmlFor="srd">Source Release Date</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="soh" type="text" className="datepicker" />
            <label htmlFor="soh">
              Source of Hotfix (Previous release date)
            </label>
          </div>
        </div>
      </form>
    );
  }
}

export default DevForm;
