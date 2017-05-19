'use strict';

/*let sports = () => { };
 let result = sports();
 console.log(result);*/

let get = param => ({sports : '축구'});
let result = get();
console.log(result);
console.log(result.sports);
console.log(get().sports);