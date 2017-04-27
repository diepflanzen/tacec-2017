import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Motion, spring } from 'react-motion';
import Dialog from 'material-ui/Dialog';

import styles from '../styles.css';
import otdImg from '../images/otd_summit.png';

import logo from '../images/tacec_logo.png';
import tangLogo from '../images/tang_logo.png';
import otdLogo from '../images/otd_logo.png';
import plusSign from '../images/plusSign.jpg';
import minusSign from '../images/minusSign.jpg';

import OTDProgramData from '../data/OTDProgramData';

export default class OTDProgram extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openedTitle: null, // null means everything is closed
      isSubsidyDialogOpen: false,
      isProjectListDialogOpen: false
    };
  }

  handleProgramClick = (title) => {
    this.setState({
      openedTitle: this.state.openedTitle === title ? null : title
    });
  }

  handleOpen = () => {
    this.setState({isSubsidyDialogOpen: true});
  };

  handleClose = () => {
    this.setState({isSubsidyDialogOpen: false});
  };

  render() {
    const lang = this.props.lang === null ? "zh" : this.props.lang;
    const { tab } = this.state;
    const OTDSummitText = (
      <Col md="10" md-offset="1">
        {OTDProgramData.otdIntro[lang]}
        <h3 className={styles.heading}> G0V HACKATHON </h3>
        <div className={styles.headingBottom} />
        {OTDProgramData.g0vIntro[lang]}
      </Col>
    );

    const subsidyDialogTitleStyle = {
      fontSize: 33,
      color: '#64a680',
      fontWeight: 'bolder',
      paddingTop: 65,
      paddingLeft: 65
    };

    const subsidyDialogBodyStyle = {
      padding: '0px 65px 24px'
    };

    // all arguments are strings
    const OTDProgramBody = ({title, time, speakers, description}, index) => {
      const { openedTitle } = this.state;
      const amIClicked = openedTitle === title;
      return (
        <div key={["session",index].join("-")}>
          <div className={styles.OTDProgramBody} onClick={() => this.handleProgramClick(title)}>
            <Col md="6">
              <div style={{display: 'flex'}}>
                <img src={amIClicked ? minusSign : plusSign} className={styles.OTDPlusSign} />
                <div className={styles.OTDProgramDesc}>
                  {title[lang]}
                </div>
              </div>
            </Col>
            <Col md="2">
              <div>
                {time}
              </div>
            </Col>
            <Col md="4">
              <div className={styles.OTDProgramSpeakers}>
                {speakers[lang]}
              </div>
            </Col>
          </div>
          <Motion defaultStyle={{ h: 0}} style={{ h: amIClicked ? spring(130) : spring(0)}}>
              {({ h }) =>
                <div className={styles.OTDProgramDetails} style={{height: h}}>
                  <p style={{margin: 30, marginTop: 20}}>{description[lang]}</p>
                </div>
              }
          </Motion>
        </div>
    )};

    const panelDiscussion = (
      <Col md="10" md-offset="1">
        <h3 className={styles.heading}> PANEL DISCUSSION </h3>
        <div className={styles.headingBottom} />
        {OTDProgramData.panelsByDate.map((panel, panelIndex) => [
          <img src={panel.dateImageSource} style={{marginTop: panelIndex === 0 ? 0 : 50}} />,
          panel.tracks.map(track =>
            <div>
              <h3 className={styles.OTDProgramHeading}>
                {track.title[lang]}
                <span className={styles.OTDProgramSubHeading}>
                  {track.subtitle[lang]}
                </span>
              </h3>
              {track.sessions.map(OTDProgramBody)}
            </div>
          )
        ])}
      </Col>
    );


    return (
      <div>
        <div className={styles.aboutImgContainer}><img src={otdImg} alt="OTD Summit image" className={styles.otdImg}/></div>
        <Container className={styles.landingBody}>
		<Row style={{marginBottom: 55}}>
            {OTDSummitText}
          </Row>
          <Row>
            <a href="https://g0vus.hackpad.com/2017-g0v--vkwG8i3qu5z" target="_blank">
              <Button color="primary" className={styles.OTDButton}>專案列表</Button>
            </a>
            <Button
              color="primary"
              className={styles.OTDButton}
              style={{marginLeft: window.innerWidth < 500 ? 0 : 7}}
              onClick={this.handleOpen}
            >
              補助辦法
            </Button>
          </Row>
          <Row>
            {panelDiscussion}
          </Row>
        </Container>
        <div style={{height: 150, width: '100%', backgroundColor: '#64a680'}}>
          <a href="https://tang.regfox.com/tacec-tang-conference-wotd-2017"
            target="_blank">
            <Button color="primary" className={styles.applyNowButton}>Register Now</Button>
          </a>
        </div>
        <Dialog
          title="報名費與補助"
          titleStyle={subsidyDialogTitleStyle}
          bodyStyle={subsidyDialogBodyStyle}
          modal={false}
          open={this.state.isSubsidyDialogOpen}
          onRequestClose={this.handleClose}
        >
          <div style={{display: 'flex', color: '#64a680'}}>
            <div>早鳥 $</div>
            <div>180</div>
            <div>早鳥 $</div>
            <div>早鳥 $</div>
          </div>
          黑客松貢獻者能獲得交通補助以及 $80 的報名費補助
          若您參與的專案有在最後一天的大會中進行成果報告，並且您在專案小組名單上，OTD可能通交通費以及報名費補助:
          報名費補助： $80
          旅遊補助 以下擇一
          開車
          飛機火車
        </Dialog>
      </div>
    );
  }
}
