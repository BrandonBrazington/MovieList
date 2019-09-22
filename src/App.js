import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.js';
import Header from './components/Header.js'

const meganList = {
  listName: "Megan and Brandon's Movie Watch",
  movies: [
  {
    "name": "Atlantis: The Lost Empire",
    "year": "2001",
    "imdb": "tt0230011",
    "rating": "PG",
    "youtube": "sZIimDPZQwg",
    "image": "https://m.media-amazon.com/images/M/MV5BNjM2NzNjMDAtZTAyMi00NTQzLWFlMTctNTUzMGE1ODE2NDRlXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SY1000_CR0,0,677,1000_AL_.jpg"
  },
  {
    "name": "Whisper of the Heart",
    "year": "1995",
    "imdb": "tt0113824",
    "rating": "G",
    "youtube": "0pVkiod6V0U",
    "image": "https://m.media-amazon.com/images/M/MV5BNDA1YzkyMDgtNTYzNC00ZGRiLWJlYjEtMGFhODIxOGNmMWZmXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SY1000_CR0,0,703,1000_AL_.jpg"
  },
  {
    "name": "Spirited Away",
    "year": "2001",
    "imdb": "tt0245429",
    "rating": "PG",
    "youtube": "ByXuk9QqQkk",
    "image": "https://m.media-amazon.com/images/M/MV5BNjFlNTliMWQtZGJlOC00YTIxLWEzODEtZjM4NzgzZDhkMmFjL2ltYWdlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SY1000_CR0,0,707,1000_AL_.jpg"
  },
  {
    "name": "Howl's Moving Castle",
    "year": "2004",
    "imdb": "tt0347149",
    "rating": "PG",
    "youtube": "iwROgK94zcM",
    "image": "https://m.media-amazon.com/images/M/MV5BNWQxOTdlYmYtOThkNC00YmY5LTg0NjktMmU2OTE5OTU2YzY3XkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    "name": "Castle in the Sky",
    "year": "1986",
    "imdb": "tt0092067",
    "rating": "PG",
    "youtube": "8ykEy-yPBFc",
    "image": "https://m.media-amazon.com/images/M/MV5BMWFiNmQ3ZTQtNWU5My00NTIxLWIzNTktYTVlY2FjMjEwZDBlXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    "name": "Princess Mononoke",
    "year": "1997",
    "imdb": "tt0119698",
    "rating": "PG-13",
    "youtube": "4OiMOHRDs14",
    "image": "https://m.media-amazon.com/images/M/MV5BZTFiMDcxOWMtOWZiOC00MzhhLTkxMTQtMzMzMTgwNjJlYWVmXkEyXkFqcGdeQXVyNjkyMTg1NDM@._V1_SX634_CR0,0,634,999_AL_.jpg"
  },
  {
    "name": "My Neighbor Totoro",
    "year": "1988",
    "imdb": "tt0096283",
    "rating": "G",
    "youtube": "92a7Hj0ijLs",
    "image": "https://m.media-amazon.com/images/M/MV5BYTc2YzdhZmUtNmU4Ni00MWRiLThlMTAtZjc2YzVlN2IyNjYxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX750_AL_.jpg"
  },
  {
    "name": "Bicentennial Man",
    "year": "1999",
    "imdb": "tt0182789",
    "rating": "PG",
    "youtube": "O3K1a4aSBdk",
    "image": "https://m.media-amazon.com/images/M/MV5BYTU4Nzg5YmItNzE0Yy00Y2VmLWI3OTYtNTFjODEzMDE0YTI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,672,1000_AL_.jpg"
  },
  {
    "name": "Coach Carter",
    "year": "2005",
    "imdb": "tt0393162",
    "rating": "PG-13",
    "youtube": "znyAnWUYf2g",
    "image": "https://m.media-amazon.com/images/M/MV5BNWYxZWFiNTItN2FkNS00ZDJmLWE1MWItYjMyMTgyOTI4MmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX675_AL_.jpg"
  },
  {
    "name": "Eight Below",
    "year": "2006",
    "imdb": "tt0397313",
    "rating": "PG",
    "youtube": "zz7TGf1awDo",
    "image": "https://m.media-amazon.com/images/M/MV5BMjExMjAwNzE0N15BMl5BanBnXkFtZTYwMDY4NDk2._V1_.jpg"
  },
  {
    "name": "Beauty and the Beast",
    "year": "2017",
    "imdb": "tt2771200",
    "rating": "PG",
    "youtube": "e3Nl_TCQXuw",
    "image": "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    "name": "Beauty and the Beast",
    "year": "1991",
    "imdb": "tt0101414",
    "rating": "G",
    "youtube": "dGboC3UVvX8",
    "image": "https://m.media-amazon.com/images/M/MV5BMzE5MDM1NDktY2I0OC00YWI5LTk2NzUtYjczNDczOWQxYjM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX674_AL_.jpg"
  },
  {
    "name": "The Greatest Game Ever Played",
    "year": "2005",
    "imdb": "tt0388980",
    "rating": "PG",
    "youtube": "au9nFe4mjIA",
    "image": "https://m.media-amazon.com/images/M/MV5BMTQ4NDk3MDk0NV5BMl5BanBnXkFtZTcwMzk4OTgyMQ@@._V1_.jpg"
  },
  {
    "name": "Hidalgo",
    "year": "2004",
    "imdb": "tt0317648",
    "rating": "PG-13",
    "youtube": "urnjRUVYRY8",
    "image": "https://m.media-amazon.com/images/M/MV5BMTgyNjg5MjcxMl5BMl5BanBnXkFtZTcwNDQxMzQyMQ@@._V1_.jpg"
  },
  {
    "name": "Hitch",
    "year": "2005",
    "imdb": "tt0386588",
    "rating": "PG-13",
    "youtube": "dMaq_pfxs-0",
    "image": "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_SY1000_CR0,0,659,1000_AL_.jpg"
  },
  {
    "name": "I, Robot",
    "year": "2004",
    "imdb": "tt0343818",
    "rating": "PG-13",
    "youtube": "rL6RRIOZyCM",
    "image": "https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1_.jpg"
  },
  {
    "name": "The Illusionist",
    "year": "2006",
    "imdb": "tt0443543",
    "rating": "PG-13",
    "youtube": "i0xO64icGSY",
    "image": "https://m.media-amazon.com/images/M/MV5BY2VkMzZlZDAtNTkzNS00MDIzLWFmOTctMWQwZjQ1OWJiYzQ1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX700_AL_.jpg"
  },
  {
    "name": "Iron Will",
    "year": "1994",
    "imdb": "tt0110157",
    "rating": "PG",
    "youtube": "giLeHfkJeXU",
    "image": "https://m.media-amazon.com/images/M/MV5BN2MyMzgzNjctZmU0NS00NTAyLTlmYTktZTk0YmZjMGJjYjNkXkEyXkFqcGdeQXVyNTM5NzI0NDY@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    "name": "The Last Samurai",
    "year": "2003",
    "imdb": "tt0325710",
    "rating": "R",
    "youtube": "T50_qHEOahQ",
    "image": "https://m.media-amazon.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  },
  {
    "name": "Maleficent",
    "year": "2014",
    "imdb": "tt1587310",
    "rating": "PG",
    "youtube": "w-XO4XiRop0",
    "image": "https://m.media-amazon.com/images/M/MV5BMjAwMzAzMzExOF5BMl5BanBnXkFtZTgwOTcwMDA5MTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    "name": "The Man in the Iron Mask",
    "year": "1998",
    "imdb": "tt0120744",
    "rating": "PG-13",
    "youtube": "QzkiwVXsuJQ",
    "image": "https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    "name": "Monster-in-Law",
    "year": "2005",
    "imdb": "tt0369735",
    "rating": "PG-13",
    "youtube": "njLr1z66EfA",
    "image": "https://m.media-amazon.com/images/M/MV5BYTcwYjA1NGItM2YyYy00MmE4LTkxMzItYWNiZWRkNDFjNmE5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  },
  {
    "name": "The Three Musketeers",
    "year": "1993",
    "imdb": "tt0108333",
    "rating": "PG",
    "youtube": "F_eCydap2FI",
    "image": "https://m.media-amazon.com/images/M/MV5BMzc4OTJlMTgtMWE5MC00MDRlLWE2MDQtYTI4ZTAzNzUyZjM2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SY1000_CR0,0,678,1000_AL_.jpg"
  },
  {
    "name": "Remember the Titans",
    "year": "2000",
    "imdb": "tt0210945",
    "rating": "PG",
    "youtube": "nPhu9XsRl4M",
    "image": "https://m.media-amazon.com/images/M/MV5BYThkMzgxNjEtMzFiOC00MTI0LWI5MDItNDVmYjA4NzY5MDQ2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX680_AL_.jpg"
  },
  {
    "name": "Seabiscuit",
    "year": "2003",
    "imdb": "tt0329575",
    "rating": "PG-13",
    "youtube": "Yv6RnFTlu4I",
    "image": "https://m.media-amazon.com/images/M/MV5BMWVmMmE1YzItNGUyZS00MzgwLWFhNzYtYjM4ZTJmZDVjNmNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX642_AL_.jpg"
  },
  {
    "name": "Secretariat",
    "year": "2010",
    "imdb": "tt1028576",
    "rating": "PG",
    "youtube": "UKmuvjL2cVw",
    "image": "https://m.media-amazon.com/images/M/MV5BMTgwNDkyMDU3NV5BMl5BanBnXkFtZTcwNjMyNjI4Mw@@._V1_SY1000_CR0,0,664,1000_AL_.jpg"
  },
  {
    "name": "The Secret of My Success",
    "year": "1987",
    "imdb": "tt0093936",
    "rating": "PG-13",
    "youtube": "rGHDATIJIX8",
    "image": "https://m.media-amazon.com/images/M/MV5BZWVmY2I3OTQtZTdiNC00ODZkLTg3ZDgtNmE4ZmFhNjQwN2ZjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    "name": "The Shawshank Redemption",
    "year": "1994",
    "imdb": "tt0111161",
    "rating": "R",
    "youtube": "NmzuHjWmXOc",
    "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    "name": "Short Circuit",
    "year": "1986",
    "imdb": "tt0091949",
    "rating": "PG",
    "youtube": "9rlI3Xg9g_A",
    "image": "https://m.media-amazon.com/images/M/MV5BZjhlNmI0NDktYTMxNS00MWYwLWEzYjktOTNhN2JkNWFiZTkwXkEyXkFqcGdeQXVyMDEwMjgxNg@@._V1_.jpg"
  },
  {
    "name": "Silverado",
    "year": "1985",
    "imdb": "tt0090022",
    "rating": "PG-13",
    "youtube": "8RP5cWV8b3c",
    "image": "https://m.media-amazon.com/images/M/MV5BYTljNTE5YmUtMGEyZi00ZjI4LWEzYjUtZDY2YWEwNzVmZjRkXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg"
  },
  {
    "name": "The Prestige",
    "year": "2006",
    "imdb": "tt0482571",
    "rating": "PG-13",
    "youtube": "ijXruSzfGEc",
    "image": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg"
  },
  {
    "name": "A Dog's Journey",
    "year": "2019",
    "imdb": "tt8385474",
    "rating": "PG",
    "youtube": "A2FrrSyyKfA",
    "image": "https://m.media-amazon.com/images/M/MV5BYjRhMWY0ODMtMmM3OC00ZGRmLWIyZjktZGQ0ZGE4MzcyZWE5XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SY1000_CR0,0,631,1000_AL_.jpg"
  },
  {
    "name": "Hachi: A Dog's Tale",
    "year": "2009",
    "imdb": "tt1028532",
    "rating": "G",
    "youtube": "Y6U7mAnPtw4",
    "image": "https://m.media-amazon.com/images/M/MV5BNzE4NDg5OWMtMzg3NC00ZDRjLTllMDMtZTRjNWZmNjBmMGZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    "name": "Gabriel Iglesias",
    "year": "N/A",
    "imdb": "nm0407101",
    "rating": "N/A",
    "youtube": "ownTXin956U",
    "image": "https://m.media-amazon.com/images/M/MV5BMjMyNzk4NTQ4Ml5BMl5BanBnXkFtZTgwMTA1OTEwNjE@._V1_SY1000_CR0,0,665,1000_AL_.jpg"
  },
  {
    "name": "Ellen DeGeneres: Relatable",
    "year": "2018",
    "imdb": "tt7157574",
    "rating": "N/A",
    "youtube": "bWJvNd9JMlU",
    "image": "https://m.media-amazon.com/images/M/MV5BYTlmYzI2NTMtYmZmOS00ZTYzLTg2ZTUtZDhkZjhkZDVjMWQwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  }
 ]
}

// const brandonList = {
//   listName: "Brandon's Favorite Movies",
//   movies: [
//   {
//     name: "Unstoppable",
//     year: "2010",
//     imdb: "tt0477080",
//     youtube: "fyuoIqeL-bc",
//     rating: "PG-13",
//     image: "https://upload.wikimedia.org/wikipedia/" +
//       "en/9/9e/Unstoppable_Poster.jpg"
//   },
//   {
//     name: "Man of Steel",
//     year: "2013",
//     imdb: "tt0770828",
//     youtube: "T6DJcgm3wNY",
//     rating: "PG-13",
//     image: "https://upload.wikimedia.org/wikipedia/" +
//       "en/8/85/ManofSteelFinalPoster.jpg"
//   },
//   {
//     name: "Guardians of the Galaxy",
//     year: "2014",
//     imdb: "tt2015381",
//     youtube: "d96cjJhvlMA",
//     rating: "PG-13",
//     image: "https://upload.wikimedia.org/wikipedia/" +
//       "en/b/b5/Guardians_of_the_Galaxy_poster.jpg"
//   },
//   {
//     name: "Ant-Man",
//     year: "2015",
//     imdb: "tt0478970",
//     youtube: "pWdKf3MneyI",
//     rating: "PG-13",
//     image: "https://upload.wikimedia.org/wikipedia/" +
//       "en/7/75/Ant-Man_poster.jpg"
//   },
//   {
//     name: "The Avengers",
//     year: "2012",
//     imdb: "tt0848228",
//     youtube: "1hPpG4s3-O4",
//     rating: "PG-13",
//     image: "https://upload.wikimedia.org/wikipedia/" +
//       "en/f/f9/TheAvengers2012Poster.jpg"
//   },
// ]
// }

function App() {
  return (
    <div className="App">
      <Header listName={meganList.listName}></Header>
      <MovieList movies={meganList.movies}></MovieList>
    </div>
  );
}

export default App;
