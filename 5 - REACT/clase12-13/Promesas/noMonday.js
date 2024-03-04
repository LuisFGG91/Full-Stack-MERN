const noMondays = new Promise((resolve, reject) => {
    if (new Date().getDay() !== 4) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});
noMondays.then(res => console.log(res)).catch(err => console.log(err));