const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("hello world"), 1000);
});

myPromise
    .then(val => console.log(val))
    .catch(val => console.error(val))
    .finally(() => console.log("this is the finally!"))
