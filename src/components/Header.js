import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: Righteous;
  font-size: 42px;
  color: ${props => (props.color ? props.color : `inherit`)};
`;

const H2 = styled.h2`
  font-family: Righteous;
  font-size: 36px;
  color: ${props => (props.color ? props.color : `inherit`)};
`;

const H3 = styled.h3`
  font-family: Righteous;
  font-size: 24px;
  color: ${props => (props.color ? props.color : `inherit`)};
`;

function Header({ children, as, color }) {
  switch (as) {
    case "h1":
      return <H1 color={color}>{children}</H1>;
    case "h2":
      return <H2 color={color}>{children}</H2>;
    case "h3":
      return <H3 color={color}>{children}</H3>;
    default:
      return <H1 color={color}>{children}</H1>;
  }
}

export default Header;
