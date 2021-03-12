const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("hello world"), 1000);
});

const handlePromise = async () => {
    try {
        const val = await myPromise;
        console.log(val);
    } catch (err) {
        console.log(err);
    }

}

handlePromise()