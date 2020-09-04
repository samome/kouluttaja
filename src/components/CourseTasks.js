import React from 'react';
import { Header, Segment, List, Grid } from 'semantic-ui-react';

const FlyFishingCourses = () => {
  return (
    <Segment basic style={{ padding: '2em' }}>
      <Header as='h3' style={{ fontSize: '2em' }}>
        Basics
      </Header>
      <List animated selection>
        <List.Item style={{ color: 'black' }}>www.dropbox.com</List.Item>
        <List.Item style={{ color: 'black' }}>www.dropbox.com</List.Item>
        <List.Item style={{ color: 'black' }}>www.dropbox.com</List.Item>
      </List>
      <Header as='h3' style={{ fontSize: '2em' }}>
        WordPress
      </Header>
      <Grid columns={3} stackable>
        <Grid.Row>
          <Grid.Column>
            <List animated selection>
              <h3>Section 1</h3>
              <List.Item style={{ color: 'black' }}>www.dropbox.com</List.Item>
              <List.Item style={{ color: 'black' }}>www.dropbox.com</List.Item>
              <List.Item style={{ color: 'black' }}>www.dropbox.com</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <List animated selection>
              <h3>Section 2</h3>
              <List.Item style={{ color: 'black' }}>www.dropbox.com</List.Item>
              <List.Item style={{ color: 'black' }}>www.dropbox.com</List.Item>
              <List.Item style={{ color: 'black' }}>www.dropbox.com</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default FlyFishingCourses;
