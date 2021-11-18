import React from "react";

function App() {
  return (
    <div className="conatiner">
      <div className="quantity">
        {/* <a href="#" className = "quantity_minus" title="Decrement"><span> - </span></a> */}
        <a className="quantity_minus" title="decrement"> - </a>
        <input name ="quantity" type="text" className="qquantity_input" value="10"/>
        <a className="quantity_plus" title="increment"> + </a>
        {/* <a href ="#" className= "quantity_plus" title="INCREMENT"><span> + </span></a> */}
      </div>
    </div>
  );
}

export default App;
