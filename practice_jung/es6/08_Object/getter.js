let obj = {
    value: 123,
    get getValue() {
        return this.value;
    }
};
console.log(obj.getValue);