let count = {
    current: 1,
    get getCount() {
        return ++this.current;
    }
};
console.log(count);

let mergeObj = {};
Object.assign(mergeObj, count);
console.log(mergeObj);