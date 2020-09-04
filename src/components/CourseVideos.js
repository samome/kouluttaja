import React from 'react';
import { Header, Segment, List, Divider, Grid } from 'semantic-ui-react';

const CastingCourses = () => {
  return (
    <Segment basic style={{ padding: '2em' }}>
      <Header as='h3' style={{ fontSize: '2em' }}>
        Basics
      </Header>
      <List animated selection>
        <List.Item style={{ color: 'black' }}>www.youtube.com/video</List.Item>
        <List.Item style={{ color: 'black' }}>www.youtube.com/video</List.Item>
        <List.Item style={{ color: 'black' }}>www.youtube.com/video</List.Item>
      </List>
      <Divider />
      <Header as='h3' style={{ fontSize: '2em' }}>
        WordPress
      </Header>
      <Grid columns={3} stackable>
        <Grid.Row>
          <Grid.Column>
            <List animated selection>
              <h3>Section 1</h3>
              <List.Item style={{ color: 'black' }}>
                www.youtube.com/video
              </List.Item>
              <List.Item style={{ color: 'black' }}>
                www.youtube.com/video
              </List.Item>
              <List.Item style={{ color: 'black' }}>
                www.youtube.com/video
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <List animated selection>
              <h3>Section 2</h3>
              <List.Item style={{ color: 'black' }}>
                www.youtube.com/video
              </List.Item>
              <List.Item style={{ color: 'black' }}>
                www.youtube.com/video
              </List.Item>
              <List.Item style={{ color: 'black' }}>
                www.youtube.com/video
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default CastingCourses;
