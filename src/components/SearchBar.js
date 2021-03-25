import React, { useState } from "react";
const SearchBar = ({ whenSubmit }) => {
  const [term, setTerm] = useState("");
  const onInputChange = (e) => {
    setTerm(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    whenSubmit(term);
  };
  return (
    <div className="ui segment ">
      <form className="ui form " onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
