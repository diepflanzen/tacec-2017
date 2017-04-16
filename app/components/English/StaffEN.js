import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import styles from '../../styles.css';
import contactImg from '../../images/06_Contact_03.jpg';
import emailIcon from '../../images/06_Contact_07-09.png';
import phoneIcon from '../../images/06_Contact_07.png';

export default class StaffEN extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.aboutImgContainer}><img src={contactImg} className={styles.aboutImg}/></div>
        <Container className={styles.landingBody}>
        	<Row>
	          <Col md="10" md-offset="1">
              <div className={styles.staffCard}>
                <h3 className={styles.contactHeading}> TACEC <span style={{fontSize: 18, float: 'right'}}>TAIWANESE AMERICAN CONFERENCE / EAST COAST </span></h3>
                <p className={styles.bodyTextAbout}>
                  <Col md="4">
                    <span> Sue-Ching Lin </span>
                  </Col>
                  <Col md="4" md-offset="4">
                    <img src={emailIcon} width={25} />
                    <span className={styles.bodyTextAbout} style={{marginLeft: '2%'}}>
                      sclintacec@gmail.com
                    </span>
                  </Col>
                </p>
                <p className={styles.bodyTextAbout} style={{paddingTop: 40}}>
                  <Col md="4">
                    <span> Minze Chien </span>
                  </Col>
                  <Col md="4">
                    <img src={phoneIcon} width={25} />
                    <span className={styles.bodyTextAbout} style={{marginLeft: '2%'}}>
                      703-399-9888
                    </span>
                  </Col>
                  <Col md="4">
                    <img src={emailIcon} width={25} />
                    <span className={styles.bodyTextAbout} style={{marginLeft: '2%'}}>
                      minzechien.tacec@gmail.com
                    </span>
                  </Col>
                </p>
              </div>
              <div className={styles.staffCard}>
                <h3 className={styles.contactHeading}> TANG <span style={{fontSize: 18, float: 'right'}}>TAIWANESE AMERICAN NEXT GENERATION </span></h3>
    	          <p className={styles.bodyTextAbout}>
                  <Col md="4">
                    <span> Jenny Kao / Alex Chang </span>
                  </Col>
                  <Col md="4" md-offset="4">
                    <img src={emailIcon} width={25} />
                    <span className={styles.bodyTextAbout} style={{marginLeft: '2%'}}>
                      hello@tangeration.org
                    </span>
                  </Col>
                </p>
              </div>
              <div className={styles.staffCard}>
                <h3 className={styles.contactHeading}> OTD <span style={{fontSize: 18, float: 'right'}}>OVERSEAS TAIWANESE FOR DEMOCRACY </span></h3>
    	          <p className={styles.bodyTextAbout}>
                  <Col md="4">
                    <span> Yu-Chien Tseng  </span>
                  </Col>
                  <Col md="4" md-offset="4">
                    <img src={emailIcon} width={25} />
                    <span className={styles.bodyTextAbout} style={{marginLeft: '2%'}}>
                      crossover317@gmail.com
                    </span>
                  </Col>
                </p>
                <p className={styles.bodyTextAbout} style={{paddingTop: 40}}>
                  <Col md="4">
                    <span> Yen-Ting Liu </span>
                  </Col>
                  <Col md="4" md-offset="4">
                    <img src={emailIcon} width={25} />
                    <span className={styles.bodyTextAbout} style={{marginLeft: '2%'}}>
                      edsolitude@gmail.com
                    </span>
                  </Col>
                </p>
              </div>
	          </Col>
          </Row>
        </Container>
        <div style={{height: 150, width: '100%', backgroundColor: '#64a680'}}>
          <a href="https://tang.regfox.com/tacec-tang-conference-wotd-2017"
            target="_blank">
            <Button color="primary" className={styles.applyNowButton}>Apply Now</Button>
          </a>
        </div>
      </div>
    );
  }
}
