let promiseData1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise data 1 resolved");
  }, 5000);
});
let promiseData2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise data 2 resolved");
  }, 2000);
});

function getDataUsingThenCatch() {
  promiseData1.then((res) => {
    console.log(res);
  });
  promiseData2.then((res) => {
    console.log(res);
  });
  console.log("First");
}
getDataUsingThenCatch();
// Output: First
//Promise data 2 resolved (after 2 sec)
//Promise data 1 resolved (after 5 sec)

//using async/await
async function getDataUsingAsyncAwait() {
  let data1 = await promiseData1;
  console.log(data1);
  let data2 = await promiseData2;
  console.log(data2);
  console.log("First");
}
getDataUsingAsyncAwait();
//Promise data 1 resolved (after 5 sec)
//Promise data 2 resolved (after 5 sec simultaneously)
//First
