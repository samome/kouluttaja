import React from 'react';
import { Tab } from 'semantic-ui-react';
import CourseContent from './CourseContent';
import CourseTasks from './CourseTasks';
import CourseVideos from './CourseVideos';
const panes = [
  { menuItem: 'Course Content', render: () => <CourseContent /> },
  { menuItem: 'Exercises', render: () => <CourseTasks /> },
  { menuItem: 'Videos', render: () => <CourseVideos /> },
];

const FurtherInfo = () => {
  return (
    <>
      <Tab
        panes={panes}
        defaultActiveIndex={0}
        menu={{ secondary: true, pointing: true }}
      />
    </>
  );
};

export default FurtherInfo;
