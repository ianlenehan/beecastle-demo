import * as types from "../types";

const initialState = {
  loading: false,
  isRating: null,
  movies: null,
  ratings: {}
};

export default (state = initialState, action) => {
  const getRatings = ({ movieId, rating }) => {
    return { ...state.ratings, [movieId]: rating };
  };

  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: action.payload.loading
      };
    case types.GOT_MOVIES:
      return {
        ...state,
        movies: action.payload.movies,
        loading: false
      };
    case types.RATING:
      return {
        ...state,
        isRating: action.payload.movieId
      };
    case types.RATED:
      return {
        ...state,
        ratings: getRatings(action.payload),
        isRating: null
      };
    default:
      return state;
  }
};
