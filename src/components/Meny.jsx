import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Meny = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/anouncements">Anouncements</Link>
        </li>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  ul {
    margin-top: 150px;
    border-right: 0.1px solid #e5e4de
  }
  ul li {
   
    padding: 15px;
    font-size: 28px;
    background-color: #ffffff;
    padding-left: 40px;
    list-style: none;
    color: #82b5e1;
    &:hover {
      background-color: #e3cff2;
      color: black;
    }
    &:active {
      background-color: #c498e5;
      color: black;
    }
  }

  a {
    text-decoration: none;
  }
`;
