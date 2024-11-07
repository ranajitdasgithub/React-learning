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
console.log("After the .then function call");
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
console.log("After the async function call");

//Promise data 1 resolved (after 5 sec)
//Promise data 2 resolved (after 5 sec simultaneously)
//First

///////////////Final output////////////
// First
// After the .then function call
// After the async function call
// Promise data 2 resolved
// Promise data 1 resolved
// Promise data 1 resolved
// Promise data 2 resolved
// First

////////////Using real world api/////////////
//use https://api.github.com/ free api
// fetch() => Response.json => jsonValue

const url = "https://api.github.com/users/ranajitdasgithub";

async function getUserData() {
  try {
    let data = await fetch(url);
    let dataJson = await data.json();
    console.log("from async await res:", dataJson);
  } catch {
    console.log(err);
  }
}
function getUserDataFromThen() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log("From then res:", res);
    })
    .catch((err) => console.log(err));
}
getUserData();
getUserDataFromThen();
