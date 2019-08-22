import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import starAvg from "../assets/star-avg.svg";
import starEmpty from "../assets/star-empty.svg";
import starOutline from "../assets/star-outline.svg";
import star from "../assets/star.svg";
import success from "../assets/success.svg";

const ratings = [1, 2, 3, 4, 5];

const Box = styled.div`
  border: 1.5px solid #dfe6e9;
  border-radius: 3px;
  padding: 2px;
  flex-direction: row;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 90px;
  height: 25px;
`;

function Rater(props) {
  const [hovered, setHovered] = useState(null);
  const [currentlyRating, setCurrentlyRating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (props.currentlyRating) {
      setCurrentlyRating(true);
    }
    if (currentlyRating && !props.currentlyRating) {
      setCurrentlyRating(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    }
  }, [props.currentlyRating]);

  const createRating = (id, rating) => {
    setHovered(null);
    props.createRating(id, rating);
  };

  const getImage = rating => {
    if (hovered) {
      if (hovered >= rating) return star;
      return starEmpty;
    }

    if (props.currentRating && props.currentRating >= rating) return starAvg;

    return starOutline;
  };

  if (currentlyRating) {
    return <Box>...</Box>;
  }

  if (showSuccess) {
    return (
      <Box>
        <Flip bottom>
          <img src={success} alt="Success" height="15" />
        </Flip>
      </Box>
    );
  }

  return (
    <Box>
      {ratings.map(rating => {
        return (
          <img
            key={rating}
            alt={`Rate ${rating}`}
            src={getImage(rating)}
            onMouseEnter={() => setHovered(rating)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => createRating(props.id, rating)}
          />
        );
      })}
    </Box>
  );
}

export default Rater;
