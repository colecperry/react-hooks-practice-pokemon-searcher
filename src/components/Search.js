import React, {useState} from "react";

function Search({searchInput, setSearchInput}) {

// Deliverable Search, Step 2: Create handleSearch function, taking in our event, 
// and setting our search input state by passing down setter function from Pokemon Page
// for step 3, go to Pokemon Page
  const handleSearch = (e) => {
  setSearchInput(e.target.value)
  }


  // Deliverable Search, Step 1: Add an onchange event handler to the search bar 
  // calling back to function handleSearch
  // Don't forget to pass in serchInput for the value of the searchbar to make it
  // a controlled form, and pass down that variable as props from Pokemon Page
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch} value={searchInput}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
