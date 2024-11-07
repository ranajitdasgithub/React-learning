let promiseData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello world");
  }, 2000);
});

function getDataUsingThenCatch() {
  promiseData.then((res) => {
    console.log(res);
  });
  console.log("First");
}
getDataUsingThenCatch();
// Output: First
//Hello world (after 2 sec)

//using async/await
async function getDataUsingAsyncAwait() {
  let data = await promiseData;
  console.log(data);
  console.log("First");
}
getDataUsingAsyncAwait();
//output: after 2 sec
//Hello World
//First
