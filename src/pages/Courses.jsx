import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { data } from '../data/raiting';

export const Courses = () => {
  return (
    <div>
      <StyledHeader>
        <nav>
          <ul>
            <li>
              <Link to={'materials'}>Materials</Link>
            </li>
            <li>
              <Link to={'stydents'}>Stydents</Link>
            </li>
            <li>
              <Link to={'rating'}>Raitings</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </StyledHeader>
    </div>
  );
};

const StyledHeader = styled.header`
  
  nav {
    background-color: #2c88d9;
    width: 100%;
  padding: 30px;
  }
  nav ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 50%;
    font-size: 25px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  li {
    &:hover {
      border-bottom: 5px solid yellow;
    }
  }
  a {
    &:hover {
      color: #000000;
    }
    text-decoration: none;
    color: white;
  }
`;
