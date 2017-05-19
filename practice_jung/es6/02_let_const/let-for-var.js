'use strict';

/*
var nodes = document.querySelector('ul');
for (var k = 0; k < nodes.children.length; k++){
    var el = nodes.children[k];
    el.onclick = function(event){
        event.target.style.backgroundColor = 'yellow';
        console.log(k);
    }
}*/

let nodes = document.querySelector('ul');
for (let k = 0; k < nodes.children.length; k++){
    let el = nodes.children[k];
    el.onclick = function(event){
        event.target.style.backgroundColor = 'yellow';
        console.log(k);
    }
}