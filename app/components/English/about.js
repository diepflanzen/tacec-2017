import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import styles from '../../styles.css';
import aboutImg from '../../images/02_about_03.png';


export default class LandingEN extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.aboutImgContainer}><img src={aboutImg} className={styles.aboutImg}/></div>
        <Container className={styles.landingBody}>
        	<Row>
	          <Col md="10" md-offset="1">
  	          <p className={styles.bodyTextAbout}>
                The first Taiwanese American Conference/East Cost (TAC/EC) was held in 1970 at Downingtown, Pennsylvania. It was a summer retreat for the area's Christian families but has turned into an event for the entire Taiwanese American community.
                Over the years, the conference has expanded its programs to encompass cultural and social activies, as well as issues related to human rights, the environment and current events in Taiwan.
                The number of participants has steadily grown, numbering over 2,000 in the late 80s and 90s.
               </p>
               <p className={styles.bodyTextAbout}>
                TAC/EC is hosted by Taiwanese Communities in five different areas: New York, New Jersey, Boston, Washington and Philadelphia (including south Jersey and Delaware).
                Each region is on a five year rotation and takes turns chairing the TAC/EC board that overseas the operation of TAC/EC.
               </p>
               <p className={styles.bodyTextAbout}>
                The conference now has a participation of about 600 - 800 people annually, with the majority being comporised of first generation Taiwanese Americans.
                Many second generation Taiwanese Americans who now have children have eagerly expressed interest in developing TAC/EC programs for their children and in boosting participation among their generational peers.
  	          </p>
              <h3 className={styles.heading}> PURPOSE </h3>
              <div className={styles.headingBottom} />
              <ul>
                <li>
                  <span className={styles.bodyTextAbout}>
                   To stimulate public interest in the cultural, religious, educational, social economic and other activities of the Taiwanese Americans.
                 </span>
                </li>
                <li>
                  <span className={styles.bodyTextAbout}>
                   To enhance the Taiwanese cultural and religious heritage among Taiwanese Americans.
                 </span>
                </li>
                <li>
                  <span className={styles.bodyTextAbout}>
                   To facilitate social contacts and exchanges among Taiwanese Americans and to promote friendship, mutual assistance and cooperation within the Taiwanese American community and between Taiwanese and other ethnic community.
                 </span>
                </li>
                <li>
                  <span className={styles.bodyTextAbout}>
                   To organize and hold an annual conference or workshops at various college campus in the Northeastern region for the consideration and discussion of various topics relevant to life in the United States and issues related to current and future development of Taiwan.
                 </span>
                </li>
              </ul>
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
