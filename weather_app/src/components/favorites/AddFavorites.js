import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const AddFavorite = (props) => {
  const [favoriteLocations, setFavoriteLocations] = useState();

  const [icon, setIcon] = useState();

  useEffect(() => {
    favoriteLocations.includes(props.location)
      ? setIcon("check")
      : setIcon("plus");
  }, [props.location, favoriteLocations]);

  const AddLocation = () => {
    axios.post(`https://localhost:44336/api/favorite/${props.location}`);
    // .then(r => console.log("test", r))
  };

  const ButtonStyle = {
    float: "left",
    fontSize: "22px",
    marginLeft: "15px",
    marginTop: "4px",
    display: "flex",
    cursor: "pointer",
  };

  return (
    <i onClick={AddLocation} className={`fa fa-${icon}`} style={ButtonStyle} />
  );

  
};

export default AddFavorite;
