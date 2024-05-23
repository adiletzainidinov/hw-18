import React from 'react';
import { Courses } from '../pages/Courses';
import { Outlet } from 'react-router';
import { Students } from '../pages/Students';

export const StudentLayout = () => {
  console.log('work');
  return (
    <div>
      <Students />
    </div>
  );
};
