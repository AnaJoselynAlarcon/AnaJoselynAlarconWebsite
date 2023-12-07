async function fetchData() {
  //https://data.calgary.ca/resource/vdjc-pybd.json
  const response = await fetch(
    "https://data.calgary.ca/resource/vdjc-pybd.json"
  );
  const data = await response.json();
  console.log(data);
  return data;
}

export default fetchData;
