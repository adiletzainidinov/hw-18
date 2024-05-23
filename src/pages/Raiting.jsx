import React from 'react';
import { data } from '../data/raiting';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export const Raiting = () => {
  const params = useParams();
  const id = params.id;
  const raitingList = data.map((item) => {
    return (
      <div>
        <Link to={item.id.toString()}>
          {item.title}: {item.raiting}
        </Link>
      </div>
    );
  });
  const raitingObj = data.find((item) => item.id === +id);
  return (
    <StyledDiv>
      <h1>Raiting</h1>

      <div>
        {raitingList}
        <p></p>
      </div>
      <Link className="rartingBack" to=".." relative="path">
        Go back
      </Link>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 80%;
  height: 80vh;
  margin: 30px auto 0 auto;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);
  h1 {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  a {
    text-decoration: none;
    color: black;
    padding-left: 50px;
    line-height: 32px;
  }
  .rartingBack {
    text-align: center;
    display: block;
    font-size: 30px;
    border: none;
    width: 20%;
    margin-left: 60px;
    padding: 10px;
    border-radius: 10px;
    background-color: red;
    color: white;
    margin-top: 20px;
  }
`;
