import React from "react";

function Food({fav}){
  return(
    <div>
      <h1>{fav}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="kimchi"/>
      <Food fav="asfd"/>
      <Food fav="fasd"/>
      <Food fav="asfas"/>
    </div>  
  );
}

export default App;