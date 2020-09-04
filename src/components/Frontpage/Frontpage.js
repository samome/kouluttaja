import PropTypes from 'prop-types';
import React, { Component, useState } from 'react';
import {
  Button,
  Container,
  Divider,
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
      content='Web-ohjelmoinnin perusteet ja ylläpito'
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
      Tervetuloa
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
                <Menu.Item as='a'>Info</Menu.Item>
                <Menu.Item as='a'>Koulutus</Menu.Item>
                <Menu.Item as='a'>Kouluttajat</Menu.Item>
                <Menu.Item as='a'>Materiaalit</Menu.Item>
                <Menu.Item as='a' disabled position='right'>
                  <Icon name='mail' />
                  samo.meritie@tuni.fi
                </Menu.Item>
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
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}>
          <Menu.Item as='a'>Info</Menu.Item>
          <Menu.Item as='a'>Koulutus</Menu.Item>
          <Menu.Item as='a'>Kouluttajat</Menu.Item>
          <Menu.Item as='a'>Materiaalit</Menu.Item>
          <Menu.Item as='a' disabled position='right' fitted>
            +358 40 123 457
          </Menu.Item>
          <Menu.Item as='a' disabled fitted>
            samo.meritie@tuni.fi
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical>
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>

                <Menu.Item as='a' disabled>
                  samo.meritie@tuni.fi
                </Menu.Item>
              </Menu>
            </Container>
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
  const [showTable, setShowTable] = useState(false);

  const handleClick = () => {
    setShowTable(!showTable);
  };

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
                Koulutuksesta
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Mauris feugiat nibh a ipsum lobortis, et interdum orci pretium.
                Sed auctor convallis pulvinar. Pellentesque a felis quis eros
                commodo cursus. Sed congue non felis nec gravida. Nam eros
                lectus, porttitor vitae egestas et, venenatis vel nisl. Morbi
                vehicula pellentesque metus, et vestibulum enim iaculis non.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. In id blandit sem, a convallis
                lacus. Phasellus at sem vitae velit elementum dignissim. Morbi
                tempus scelerisque sapien, vitae mattis dolor lacinia non.
                Curabitur egestas ipsum libero, at cursus dui luctus sed. Sed
                luctus dui a luctus pharetra. Mauris gravida leo quis sem
                ullamcorper iaculis.
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
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "Kurssin ansiosta osaan tehdä itse omat sivuni!"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Asiakkaan palaute kurssin jälkeen.
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "Olen löytänyt itseni samalla kuin ylläpidän sivuja!"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Kurssilaisen palaute viikon html retriitin jälkeen.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Kurssin sisältö
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Sed fringilla sollicitudin turpis, nec auctor mi. Fusce ultrices
            tristique felis, vitae feugiat nulla porttitor dapibus. Fusce
            aliquam mauris vitae tempus congue. Nulla feugiat arcu nec luctus
            malesuada. Sed et lacus risus. Curabitur et nibh nulla. Sed ut ante
            vitae purus gravida feugiat quis nec elit. Aliquam vestibulum a leo
            ut auctor.
          </p>
          <Button
            as='a'
            href='#info'
            size='large'
            onClick={() => {
              if (!showTable) handleClick();
            }}>
            Kurssi tarjonta
          </Button>
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
            <a href='#'>Lisätietoja</a>
          </Divider>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Tietoja kouluttajista
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Mauris feugiat nibh a ipsum lobortis, et interdum orci pretium. Sed
            auctor convallis pulvinar. Pellentesque a felis quis eros commodo
            cursus. Sed congue non felis nec gravida. Nam eros lectus, porttitor
            vitae egestas et, venenatis vel nisl. Morbi vehicula pellentesque
            metus, et vestibulum enim iaculis non. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. In id
            blandit sem, a convallis lacus. Phasellus at sem vitae velit
            elementum dignissim. Morbi tempus scelerisque sapien, vitae mattis
            dolor lacinia non. Curabitur egestas ipsum libero, at cursus dui
            luctus sed. Sed luctus dui a luctus pharetra. Mauris gravida leo
            quis sem ullamcorper iaculis. Integer sollicitudin venenatis
            rhoncus. Praesent in vestibulum turpis, sit amet posuere nibh.
          </p>
        </Container>
      </Segment>

      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Koulutuksesta' />
                <List link inverted>
                  <List.Item as='a'>Kouluttajat</List.Item>
                  <List.Item as='a'>Ota yhteyttä</List.Item>
                  <List.Item as='a'>Jotain mutta mitä?</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Ohjelmointikielet' />
                <List link inverted>
                  <List.Item as='a'>HTML</List.Item>
                  <List.Item as='a'>CSS</List.Item>
                  <List.Item as='a'>JavaScript</List.Item>
                  <List.Item as='a'>Muu</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Kouluttajien motto
                </Header>
                <p>"Tee asiat niin, että oppilas on apinan tasolla"</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
  );
};

export default Frontpage;
