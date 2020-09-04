import React from 'react';
import { Tab } from 'semantic-ui-react';
import BasicCourse from './BasicCourse';
import FlyFishingCourses from './FlyFishingCourses';
import CastingCourses from './CastingCourses';
const panes = [
  { menuItem: 'Kurssin sisältö', render: () => <BasicCourse /> },
  { menuItem: 'Tehtävät', render: () => <FlyFishingCourses /> },
  { menuItem: 'Videot', render: () => <CastingCourses /> },
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
