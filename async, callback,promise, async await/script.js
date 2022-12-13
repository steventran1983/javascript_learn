function callApi(theUrl, resolve) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", theUrl);
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = xhr.response;
      resolve(data);
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
}

// This is for call back
// callApi("https://jsonplaceholder.typicode.com/users", (data) => {
//   console.log("This is Call Back");
//   console.log(data);
// });

const newPromise = new Promise((resolve, reject) => {
  callApi("https://jsonplaceholder.typicode.com/users", resolve);
});

newPromise.then((data) => console.log(data)).catch((err) => console.log(err));
