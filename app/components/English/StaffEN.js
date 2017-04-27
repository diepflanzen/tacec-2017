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
        <div className={styles.aboutImgContainer}><img src={contactImg} alt="Contact icon image" className={styles.aboutImg}/></div>
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
              <div>
                <h3 className={styles.contactHeading}> LOCAL TAXI </h3>
                <p className={styles.bodyTextAbout}>
                  <Col md="4">
                    <span> Rainbow Cab Services  </span>
                  </Col>
                  <Col md="4" md-offset="4">
                    <img src={phoneIcon} width={25} />
                    <span className={styles.bodyTextAbout} style={{marginLeft: '2%'}}>
                      (610)696-6060
                    </span>
                  </Col>
                </p>
                <h3 className={styles.contactHeading}> AIRPORT </h3>
                <p className={styles.bodyTextAbout}>
                  <Col md="12">
                    <span> Philadelphia International Airport  </span>
                  </Col>
                  <p> Take Uber or local taxi to the check-in location </p>
                </p>
                <h3 className={styles.contactHeading}> PARKING </h3>
                <p className={styles.bodyTextAbout}>
                  <Col md="8">
                    <span> D Lot / M Lot  </span>
                    <p> Suggestion: park at D lot (no overnight parking) first, check-in <br />
                    and take luggages to room, and then move your car to M lot </p>
                  </Col>
                  <Col md="4">
                    <img src={phoneIcon} width={25} />
                    <span className={styles.bodyTextAbout} style={{marginLeft: '2%'}}>
                      view map
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
            <Button color="primary" className={styles.applyNowButton}>Register Now</Button>
          </a>
        </div>
      </div>
    );
  }
}
