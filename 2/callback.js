// console.log("line 1");
// setTimeout(() => { console.log("line 2")}, 0);
// console.log("line 3");
// console.log("line 4");

const myCB = (cb, value) => {
    cb(value);
};

myCB((value) => console.log(value), 123)