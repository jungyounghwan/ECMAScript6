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

var nodes = document.querySelector('ul');

var _loop = function _loop(k) {
    var el = nodes.children[k];
    el.onclick = function (event) {
        event.target.style.backgroundColor = 'yellow';
        console.log(k);
    };
};

for (var k = 0; k < nodes.children.length; k++) {
    _loop(k);
}