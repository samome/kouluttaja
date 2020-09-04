import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const CastingCourses = () => {
  return (
    <Segment basic style={{ padding: '2em' }}>
      <Header as='h3' style={{ fontSize: '2em' }}>
        Videot:
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        Fusce in erat diam. Praesent pulvinar, felis eget efficitur mollis,
        lectus nibh tincidunt arcu, quis malesuada dolor tellus in lectus. Sed
        placerat sem id luctus pretium. Vestibulum blandit rhoncus sollicitudin.
        Vestibulum sed dolor aliquet, ultrices eros et, dignissim mi.
        Suspendisse imperdiet est quis quam mattis, a sagittis arcu dapibus.
        Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Suspendisse rhoncus iaculis
        enim, et ultrices felis aliquam a. Nulla nunc nisl, tincidunt blandit
        ante porta, aliquet dictum nibh. Praesent tempus libero in cursus
        gravida. Donec venenatis justo tristique nisl ullamcorper venenatis.
      </p>
    </Segment>
  );
};

export default CastingCourses;
