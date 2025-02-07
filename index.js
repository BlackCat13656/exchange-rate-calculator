"use strict";

function calculate() {
    fetch('items.json')
    .then(res => res.json())
    .then(data => (document.body.inneHTML = data[0].text))
}

calculate(); 