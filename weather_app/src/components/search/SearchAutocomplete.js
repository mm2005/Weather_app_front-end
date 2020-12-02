import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SearchAutocomplete = (props) => {
  const autocompleteUrl = `https://localhost:44336/api/autocomplete/${props.searchedCity}`;
  const [state, setState] = useState({
    suggestions: [],
  });

  useEffect(() => {
    if (props.searchedCity !== "") {
      setVisibility(true);
      axios
        .get(autocompleteUrl)
        .then((res) =>
          setState({
            suggestions: res.data,
          })
        )
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props.searchedCity, autocompleteUrl]);

  const setVisibility = (isVisible) => {
    const dropdownContainer = document.querySelector(".dropdown");
    dropdownContainer.style.display = isVisible ? "block" : "none";
  };

  const clickHandler = (city) => {
    props.setSearchedCity(city);
    props.setInputText("");
    setVisibility(false);
  };

  const mouseEnterHandler = (e) => {
    e.currentTarget.style.color = "lightblue";
  };

  const mouseLeaveHandler = (e) => {
    e.currentTarget.style.color = "black";
  };

  return (
    <DropdownContainer className="dropdown">
      {state.suggestions !== undefined &&
        state.suggestions.map((suggestion) => (
          <DropdownItem
            key={suggestion.city + suggestion.countryCode + suggestion.state}
            onClick={(e) => {
              clickHandler(suggestion.city);
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            {suggestion.countryCode === "USA" ? (
              <React.Fragment>
                {suggestion.city}, {suggestion.state}, {suggestion.country}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {suggestion.city}, {suggestion.country}
              </React.Fragment>
            )}
          </DropdownItem>
        ))}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: absolute;
  z-index: 1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  width: inherit;
  background: white;
`;

const DropdownItem = styled.div`
  font-size: 15px;
  font-family: "Gill Sans", sans-serif;
  padding: 5px;
  cursor: pointer;
`;

export default SearchAutocomplete;
