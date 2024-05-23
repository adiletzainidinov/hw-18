import React from 'react';
import { data } from '../data/raiting';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Students = () => {
  const params = useParams();
  const id = params.id;
  const studentList = data.map((item) => {
    return (
      <div className="papa" key={item.id}>
        <Link to={item.id.toString()}>stydents name: {item.name}</Link>
        <button >Deltails</button>
      </div>
    );
  });
  return (
    <StyledDiv>
      <h1>Students</h1>
      {studentList}
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
    margin-left: 420px;
    padding: 10px;
    border-radius: 10px;
    background-color: red;
    color: white;
    margin-top: 20px;
  }
  .papa {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    button {
    padding: 10px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 6px;
  }
  }
 
`;
