import { toastr } from "react-redux-toastr";
import * as types from "../types";

const movies = [
  {
    id: 1,
    title: "Gladiator",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  },
  {
    id: 2,
    title: "Speed",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYjc0MjYyN2EtZGRhMy00NzJiLWI2Y2QtYzhiYTU3NzAxNzg4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    id: 3,
    title: "The Matrix",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    id: 4,
    title: "The Room",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    id: 5,
    title: "Tropic Thunder",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDE5NjQzMDkzOF5BMl5BanBnXkFtZTcwODI3ODI3MQ@@._V1_UY268_CR4,0,182,268_AL_.jpg"
  }
];

export const getMovies = () => {
  return async dispatch => {
    dispatch({ type: types.LOADING, payload: { loading: true } });
    try {
      setTimeout(() => {
        return dispatch({
          type: types.GOT_MOVIES,
          payload: { movies }
        });
      }, 1500);
    } catch (error) {
      toastr.error("Error fetching brochures", error);
    }
  };
};

export const createRating = (movieId, rating) => {
  return async dispatch => {
    dispatch({ type: types.RATING, payload: { movieId } });
    try {
      setTimeout(() => {
        return dispatch({
          type: types.RATED,
          payload: { movieId, rating }
        });
      }, 500);
    } catch (error) {
      toastr.error("Error fetching brochures", error);
    }
  };
};
