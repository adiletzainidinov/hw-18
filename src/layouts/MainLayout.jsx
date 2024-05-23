import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Meny } from '../components/Meny';

export const MainLayout = () => {
  return (
    <>
      <StyledDiv>
        <h1 style={{ marginLeft: 150, marginTop: 50, color: '#7c24c1' }}>
          Logo
        </h1>
        <Meny />
      </StyledDiv>
      <StyledLayoutDiv>
        <Outlet />
      </StyledLayoutDiv>
    </>
  );
};

const StyledDiv = styled.div`
  width: 400px;
  background-color: #e5e4de;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledLayoutDiv = styled.div`
  margin-left: 400px;

  p {
    color: red;
  }
`;
