let getData = async function () {
  let data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello world");
    }, 2000);
  });
  return data
};

console.log("First");
console.log(getData());
