import React from "react";
import PropTypes from "prop-types";

const ObjecList = [{
      id:1,
      name:"drinks",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8gjYqzMx3uR5WkTTAQYOSZXVeZH67PQD9qkYWB5V5EZTtVzL",
      rating:5
    },
    {
      id:2,
      name:"flowers",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEKPcTGo5Fv00HSupeZ_Qh3M0bHu3EhQrJnSEZd45gnk_Rm9W" ,
      rating:4.4
    },
    {
      id:3,
      name:"vip",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwBNxq06ibKUPcD8d-EwbiGJGfYqJKTf2zD8nrJT_tJu2OKmTUw" ,
      rating:4.7
    }
  ];

function Objec({name, picture, score}){
  return(
      <div>
        <h2>It is {name}</h2>
        <img  src={picture} alt={name}/>
        <h3>It's score is {score}</h3>
      </div>
  );
}  

Objec.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  score:PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {ObjecList.map(what => (
        <Objec key={what.id} name={what.name} picture={what.image} score={what.rating}/>
      ))}
    </div>  
  );
}

export default App;