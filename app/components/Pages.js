import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import Button from 'muicss/lib/react/button';
import styles from '../styles.css';
import logo from '../images/organized_g0v.png';
import logoDark from '../images/g0v_logo_dark.png';
import socialFacebook from '../images/icon_facebook_green.png';
import socialEmail from '../images/icon_email_green.png';
import socialGithub from '../images/icon_github_green.png';
import LandingCH from './LandingCH';
import Container from 'muicss/lib/react/container';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

export default class ChPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleHamburgerClick = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
  	const { children } = this.props;
    return (
      <div>
        <Appbar className={styles.bar}>
          <div className={styles.headerContainer}>
            <Row>
              <Col md="2">
                <Link to="/">
                  <img src={logo} className={styles.appBarLogo}/>
                </Link>
                <span
                  className={styles.hamburger}
                  onClick={this.handleHamburgerClick}
                >
                  ☰
                </span>
              </Col>
              <Col md="7" className={styles.appBarNav}>
                <Link to="/schedule" className={styles.navLink} activeClassName={styles.navLinkSelected}>已知回報</Link>
                <Link to="/speakers" className={styles.navLink} activeClassName={styles.navLinkSelected}>成功案例</Link>
                <Link to="/staff" className={styles.navLink} activeClassName={styles.navLinkSelected}>工作人員</Link>
                <a href="https://www.generosity.com/volunteer-fundraising/g0v-at-nyc-first-ever-hackathon"
                  target="_blank">
                  <Button color="accent" className={styles.navButton}>捐款</Button>
                </a>
                <a href="https://www.eventbrite.com/e/g0v-hackathon-nyc-tickets-27621197746"
                  target="_blank">
                  <Button color="primary" className={styles.navButton}>報名</Button>
                </a>
              </Col>
              <Col md="3" className={styles.appBarExtra}>
                <a className={styles.socialIcon} href="https://www.facebook.com/g0vus/" target="_blank"><img src={socialFacebook} /></a>
                <a className={styles.socialIcon} href="https://github.com/hsin421/g0vnyc-landing" target="_blank"><img src={socialGithub} /></a>
              </Col>
            </Row>
          </div>
        </Appbar>
        {
          this.state.showMenu &&
          <ul className={styles.dropDownUl}>
            <li className={styles.headerItemResponsive}><Link to="/" onClick={this.handleHamburgerClick}>首頁</Link> </li>
            <li className={styles.headerItemResponsive}><Link to="/schedule" onClick={this.handleHamburgerClick}>活動流程</Link> </li>
            <li className={styles.headerItemResponsive}><Link to="/speakers" onClick={this.handleHamburgerClick}>講者介紹</Link> </li>
            <li className={styles.headerItemResponsive}><Link to="/staff" onClick={this.handleHamburgerClick}>工作人員</Link> </li>
            <li className={styles.headerItemResponsive}>
              <a className={styles.socialIcon} href="https://www.facebook.com/g0vus/" target="_blank"><img src={socialFacebook} /></a>
              <a className={styles.socialIcon} href="https://github.com/hsin421/g0vnyc-landing" target="_blank"><img src={socialGithub} /></a>
            </li>
          </ul>
        }
       	{children}
          <Appbar className={styles.footer}>
             <Container>
              <Row>
                <Col md="12">
                  <img src={logoDark} height="20px" className={styles.footerLogo}/>
                </Col>
              </Row>
            </Container>
          </Appbar>
      </div>
    );
  }
}
