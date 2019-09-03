import React from "react";

const ObjecList = [{
      id:1,
      name:"drinks",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8gjYqzMx3uR5WkTTAQYOSZXVeZH67PQD9qkYWB5V5EZTtVzL"
    },
    {
      id:2,
      name:"flowers",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEKPcTGo5Fv00HSupeZ_Qh3M0bHu3EhQrJnSEZd45gnk_Rm9W" 
    },
    {
      id:3,
      name:"vip",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwBNxq06ibKUPcD8d-EwbiGJGfYqJKTf2zD8nrJT_tJu2OKmTUw" 
    }
  ];

function Objec({name, picture}){
  return(
      <div>
        <h2>It is {name}</h2>
        <img  src={picture} alt={name}/>
      </div>
  );
}  

function App() {
  return (
    <div>
      {ObjecList.map(what => (
        <Objec key={what.id} name={what.name} picture={what.image} />
      ))}
    </div>  
  );
}

export default App;