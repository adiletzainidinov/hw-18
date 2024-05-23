import React from 'react';
import { Courses } from '../pages/Courses';
import { Raiting } from '../pages/Raiting';
import { Outlet } from 'react-router';

export const CoursesLayout = () => {
  return (
    <div>
      <Raiting />
    </div>
  );
};
