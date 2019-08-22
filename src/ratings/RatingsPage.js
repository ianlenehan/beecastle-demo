import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Rater from "../components/Rater";
import { getMovies, createRating } from "../redux/ratings/ratingsActions";
import { connect } from "react-redux";
import { compose } from "redux";

const MovieList = styled.ul`
  list-style: none;
  width: 100%;
  li {
    display: flex;
    align-items: center;
    padding: 5px;

    section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      span {
        margin-bottom: 5px;
      }
    }
  }
`;

const Poster = styled.img`
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  margin-right: 15px;
`;

function RatingsPage(props) {
  useEffect(() => {
    props.getMovies();
  }, []);

  const getRating = movieId => {
    return props.ratings[movieId];
  };

  if (props.loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      <Header as="h2">Rate Movies</Header>

      <MovieList>
        {props.movies &&
          props.movies.map(movie => {
            return (
              <li key={movie.id}>
                <Poster src={movie.imageUrl} height="130" />
                <section>
                  <span>{movie.title}</span>
                  <Rater
                    createRating={props.createRating}
                    id={movie.id}
                    currentRating={getRating(movie.id)}
                    currentlyRating={props.isRating === movie.id}
                  />
                </section>
              </li>
            );
          })}
      </MovieList>
    </Layout>
  );
}

const mapStateToProps = ({ ratingsState }, ownProps) => {
  const { movies, loading, ratings, isRating } = ratingsState;
  return { movies, loading, ratings, isRating };
};

const actions = {
  getMovies,
  createRating
};

export default compose(
  connect(
    mapStateToProps,
    actions
  )
)(RatingsPage);
