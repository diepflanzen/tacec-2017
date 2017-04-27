import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import Button from 'muicss/lib/react/button';
import styles from '../styles.css';
import logo from '../images/logo.png';
import smallLogo from '../images/logo_small.png';
import Container from 'muicss/lib/react/container';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

export default class Frame extends React.Component {
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
    const { children, addPrefix, lang } = this.props;
    const viewPortWidth = window.innerWidth;
    return (
      <div>
        <Appbar className={styles.bar}>
          <div className={styles.headerContainer}>
            <Row>
              <Col md="5">
                <Link to={addPrefix("")}>
                  {
                    viewPortWidth < 600 ?
                      (<img src={smallLogo} className={styles.appBarLogo}/>) :
                      (<img src={logo} className={styles.appBarLogo}/>)
                  }
                </Link>
                <span
                  className={styles.hamburger}
                  onClick={this.handleHamburgerClick}
                >
                  ☰
                </span>
              </Col>
              <Col md="4" className={styles.appBarNav}>
                <Link to={addPrefix("about")} className={styles.navLink} activeClassName={styles.navLinkSelected}>About</Link>
                <Link to={addPrefix("schedule")} className={styles.navLink} activeClassName={styles.navLinkSelected}>Program</Link>
                <Link to={addPrefix("speaker")} className={styles.navLink} activeClassName={styles.navLinkSelected}>Speaker</Link>
                <Link to={addPrefix("contact")} className={styles.navLink} activeClassName={styles.navLinkSelected}>Contact</Link>
              </Col>
              <Col md="3" className={styles.appBarExtra}>
                <a href="https://tang.regfox.com/tacec-tang-conference-wotd-2017"
                  target="_blank">
                  <Button color="primary" className={styles.navButton}>REGISTER</Button>
                </a>
                <Link className={styles.langLinkCh} to="/zh">中文</Link>
                <span>|</span>
                <Link className={styles.langLinkEn} to="/en">EN</Link>
              </Col>
            </Row>
          </div>
        </Appbar>
        {
          this.state.showMenu &&
          <ul className={styles.dropDownUl}>
            <li className={styles.headerItemResponsive}><Link to={addPrefix("about")} onClick={this.handleHamburgerClick}>About</Link> </li>
            <li className={styles.headerItemResponsive}><Link to={addPrefix("schedule")} onClick={this.handleHamburgerClick}>Program</Link> </li>
            <li className={styles.headerItemResponsive}><Link to={addPrefix("speaker")} onClick={this.handleHamburgerClick}>Speaker</Link> </li>
            <li className={styles.headerItemResponsive}><Link to={addPrefix("contact")} onClick={this.handleHamburgerClick}>Contact</Link> </li>
            <li className={styles.headerItemResponsive}><Link to="/zh" onClick={this.handleHamburgerClick}>中文</Link> </li>
          </ul>
        }
	{children}
        <Appbar className={styles.footer}>
          <Container>
            <Row>
              <Col md="6">
                {
                  viewPortWidth < 600 ?
                    (<img src={smallLogo} className={styles.footerLogo}/>) :
                    (<img src={logo} className={styles.footerLogo}/>)
                }
              </Col>
              <Col md="6">
                <div className={styles.footerDisclaimer}>
                  © 2017 TACEC.org. All Rights Reserved
                </div>
              </Col>
            </Row>
          </Container>
        </Appbar>
      </div>
    );
  }
}
