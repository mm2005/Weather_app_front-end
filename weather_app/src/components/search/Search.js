import React, { useState, useContext } from "react";
import styled from "styled-components";
import CityProvider from "../../context/CityProvider";
import SearchAutocomplete from "./SearchAutocomplete";

const Search = () => {
    const [city, setCity] = useContext(CityProvider);
    const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = () => {
    setCity(searchTerm.toLowerCase());
    setSearchTerm("");
  };

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  const inputFieldChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
      <React.Fragment>
        <SearchBar className="search">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={inputFieldChangeHandler}
            onKeyDown={keyDownHandler}
          />
          <SearchButton onClick={submitHandler}>
            <i className="fa fa-search" />
          </SearchButton>
          <SearchAutocomplete
            searchedCity={searchTerm}
            setSearchedCity={setCity}
            setInputText={setSearchTerm}
          />
        </SearchBar>
      </React.Fragment>
  );
};

const SearchBar = styled.div`
  width: 400px;
  margin: auto;
  position: relative;
`;

const Input = styled.input`
  width: 360px;
  height: 40px;
  font-size: 15px;
  outline: none;
  border: 2px solid #b5c4d6;
  padding: 10px;
  margin-top: 0;
`;

const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 15px;
  background-color: #b5c4d6;
  color: #fff;
  border: 1px solid #b5c4d6;
  outline: none;
  cursor: pointer;
`;

const Error = styled.div`
  padding: 10px;
  background-color: #ffbaba;
  color: #d8000c;
  margin: 10px 40px;
`;

export default Search;
