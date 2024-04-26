"use strict";

    window.onload = init;
    function init() {
        const helloBtn = document.getElementById("greetBtn");
        helloBtn.onclick = onHelloBtnClicked;
      }



    function onHelloBtnClicked() {
        alert("Hello");
      }