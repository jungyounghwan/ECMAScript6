"use strict";

var count = {
    current: 1,
    get getCount() {
        return ++this.current;
    }
};
console.log(count);

var mergeObj = {};
Object.assign(mergeObj, count);
console.log(mergeObj);