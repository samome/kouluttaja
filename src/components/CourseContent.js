import React from 'react';
import { Header, Segment, Divider } from 'semantic-ui-react';

const BasicCourse = () => {
  return (
    <Segment basic style={{ padding: '2em' }}>
      <Header as='h3' style={{ fontSize: '2em' }}>
        Basics
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        The students will at first learn the Basic Concepts of Web Development,
        terms and technologies.
        <br /> Some examples of the basics would be introduction to terms like
        DNS, HTML, CSS, Frontend and Backend.
      </p>
      <Divider />
      <Header as='h3' style={{ fontSize: '2em' }}>
        WordPress
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        WordPress will be broken in two separate sections: <br /> -
        Administrative use of the WordPress environment.
        <br /> - Content Creation for the WordPress envinronment.
      </p>
      <Divider />
      <Header as='h3' style={{ fontSize: '2em' }}>
        Video Courses
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        All three beforementioned subjects will have seperate educational videos
        taught by the teachers of this course.
        <br /> Video material will be available through our website. The videos
        will be approximately 10 to 15 minutes long and relative to the amount
        of content. There will be 3 videos per subject.
      </p>
      <Divider />
      <Header as='h3' style={{ fontSize: '2em' }}>
        Exercise Bank
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        The website will uphold our exercise bank that has a plethora of
        different tasks for the students of our course.
        <br /> The bank withholds excersises that test the students
        understanding of the Web development & WordPress environment.
        <br /> Example of the exercises would be tasks like creating content,
        remembering some tech-terms and learning how to navigate the WordPress
        dashboard. There will be 5 tasks per subject or 15 tasks in total.
      </p>
      <Divider />
      <Header as='h3' style={{ fontSize: '2em' }}>
        Grading
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        The students will pass the course when they've successfully passed 75%
        of the excersises.
      </p>
    </Segment>
  );
};

export default BasicCourse;
