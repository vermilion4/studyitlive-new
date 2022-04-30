import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';
import IconOverview from '../assets/icon-overview';
import IconTickets from '../assets/icon-tickets.js';
import IconIdeas from '../assets/icon-ideas.js';
import IconContacts from '../assets/icon-contacts';
import IconAgents from '../assets/icon-agents';
import IconArticles from '../assets/icon-articles';
import IconSettings from '../assets/icon-settings';
import IconSubscription from '../assets/icon-subscription';
import IconBurger from '../assets/icon-burger';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  burgerIcon: {
    cursor: 'pointer',
    position: 'absolute',
    left: 24,
    top: 34,
  },
  container: {
    backgroundColor: '#FFF',
    // boxShadow: '0px 40px 20px rgba(0, 0, 0, 0.15)',
    width: 255,
    paddingTop: 32,
    height: '100%'
  },
  containerMobile: {
    transition: 'left 0.5s, right 0.5s',
    position: 'fixed',
    width: 255,
    height: '100%',
    zIndex: 901
  },
  mainContainer: {
    height: '100%',
    minHeight: '100vh',
  },
  mainContainerMobile: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  mainContainerExpanded: {
    width: '100%',
    minWidth: '100vh',
},
  menuItemList: {
    marginTop: 52
  },
  menuLink: {
    textDecoration: 'none'
  },
  outsideLayer: {
    position: 'absolute',
    width: '100vw',
    minWidth: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.50)',
    zIndex: 900,
  },
  separator: {
    borderTop: '1px solid #DFE0EB',
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06,
  },
  hide: {
    left: -255,
  },
  show: {
    left: 0,
  },
});

class SidebarComponent extends React.Component {
  state = { expanded: false };

  onItemClicked = (item) => {
    this.setState({ expanded: false });
    return this.props.onChange(item);
  };

  isMobile = () => window.innerWidth <= 768;

  toggleMenu = () =>
    this.setState((prevState) => ({ expanded: !prevState.expanded }));

  renderBurger = () => {
    return (
      <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
        <IconBurger />
      </div>
    );
  };

  render() {
    const { expanded } = this.state;
    const isMobile = this.isMobile();
    return (
      <div style={{ position: 'relative' }}>
 <Row className={css(styles.mainContainer)} breakpoints={{ 768: css(styles.mainContainerMobile, expanded && styles.mainContainerExpanded) }}>
          {isMobile && !expanded && this.renderBurger()}
          <Column
            className={css(styles.container)}
            breakpoints={{
              768: css(
                styles.containerMobile,
                expanded ? styles.show : styles.hide
              ),
            }}
          >
            <LogoComponent />
            <Column className={css(styles.menuItemList)}>
            <Link to='/lecOverview' className={css(styles.menuLink)}><MenuItemComponent
                title='Overview'
                icon={IconOverview}
                onClick={() => this.onItemClicked('Overview')} 
                active={this.props.selectedItem === 'Overview'}
              /></Link>
               <Link to='/lecCourses' className={css(styles.menuLink)}><MenuItemComponent
                title='Courses'
                icon={IconTickets}
                onClick={() => this.onItemClicked('Courses')}
                active={this.props.selectedItem === 'Courses'}
              /></Link>
             <Link to='lecVideo' className={css(styles.menuLink)}> <MenuItemComponent
                title='Videos'
                icon={IconIdeas}
                onClick={() => this.onItemClicked('Videos')}
                active={this.props.selectedItem === 'Videos'}
              /></Link>
             <Link to='lecLiveClass' className={css(styles.menuLink)}> <MenuItemComponent
                title='Live Class'
                icon={IconContacts}
                onClick={() => this.onItemClicked('Live Class')}
                active={this.props.selectedItem === 'Live Class'}
              /></Link>
              <Link to='lecSchedule' className={css(styles.menuLink)}><MenuItemComponent
                title='Schedule'
                icon={IconAgents}
                onClick={() => this.onItemClicked('Schedule')}
                active={this.props.selectedItem === 'Schedule'}
              /></Link>
              <Link to='lecProfile' className={css(styles.menuLink)}><MenuItemComponent
                title='Profile'
                icon={IconArticles}
                onClick={() => this.onItemClicked('Profile')}
                active={this.props.selectedItem === 'Profile'}
              /></Link>
              <div className={css(styles.separator)}></div>
              <MenuItemComponent
                title='Settings'
                icon={IconSettings}
                onClick={() => this.onItemClicked('Settings')}
                active={this.props.selectedItem === 'Settings'}
              />
              <MenuItemComponent
                title='Subscription'
                icon={IconSubscription}
                onClick={() => this.onItemClicked('Subscription')}
                active={this.props.selectedItem === 'Subscription'}
              />
            </Column>
          </Column>
          {isMobile && expanded && (
            <div
              className={css(styles.outsideLayer)}
              onClick={this.toggleMenu}
            ></div>
          )}
        </Row>
      </div>
    );
  }
}

export default SidebarComponent;
