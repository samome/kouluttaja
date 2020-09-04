import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const FlyFishingCourses = () => {
  return (
    <Segment basic style={{ padding: '2em' }}>
      <Header as='h3' style={{ fontSize: '2em' }}>
        Tehtävät:
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        Nam ullamcorper aliquam dui id convallis. Suspendisse potenti. Proin
        sodales justo in venenatis dignissim. Fusce semper ultricies tortor,
        vitae semper ex venenatis quis. Sed dui nunc, mollis sit amet ex ac,
        feugiat faucibus magna. Nam ultricies turpis at ligula ornare, at
        viverra orci aliquam. Cras maximus sed purus in luctus. Curabitur
        sodales blandit turpis, efficitur mollis lacus blandit ut. Suspendisse
        cursus id quam ac iaculis. Vivamus egestas suscipit nisi, vel commodo
        elit egestas in. Donec imperdiet, tellus in faucibus eleifend, erat
        felis mattis sapien, eu tempus metus erat non lorem. In iaculis augue id
        massa mattis posuere. Integer at arcu ex.
      </p>
    </Segment>
  );
};

export default FlyFishingCourses;
