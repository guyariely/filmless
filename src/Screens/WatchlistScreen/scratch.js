
let movies = [
  {title: 'alien', runtime: 120},
  {title: 'avengers', runtime: 23},
  {title: 'lion king', runtime: 644},
  {title: 'batman', runtime: 345}
];

// numeric, des
movies.sort((a, b) => a.runtime - b.runtime);

// numeric, asc
movies.sort((a, b) => b.runtime - a.runtime);

// alphabet, des
movies.sort((a, b) => a.title > b.title);

// alphabet, asc
movies = movies.sort((a, b) => b.title > a.title);

console.log(movies);

