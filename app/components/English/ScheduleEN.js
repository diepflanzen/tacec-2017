import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import styles from '../../styles.css';
import programImg from '../../images/03_Program2_03.png';


export default class ScheduleEN extends React.Component {
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

    const July1Schedule = (
      <div className={styles.scheduleBox}>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>Before 15:00</div>
          <div className={styles.scheduleItemActivity}>Tour </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>15:00 - 22:00</div>
          <div className={styles.scheduleItemActivity}>Registration </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>17:00 - 19:00</div>
          <div className={styles.scheduleItemActivity}>Dinner </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>19:30 - 23:00</div>
          <div className={styles.scheduleItemActivity}>Reception </div>
        </div>
      </div>
    );

    const July2Schedule = (
      <div className={styles.scheduleBox}>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>06:15 - 07:30</div>
          <div className={styles.scheduleItemActivity}>Morning Activity </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>07:00 - 09:00</div>
          <div className={styles.scheduleItemActivity}>Breakfast </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>07:30 - 08:30</div>
          <div className={styles.scheduleItemActivity}>主日禮拜 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>08:30 - 09:00</div>
          <div className={styles.scheduleItemActivity}>Openning </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>09:00 - 09:45 </div>
          <div className={styles.scheduleItemActivity}>Keynote 1 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>09:45 - 10:30</div>
          <div className={styles.scheduleItemActivity}>Keynote 2 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>10:30 - 11:15</div>
          <div className={styles.scheduleItemActivity}>Keynote 3 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>11:15 - 12:00</div>
          <div className={styles.scheduleItemActivity}>Keynote 4 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>12:00 - 14:00</div>
          <div className={styles.scheduleItemActivity}>Lunch </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>14:00 - 14:50</div>
          <div className={styles.scheduleItemActivity}>Panel Session 1 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>15:00 - 15:50</div>
          <div className={styles.scheduleItemActivity}>Panel Session 2 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>16:00 - 16:50</div>
          <div className={styles.scheduleItemActivity}>Panel Session 3 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>17:00 - 19:00</div>
          <div className={styles.scheduleItemActivity}>Dinner </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>19:00 - 24:00 </div>
          <div className={styles.scheduleItemActivity}>OTD Hackathon </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>19:30 - 21:30</div>
          <div className={styles.scheduleItemActivity}>王康陸博士紀念音樂會 </div>
        </div>
      </div>
    );

    const July3Schedule = (
      <div className={styles.scheduleBox}>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>06:15 - 07:30</div>
          <div className={styles.scheduleItemActivity}>Morning Activity </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>07:00 - 09:00</div>
          <div className={styles.scheduleItemActivity}>Breakfast </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>07:30 - 08:30</div>
          <div className={styles.scheduleItemActivity}>主日禮拜 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>09:00 - 09:45 </div>
          <div className={styles.scheduleItemActivity}>Keynote 5 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>09:45 - 10:30</div>
          <div className={styles.scheduleItemActivity}>Keynote 6 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>10:30 - 11:15</div>
          <div className={styles.scheduleItemActivity}>Keynote 7 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>11:15 - 12:00</div>
          <div className={styles.scheduleItemActivity}>Keynote 8 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>12:00 - 14:00</div>
          <div className={styles.scheduleItemActivity}>Lunch </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>14:00 - 14:50</div>
          <div className={styles.scheduleItemActivity}>Panel Session 4 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>15:00 - 15:50</div>
          <div className={styles.scheduleItemActivity}>Panel Session 5 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>16:00 - 16:50</div>
          <div className={styles.scheduleItemActivity}>Panel Session 6 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>17:00 - 19:00</div>
          <div className={styles.scheduleItemActivity}>Dinner </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>19:30 - 21:30</div>
          <div className={styles.scheduleItemActivity}>台灣之夜（表演活動） </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>21:30 - 23:00 </div>
          <div className={styles.scheduleItemActivity}>台灣夜市 </div>
        </div>
      </div>
    );

    const July4Schedule = (
      <div className={styles.scheduleBox}>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>06:15 - 07:30</div>
          <div className={styles.scheduleItemActivity}>Morning Activity </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>07:00 - 09:00</div>
          <div className={styles.scheduleItemActivity}>Breakfast </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>07:30 - 08:30</div>
          <div className={styles.scheduleItemActivity}>主日禮拜 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>09:00 - 09:45 </div>
          <div className={styles.scheduleItemActivity}>Keynote 9 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>09:45 - 10:30</div>
          <div className={styles.scheduleItemActivity}>Keynote 10 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>10:30 - 11:15</div>
          <div className={styles.scheduleItemActivity}>Keynote 11 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>11:15 - 12:00</div>
          <div className={styles.scheduleItemActivity}>Keynote 12 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>12:00 - 14:00</div>
          <div className={styles.scheduleItemActivity}>Closing, Lunch & Checkout </div>
        </div>
      </div>
    )
    return (
      <div>
        <div className={styles.aboutImgContainer}><img src={programImg} className={styles.aboutImg}/></div>
        <div className={styles.tabBand}>
          <div className={tab === 0 ? styles.tabCategoryLeftActive : styles.tabCategoryLeft} onClick={() => this.tabClick(0)}>
            JULY 1, SAT
          </div>
          <div className={tab === 1 ? styles.tabCategoryActive : styles.tabCategory} onClick={() => this.tabClick(1)}>
            JULY 2, SUN
          </div>
          <div className={tab === 2 ? styles.tabCategoryActive : styles.tabCategory} onClick={() => this.tabClick(2)}>
            JULY 3, MON
          </div>
          <div className={tab === 3 ? styles.tabCategoryActive : styles.tabCategory} onClick={() => this.tabClick(3)}>
            JULY 4, TUE
          </div>
        </div>
        <Container className={styles.landingBody}>
        	<Row>
	          <Col md="10" md-offset="1">
              <div style={{height: 800}}>
    	          <p className={styles.bodyTextAbout}>
                  {tab === 0 ? July1Schedule : (tab === 1 ? July2Schedule : (tab === 2 ? July3Schedule : July4Schedule))}
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
