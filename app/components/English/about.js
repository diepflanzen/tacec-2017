import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import styles from '../../styles.css';
import aboutImg from '../../images/02_about_03.png';

import logo from '../../images/tacec_logo.png';
import tangLogo from '../../images/tang_logo.png';
import otdLogo from '../../images/otd_logo.png';

export default class LandingEN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    };
  }

  tabClick = (tab) => {
    this.setState({ tab });
  }

  render() {
    const { tab } = this.state;
    const TACEC = (
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
        <h3 className={styles.heading}> MISSION </h3>
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
    );

    const TANG = (
      <Col md="10" md-offset="1">
        <p className={styles.bodyTextAbout}>
          TANG is an all-volunteer organization focused on creating a nurturing community for Taiwanese American youth. We mentor our TA siblings and encourage them to become involved members of society by exploring our four themes: Identity, Community, Growth, and Family.  We also see ourselves as a convener for our 1st, 2nd, and 3rd generation Taiwanese Americans, providing a rare opportunity for families and old friends to reunite. We serve community members of all ages, with programs geared towards children age 3-6 up through Taiwanese American parents in their 30s-40s with children.
         </p>
         <p className={styles.bodyTextAbout}>
          TANG traces its roots back to TAC-EC (Taiwanese American Conference East Coast), a conference formed by the first wave of Taiwanese immigrants arriving in America in the 70’s and 80’s. Though it began as a retreat for families living in the Northeast, TAC-EC’s focus soon grew to incorporate issues related to human rights and advancing freedom and democracy on the island nation of Taiwan. Parents attending TAC-EC brought their children in tow, creating an impromptu community for second generation Taiwanese Americans. These youth eventually organized to create their own programming and served as one of the nation’s earliest communities for native born Taiwanese Americans, formally becoming TANG (Taiwanese American Next Generation) in 2003.
         </p>
        <h3 className={styles.heading}> MISSION </h3>
        <div className={styles.headingBottom} />
        <p className={styles.bodyTextAbout}>
          For the youth to be enriched by a loving Taiwanese community, so they can obtain a stronger sense of self and passionately pursue their convictions.
        </p>
      </Col>
    );

    const OTD = (
      <Col md="10" md-offset="1">
        <p className={styles.bodyTextAbout}>
          Overseas Taiwanese for Democracy (OTD) is an alliance of students and young professionals who is devoted to the democratic development of Taiwan and dedicated to maintaining the Sunflower Movement’s momentum since 2014.  OTD calls attention to local issues, and builds international channels of communication between civic societies, in hopes that Taiwan will continue to strive as a democratic society. OTD believes that the development of civic consciousness shall lead Taiwan grow into an equal and just society regardless of ethnicity, gender, sexuality, and class, and a sovereign nation  that is built upon the foundations of comprehensive social justice.
        </p>
        <h3 className={styles.heading}> MISSION </h3>
        <div className={styles.headingBottom} />
        <p className={styles.bodyTextAbout}>
          Establish a political community of oversea Taiwanese students and young professionals, enhance local community ties, and advocate of for the development of Taiwanese independence, democracy, and human rights.
        </p>
      </Col>
    );

    return (
      <div>
        <div className={styles.aboutImgContainer}><img src={aboutImg} alt="About icon image" className={styles.aboutImg}/></div>
        <div className={styles.tabBand}>
          <div className={tab === 0 ? styles.tabCategoryLeftActive : styles.tabCategoryLeft} onClick={() => this.tabClick(0)}>
            TAC-EC
          </div>
          <div className={tab === 1 ? styles.tabCategoryActive : styles.tabCategory} onClick={() => this.tabClick(1)}>
            TANG
          </div>
          <div className={tab === 2 ? styles.tabCategoryActive : styles.tabCategory} onClick={() => this.tabClick(2)}>
            OTD
          </div>
        </div>
        <Container className={styles.landingBody}>
        	<Row>
            <img src={tab === 0 ? logo : (tab === 1 ? tangLogo : otdLogo)} alt={tab === 0 ? 'TACEC Logo' : (tab === 1 ? 'TANG Logo' : 'OTD Logo')}  className={styles.hostLogo} height="114px" />
	          {tab === 0 ? TACEC : (tab === 1 ? TANG : OTD)}
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
