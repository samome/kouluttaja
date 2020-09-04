import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const BasicCourse = () => {
  return (
    <Segment basic style={{ padding: '2em' }}>
      <Header as='h3' style={{ fontSize: '2em' }}>
        Kurssin sisältö:
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        orci molestie, sollicitudin massa sed, condimentum purus. Mauris sapien
        urna, bibendum vitae iaculis vel, fringilla eget ante. Suspendisse ac
        felis viverra, luctus urna eu, venenatis mauris. Pellentesque
        sollicitudin auctor orci nec imperdiet. Nam iaculis velit non ligula
        faucibus ultricies. Quisque auctor aliquam est et tempor. Proin congue
        porta fermentum. Vestibulum lacinia congue tortor, ut tristique purus
        fringilla nec. Duis nisi felis, feugiat ut eleifend id, bibendum sed
        massa. Etiam faucibus est sed turpis cursus gravida.
      </p>
    </Segment>
  );
};

export default BasicCourse;
