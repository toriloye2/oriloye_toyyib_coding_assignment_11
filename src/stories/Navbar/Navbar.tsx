import React, { Component } from 'react';
import styled from 'styled-components';

// Define styled components for the NavBar elements
const Container = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 10px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

// NavBar component
class NavBar extends Component {
  render() {
    return (
      <Container>
        <List>
          <ListItem>
            <Link href="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="/about">About</Link>
          </ListItem>
          <ListItem>
            <Link href="/contact">Contact</Link>
          </ListItem>
          <ListItem>
            <Link href="/contact">CV</Link>
          </ListItem>
        </List>
      </Container>
    );
  }
}

export default NavBar;
