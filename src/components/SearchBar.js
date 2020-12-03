import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label className="field">
            {" "}
            Image Search
            <input type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
