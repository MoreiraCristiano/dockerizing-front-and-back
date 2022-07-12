console.log("Hello from index.js");

function getElementsToWrite() {
  let element = document.querySelectorAll(".container .loadData");
  return element;
}

async function getDataFromAPI(url) {
  /*
   * Here I obtained data from api but i dont know how to 
     change the scope of data value
  */
  const options = {
    method: "get",
    redirect: "follow",
  };

  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);

  // Writting on HTML file the api response
  let elementsList = getElementsToWrite();
  elementsList[0].innerText += data.name;
  elementsList[1].innerText += data.age;

  return data;
}

getDataFromAPI("http://192.168.1.12:8081/api");
