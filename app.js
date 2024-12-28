async function getOmdbapi() {
  let searchmoviename = document.getElementById("searchmoviename").value;

  const omdbApi = `https://www.omdbapi.com/?s=${searchmoviename}&apikey=81d95eb4`;
  try {
    let res = await fetch(`${omdbApi}`);
    res = await res.json();
    // console.log(res);
    console.log(res.Search);
    let allData = res.Search;
    console.log(allData);
    let maindiv = document.getElementById("maindiv");
    // let display = document.getElementById("display");

    if (res.Search) {
      maindiv.innerHTML = "";
      allData.map((Movie) => {
        maindiv.innerHTML += `
        <div class="demo">
          <h1>${Movie.Title}</h1>
          <img src="${Movie.Poster}" ||src="https://tse2.mm.bing.net/th?id=OIP.6L7shpwxVAIr279rA0B1JQHaE7&pid=Api&P=0&h=180">
          <h2>${Movie.Year}</h2>
          <h2>${Movie.imdbID}</h2>
        <div>
      `;
      });
    } else {
      // display.innerHTML = "";
      // allData.map(() => {
      //   display.innerHTML += `movie not found`;
      //   console.log(display);
      // });
      maindiv.innerHTML = `<div><h1>Movie not found</h1></div>`;
    }
  } catch (error) {
    console.error(error);
  }
}
