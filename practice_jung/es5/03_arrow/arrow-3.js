'use strict';

/*let sports = () => { };
 let result = sports();
 console.log(result);*/

var get = function get(param) {
  return { sports: '축구' };
};
var result = get();
console.log(result);
console.log(result.sports);
console.log(get().sports);