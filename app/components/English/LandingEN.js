import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';

import styles from '../../styles.css';
import logo from '../../images/tacec_logo.png';
import tangLogo from '../../images/tang_logo.png';
import otdLogo from '../../images/otd_logo.png';
import heroImg from '../../images/hero_big.png';
import heroImgSmall from '../../images/hero_small.png';
import logoMarker from '../../images/map-07.png';
import mapInfo from '../../images/map_info.png';
import dotImg from '../../images/dot.png';
import GoogleMapReact from 'google-map-react';

export default class LandingEN extends React.Component {
  render() {
    const viewPortWidth = window.innerWidth;
    const isMobile = viewPortWidth < 600;
    const mapCenter = isMobile ? [39.9518694, -75.602182] : [39.9662578,-75.1395344];
    return (
      <div>
        <div className={styles.landingHero}>
          {
            viewPortWidth < 600 ?
              (<a href="https://tang.regfox.com/tacec-tang-conference-wotd-2017" target="_blank"><img src={heroImgSmall} alt="TACEC 2017 main image" className={styles.landingHeroImg}/></a>) :
              (<a href="https://tang.regfox.com/tacec-tang-conference-wotd-2017" target="_blank"><img src={heroImg} alt="TACEC 2017 main image" className={styles.landingHeroImg}/></a>)
          }
        </div>
        <Container className={styles.landingBody}>
        	<Row>
	          <Col md="10" md-offset="1">
  	          <h3 className={styles.heading}> GENERATIONS UNITED,<br/> TAIWANESE AMERICANS TOGETHER. </h3>
  	          <p className={styles.bodyText}>
                We are excited to announce that TANG/TAC-EC 2017 will be held at West Chester University in West Chaster, PA from Saturday, July 1st, to Tuesday, July 4th!
                This year's hosting TAC-EC Committee will consist of the Taiwanese Association of America - Greater Washinton Chapter and Greater Baltimore Chapter.
               </p>
               <p className={styles.bodyText}>
                This year will be a truly intergenerational conference. Our conference will be joined by g0v's East Coast Hackathon, an event where participants spend a few days working together to solve public issues;
                and the Overseas Taiwanese for Democracy, an organization that brings together 1st generation young professional Taiwanses who are passionate about Taiwan.
               </p>
               <p className={styles.bodyText}>
                West Chester is centrally located at approximately 45 minutes from Philadelphia, 2 hours from New York City, and 2.5 hours from Washington, DC.
                It's a beautiful campus, featuing historic buildings, a spacious dining hall, a grand convernt hall, and new dormitories with private bathrooms.
                Nearby are shops and restaurants, as well as Longwood Gardens and the fames Ling of Prussia Mall. Keep an eye out for registration, which will open late March to April.
                Get excited for July 4th weekend! We can't wait to see you all!
  	          </p>
              <div className={styles.homepageBoxContainer} style={isMobile ? {marginLeft: -10 + (viewPortWidth - 260) / 2} : {}}>
                <Link to="/schedule">
                  <div className={styles.homepageBox} style={isMobile ? {borderBottom: 'none'} : {borderRight: 'none'}}>
                    <h3 className={styles.hpBoxHeading}>TACEC <br/> PROGRAM</h3>
                    <p className={styles.hpViewMore}> view more </p>
                    <img src={dotImg} style={{marginTop: -33}}/>
                  </div>
                </Link>
                <a href='http://tangeneration.org/programs/' target='_blank'>
                  <div className={styles.homepageBox} style={isMobile ? {borderBottom: 'none'} : {borderRight: 'none'}}>
                    <h3 className={styles.hpBoxHeading}>TANG CONFERENCE</h3>
                    <p className={styles.hpViewMore}> view more </p>
                    <img src={dotImg} style={{marginTop: -33}}/>
                  </div>
                </a>
                <Link to="/otd">
                  <div className={styles.homepageBox}>
                    <h3 className={styles.hpBoxHeading}>OTD <br /> SUMMIT</h3>
                    <p className={styles.hpViewMore}> view more </p>
                    <img src={dotImg} style={{marginTop: -33}}/>
                  </div>
                </Link>
              </div>
	          </Col>
          </Row>
        </Container>
        {viewPortWidth < 700 && (
        <img
          src={mapInfo}
          width="100%"
        />)}
        <div style={{height: 480, width: '100%'}}>
          <GoogleMapReact
             bootstrapURLKeys={{key: 'AIzaSyDeZuJsUlNfaMcKn0JBHDfMl2TzALkPwUk'}}
             defaultCenter={mapCenter}
             defaultZoom={10}
             options={{zoomControl: false, scrollwheel: false, scaleControl: false, disableDoubleClickZoom: true}}
             disableDefaultUI={true}
           >
             <div
               lat={39.9518694}
               lng={-75.602182}
             >
               <img
                 src={logoMarker}
                 width={60}
               />
             </div>
             {viewPortWidth > 700 && (
               <div
                 lat={40.2201578}
                 lng={-74.9695344}
               >
                 <img
                   src={mapInfo}
                 />
               </div>
             )}
           </GoogleMapReact>
         </div>
        <Container className={styles.landingBody}>
      		<Row>
      			<Col md="4" md-offset="4">
      				<h3 className={styles.heading}> ORGANIZERS </h3>
      			</Col>
          </Row>
          <Row>
      			<Col md="4">
      				<a href="https://www.facebook.com/TACEC.org/"
              		target="_blank">
      					<img src={logo} className={styles.hostLogo} alt="TACEC Logo" height="114px" />
      				</a>
      			</Col>
      			<Col md="4">
      				<a href="http://tangeneration.org/"
              		target="_blank">
      					<img src={tangLogo} className={styles.hostLogo} alt="TANG Logo" width="80%" />
      				</a>
      			</Col>
            <Col md="4">
              <a href="https://www.facebook.com/overseastaiwanesefordemocracy"
                  target="_blank">
                <img src={otdLogo} className={styles.hostLogo} alt="OTD Logo" width="100%" />
              </a>
            </Col>
      		</Row>
        </Container>
      </div>
    );
  }
}
