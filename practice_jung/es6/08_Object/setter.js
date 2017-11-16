let obj = {
    set setValue(value) {
        this.value = value;
    }
};
obj.setValue = 123;
console.log(obj.value);