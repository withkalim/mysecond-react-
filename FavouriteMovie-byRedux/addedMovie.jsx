import { useDispatch, useSelector } from "react-redux";
import { RemoveFromFavourite } from "./favouriteSlice";

const AddedFavouriteMovie = () => {
  const getState = useSelector((state) => state.favourites.list);
  console.log("Favourite list from store:", getState);
  const getDispatch = useDispatch();

  return (
    <div className="fmovie-font">
      <h2>⭐ Favorite Movies</h2>
      {getState.length === 0 ? (
        <h4>No Favourites Movie Yet!</h4>
      ) : (
        <div className="favMovieMain">
          {getState.map((movie) => (
            <div key={movie.id} className="favMovieCard">
              <div className="imgDiv1">
                <img src={movie.image} className="fcardImg" />
              </div>
              <div className="imgDiv2">
                <h2>{movie.title}</h2>
                <div className="ftext1">
                  <p>
                    <span className="greenSpan">80% match</span> {movie.year}{" "}
                    <span className="f-span">HD</span>
                  </p>
                  <div className="ftext1child">
                    <span className="f-span">U/A 18+ [A]</span>
                    <span className="f-p">
                      voilence, language, suicide, gore
                    </span>
                  </div>
                </div>

                <p className="ftext2">
                  <span>
                    • {movie.title}({movie.year}): 
                  </span>
                  <span>
                    {"  "}
                     is a skilled thief who specializes in extraction, the art of
                    stealing valuable secrets from deep within a person's
                    subconscious during the dream state
                  </span>
                </p>
                <div className="ftext3">
                  <div className="btndiv1"><button> ▶ Play</button></div>
                  <div className="btndiv2">+</div>
                  <div className="btndiv3">🖒</div>
                </div>
                <button
                  onClick={() => getDispatch(RemoveFromFavourite(movie.id))}
                  className="fcarfBtn"
                >
                  Remove
                </button>
                <br />
                <p className="lastp"><span className="lastSpan">This show is: </span> Imiganative, Exciting.</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default AddedFavouriteMovie;
