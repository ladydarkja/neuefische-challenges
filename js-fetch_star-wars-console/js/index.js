console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(response);
  console.log("data: ", data);
  console.log(data.count);
  for (const result of data.results) {
    console.log(result.height);
  }
  console.log(data.results[2].eye_color);
}

fetchData();
