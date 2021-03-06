import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import FurtherInfo from '../FurtherInfo';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const HomepageHeading = ({ mobile }) => (
  <Container text>
    {!mobile && (
      <img src={require('../../assets/code.jpeg')} width='470em' alt='logo' />
    )}

    <Header
      as='h2'
      content='Introduction to Web-development and WordPress'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button
      as='a'
      href='#welcome'
      primary
      size='huge'
      style={{ marginTop: '2.5em' }}>
      Welcome
      <Icon name='right arrow' />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'>
              <Container>
                {/*             <Menu.Item as='a'>Info</Menu.Item>
                <Menu.Item as='a'>Content</Menu.Item> */}
                {/*     <Menu.Item as='a' disabled position='right'>
                  <Icon name='mail' />
                  samo.meritie@tuni.fi
                </Menu.Item> */}
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}>
        {/* s */}

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical>
            {/*     <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>

                <Menu.Item as='a' disabled>
                  samo.meritie@tuni.fi
                </Menu.Item>
              </Menu>
            </Container> */}
            <HomepageHeading mobile />
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const Frontpage = () => {
  return (
    <ResponsiveContainer>
      <Segment
        style={{ padding: '8em 0em', marginTop: '-4em' }}
        vertical
        id='welcome'>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Class Summary
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                We chose our selfmade website to be the primary learning
                environment for our students at International Business -studies.
                <br />
                Our website holds information about the course content itself,
                our educational video material made for the students as well as
                descriptions of the tasks and exercises for the students.
                <br />
                <br />
                Our goal for our students is to inform them of the most used
                modern technologies and teach them how to get started at
                creating their own sites. We hope that by the end of this course
                you have gained enough intel about WordPress that you'll be
                comfortable selling websites!
              </p>
              <br id='info' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              {/*     <Button as='a' href='#info' size='huge' onClick={handleClick}>
                Lisätiedot ja kurssit
              </Button> */}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <FurtherInfo />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable textAlign='center'>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Lecturers' />
                <List link inverted>
                  <List.Item>fansu.janneh@tuni.fi</List.Item>
                  <List.Item>tanja.varvio@tuni.fi</List.Item>
                  <List.Item>samo.meritie@tuni.fi</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Useful Resourcers' />
                <List link inverted>
                  <List.Item as='a'>W3Schools</List.Item>
                  <List.Item as='a'>WordPress</List.Item>
                  <List.Item as='a'>Udemy</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
  );
};

export default Frontpage;
