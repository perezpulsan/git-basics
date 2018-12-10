import React from "react";
import {render} from "react-dom";
import Product from "./components/Product";

import "./scss/style.scss";

render(<Product />, document.querySelector("#main"));

var x = 0;
var span = document.querySelector("span"); // find the <span> element in the DOM
var increment = document.getElementById("increment"); // find the element with the ID 'increment'
var decrement = document.getElementById("decrement"); // find the element with the ID 'decrement'

increment.addEventListener("click", function() {
  // this function is executed whenever the user clicks the increment button
  span.textContent = x++;
});

decrement.addEventListener("click", function() {
  // this function is executed whenever the user clicks the decrement button
  span.textContent = x--;
});
