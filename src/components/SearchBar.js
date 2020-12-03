import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(event) {
    console.log("input is clicked");
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label className="field">
            {" "}
            Image Search
            <input
              type="text"
              onClick={this.onInputClick}
              onChange={this.onInputChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
