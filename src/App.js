import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { incNumber, dexNumber } from "./actions/index";
import "./App.css"


function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch()
  return (
    <div className="conatiner">
      <div className="quantity">
        {/* <a href="#" className = "quantity_minus" title="Decrement"><span> - </span></a> */}
        <a className="quantity_minus" title="decrement" onClick={() => dispatch(dexNumber())}> -</a>
        <input name ="quantity" type="text" className="qquantity_input" value={myState}/>
        <a className="quantity_plus" title="increment" onClick={() => dispatch(incNumber())}>+</a>
        {/* <a href ="#" className= "quantity_plus" title="INCREMENT"><span> + </span></a> */}
      </div>
    </div>
  );
}

export default App;
