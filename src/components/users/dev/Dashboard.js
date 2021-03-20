import { Component } from "react";
import Hotfix from "../../release/Hotfix";
import CreatableSelect from "react-select/creatable";
// import DevForm from "./DevForm";

class Dashboard extends Component {
  state = {
    option: null,
    optionList: [
      { label: "Hotfix Relese", value: "1" },
      { label: "Option 2", value: "Option 2" },
      { label: "Option 3", value: "Option 3" },
    ],
  };
  clickHandler = (event) => {
    if (event !== null) {
      const option = event.value;
      this.setState({ option });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="padding-top-10px"></div>
        <CreatableSelect
          placeholder="Select Release Type"
          // isClearable
          options={this.state.optionList}
          onChange={(event) => {
            this.clickHandler(event);
          }}
          defaultValue="Select release type"
          maxMenuHeight={150}
        />
        {this.state.option === "1" ? (
          <Hotfix />
        ) : (
          <>
            <p>Nothing Selected</p>
          </>
        )}
      </div>
    );
  }
}

export default Dashboard;
