import { useDispatch } from "react-redux";
import { AddtoFavourite } from "./favouriteSlice";

const movies = [
  {
    id: 1,
    title: "Batman v Superman: Dawn of Justice",
    year: 2015,
    image:
      "https://images.moviesanywhere.com/b9b585fed72bcbdbc5a8cddb0c452074/2d5324d8-548a-4747-bca5-f9a39aec9030.jpg",
    category: "Hollywood",
  },
  {
    id: 2,
    title: "Fight Club",
    year: 1999,
    image:
      "https://xl.movieposterdb.com/07_11/1999/137523/xl_137523_a62f028b.jpg",
    category: "Hollywood",
  },
  {
    id: 3,
    title: "Ghost Rider",
    year: 2007,
    image:
      "https://images.moviesanywhere.com/2876b5c2d60ee8ca0d6769b221a9e419/76a4122e-89ff-4a7d-93cd-d6db5966a67c.jpg",
    category: "Hollywood",
  },
  {
    id: 4,
    title: "Interstellar",
    year: 2015,
    image:
      "https://resizing.flixster.com/47rDB5jGZrHWyRMRYMZKenbTcHU=/fit-in/705x460/v2/https://resizing.flixster.com/Y_sqtbGDcspx4oob3nD-lojSLjc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YyMWZjZTQ2LWQwZGItNGRhMi1hZjg3LWFhZDQ1YWU1OTQ2NC53ZWJw",
    category: "Hollywood",
  },

  {
    id: 5,
    title: "Rowdy Hero",
    year: 2015,
    image:
      "https://m.media-amazon.com/images/M/MV5BNTRiY2MyZWUtOWExZC00MzNjLWFmMTMtYmZkZjRhMWExNTZkXkEyXkFqcGc@._V1_.jpg",
    category: "Tollywood",
  },
  {
    id: 6,
    title: "Once Upon a Time In Mumbai",
    year: 2010,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/cc972c7eb008e975b27776f754f8f102b15d5ae6ce792aae3b86412e4c2013bc.jpg",
    category: "Bollywood",
  },
  {
    id: 7,
    title: "Wanted",
    year: 2008,
    image:
      "https://play-lh.googleusercontent.com/eNuncPyNuj26mCNDRQy-qMP-1auOYacYt0HmYrHarNFzGQE_HWRacNuG0XMJGzRlV4m6",
    category: "Bollywood",
  },
  {
    id: 8,
    title: "RockStar",
    year: 2011,
    image:
      "https://m.media-amazon.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_.jpg",
    category: "Bollywood",
  },
  {
    id: 9,
    title: "Bullet train",
    image:
      "https://play-lh.googleusercontent.com/QzL3UA85yMmbBEo1XRAiXHWTOzsuQKVm1cP-GaqtR_KEzYaWRGfrdKSB8S84Vu-ch_GdDNKXGm2BYVnaBJQ7",
    category: "Hollywood",
  },
  {
    id: 10,
    title: "John Week",
    year: 1999,
    image:
      "https://play-lh.googleusercontent.com/3fyXxCTJsVM0VOCx094YLQuNVyCGHsjJUmVmM6pAeD0dEWLlnIsW_6pqgYFsFhnteDTD5jU1nv8TKOmCXFU",
    category: "Hollywood",
  },
  {
    id: 11,
    title: "The Gray Man",
    year: 2007,
    image: "https://pbs.twimg.com/media/FIqdAK-WYAEOa4i.jpg",
    category: "Hollywood",
  },
  {
    id: 12,
    title: "Matrix",
    year: 2015,
    image:
      "https://m.media-amazon.com/images/M/MV5BNGE1YzI4NzMtZTUxNi00Y2I5LTg2MmQtODE0NThmYTFmMDk0XkEyXkFqcGc@._V1_.jpg",
    category: "Hollywood",
  },
  {
    id: 13,
    title: "Delhi Belly",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/82/Delhi_belly_poster.jpg",
    category: "Bollywood",
  },
  {
    id: 14,
    title: "Pardesi",
    image:
      "https://vibhushan.wordpress.com/wp-content/uploads/2009/02/7401_devd1.jpg?w=584",
    category: "Bollywood",
  },
  {
    id: 15,
    title: "Raees",
    image:
      "https://images.jdmagicbox.com/comp/jd_social/news/2018aug08/image-232464-avv07hch4c.jpg",
    category: "Bollywood",
  },
  {
    id: 16,
    title: "Gangs of wasseypur",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhNSWQ3oKbFdF1ixaz77CyMnQcSQ7tAXq5w&s",
    category: "Bollywood",
  },
  {
    id: 17,
    title: "KGF",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcz_zm92PWrizIOCRBOLTXk44ZZ8TXLAKrig&s",
    category: "Tollywood",
  },
  {
    id: 18,
    title: "Vada Chennie",
    image:
      "https://media-cache.cinematerial.com/p/500x/hwkwwvuz/vada-chennai-singaporean-movie-poster.jpg?v=1543533488",
    category: "Tollywood",
  },
  {
    id: 19,
    title: "Ghoom",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMzNjA4ODY3Ml5BMl5BanBnXkFtZTcwNDcwNjk5Mw@@._V1_.jpg",
    category: "Bollywood",
  },
  {
    id: 20,
    title: "Ashiqi 2",
    image:
      "https://lh6.googleusercontent.com/proxy/ecLRw5YoG6I1VFRgomOWbWDZHICcQ2nTmw7RpIm92WoP6GC8ywTZlljI12usLxgapYtrX5RWzCvGPJ4qNkQur5BIvkSCbHy6mifwKkUQErOQYw7R",
    category: "Bollywood",
  },
  {
    id: 21,
    title: "Aparchit",
    image:
      "https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/Aparichit.jpg",
    category: "Tollywood",
  },
  {
    id: 22,
    title: "Mass",
    image: "https://i.redd.it/yqvk9f51b5ga1.jpg",
    category: "Tollywood",
  },
  {
    id: 23,
    title: "Vikram",
    image:
      "https://media-cache.cinematerial.com/p/500x/c7ycc5kx/vikram-indian-movie-poster.jpg?v=1748938157",
    category: "Tollywood",
  },
  {
    id: 24,
    title: "Kaithi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6I1_x7-cck0n0qonb82BwdgZwGJT3HYMUow&s",
    category: "Tollywood",
  },
  {
    id: 25,
    title: "Master",
    image: "https://live.staticflickr.com/65535/51818489868_7f84b93efa_z.jpg",
    category: "Tollywood",
  },
  {
    id: 26,
    title: "They Call Him OG",
    image:
      "https://static.toiimg.com/thumb/124059191.jpg?imgsize=80208&photoid=124059191&width=400&resizemode=4",
    category: "topTen",
  },
  {
    id: 27,
    title: "Greatest Kalesh",
    image: "https://i.cdn.newsbytesapp.com/images/l29520251017154232.jpeg",
    category: "topTen",
  },
  {
    id: 28,
    title: "Vash level 2",
    image: "https://www.showtimenepal.com/storage/uploads/movies/2186-h.jpg",
    category: "topTen",
  },
  {
    id: 29,
    title: "Elixir",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQofg-qh-UO3G21cJE4KP37tDOYKf5vYaZ7Vg&s",
    category: "topTen",
  },
  {
    id: 30,
    title: "Kantara 2",
    image:
      "https://cdn.123telugu.com/content/wp-content/uploads/2025/09/Kantara-Chapter-1-5.webp",
    category: "topTen",
  },
];

