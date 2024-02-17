import react from "react";
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Promise created");
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});
