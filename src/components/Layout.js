import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-width: 500px;
  flex-grow: 1;
  background-color: white;
  padding: 30px;
`;

const Nav = styled.ul`
  list-style: none;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;

  li {
    padding: 20px;

    a {
      color: white;
      text-decoration: none;
    }

    :hover {
      background-color: #bb75ff;
    }
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #e17055;
`;

const SiteTitle = styled.h2`
  margin: 0 50px 0 0;
  font-size: 36px;
  font-family: Righteous;

  a {
    color: white;
    text-decoration: none;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/ratings">Ratings</Link>
      </li>
    </Nav>
  );
};

function Layout({ children }) {
  return (
    <Container>
      <NavContainer>
        <Navigation />
        <SiteTitle>
          <Link to="/">Rad Ratings</Link>
        </SiteTitle>
      </NavContainer>
      <Page>{children}</Page>
    </Container>
  );
}

export default Layout;
