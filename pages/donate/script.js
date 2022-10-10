"use strict";
let borderRangeDot = document.querySelectorAll(".border_range_dot");

borderRangeDot.forEach((item) => {
  item.onclick = function (event) {
    this.classList.add("active");
  };
});
