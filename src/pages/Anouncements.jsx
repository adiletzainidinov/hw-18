import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Anouncements = () => {
  const params = useParams();
  const id = params.id;
  return (
    <StyledDiv>
      <h1>Anouncements Page</h1>
      <Link to={`/courses/stydents`}>
        <button>Go to student page</button>
      </Link>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 90%;
  height: 90vh;
  margin: 30px auto 0 auto;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);
  padding: 50px;
  button {
    padding: 10px 40px;
    border-radius: 30px;
    background-color: #15ae9e;
    border: none;
    font-size: 20px;
    color: white;
    margin-top: 30px;
    cursor: pointer;
  }
`