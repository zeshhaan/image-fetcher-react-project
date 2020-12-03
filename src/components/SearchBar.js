import React from "react";

class SearchBar extends React.Component {
  state = { term: "Marhaba" };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label className="field">
            {" "}
            Image Search
            <input
              style={{ marginTop: "10PX" }}
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Type your search term..."
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
