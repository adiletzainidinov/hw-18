import React, { useState } from 'react';
import { data as initialData } from '../data/raiting';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Materials = () => {
  const [materials, setMaterials] = useState(initialData);

  const addNewMaterial = () => {
    const newObj = {
      id: materials.length > 0 ? materials[materials.length - 1].id + 1 : 1, 
      title: 'Raiting',
      raiting: '5',
      name: 'Adilet',
      materials: `${materials.length + 1}`, 
    };
    setMaterials([...materials, newObj]);
  };

  const raitingList = materials.map((item) => (
    <div className="papa" key={item.id}>
      <Link to={item.id.toString()}>Material: {item.materials}</Link>
      <button>Details</button>
    </div>
  ));

  return (
    <StyledDiv>
      <StyledButton onClick={addNewMaterial}>Add new material</StyledButton>

      <div>
        {raitingList}
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
    margin-left: 360px;
    padding: 10px;
    border-radius: 10px;
    background-color: red;
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

const StyledButton = styled.button`
  padding: 10px 25px;
  border-radius: 30px;
  border: none;
  background-color: #e88338;
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  margin-left: 600px;
  margin-top: 60px;
  cursor: pointer;
`;