const MovieList1 = () => {
  const dispatchInstance = useDispatch();
  console.log("MovieList rendered");

  return (
    <div style={{ flexDirection: "column" }}>
      <h2 className="titleCategory">🎬 Hollywood Movies</h2>
      <div className="movieContainer">
        {movies
          .filter((m) => m.category === "Hollywood")
          .map((movie) => (
            <div key={movie.id} className="movieList">
              <img src={movie.image} alt={movie.title} className="movieImg" />
              <button
                onClick={() => dispatchInstance(AddtoFavourite(movie))}
                className="movieBtn"
              >
                Add to Favourite
              </button>
            </div>
          ))}
      </div>

      <h2 className="titleCategory">Top 10 Movies in Netflix Today</h2>  
      <div className="topMovieContainer">
        {movies
          .filter((m) => m.category === "topTen")
          .map((movie) => (
            <div key={movie.id} className="movieTopTen">
              <img src={movie.image} className="movieTopImg" />
              <button className="movietopBtn">Recently Added</button>
            </div>
          ))}
      </div>

      <h2 className="titleCategory">🎥 Bollywood Movies</h2>
      <div className="movieContainer">
        {movies
          .filter((m) => m.category === "Bollywood")
          .map((movie) => (
            <div key={movie.id} className="movieList">
              <img src={movie.image} alt={movie.title} className="movieImg" />
              <button
                onClick={() => dispatchInstance(AddtoFavourite(movie))}
                className="movieBtn"
              >
                Add to Favourite
              </button>
            </div>
          ))}
      </div>

      <h2 className="titleCategory">⭐ Tollywood Movies</h2>
      <div className="movieContainer">
        {movies
          .filter((m) => m.category === "Tollywood")
          .map((movie) => (
            <div key={movie.id} className="movieList">
              <img src={movie.image} alt={movie.title} className="movieImg" />
              <button
                onClick={() => dispatchInstance(AddtoFavourite(movie))}
                className="movieBtn"
              >
                Add to Favourite
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
export default MovieList1;
