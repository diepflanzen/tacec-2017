import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Motion, spring } from 'react-motion';

import styles from '../../styles.css';
import otdImg from '../../images/otd_summit.png';
import july2img from '../../images/july2.jpg';
import july3img from '../../images/july3.jpg';

import logo from '../../images/tacec_logo.png';
import tangLogo from '../../images/tang_logo.png';
import otdLogo from '../../images/otd_logo.png';
import plusSign from '../../images/plusSign.jpg';
import minusSign from '../../images/minusSign.jpg';

import OTDProgramData from '../../data/OTDProgramData';

export default class LandingEN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      clickedTitle: ''
    };
  }

  handleProgramClick = (title) => {
    this.setState({
      open: !this.state.open,
      clickedTitle: title
    });
  }

  render() {
    const { tab } = this.state;
    const OTDSummitText = (
      <Col md="10" md-offset="1">
        <p className={styles.bodyTextOTD}>
          海外台灣青年陣線（Overseas Taiwanese for Democracy)， <br />又稱海台青或 OTD，是後 318 的海外台灣人社運組織。
         </p>
         <p className={styles.bodyTextOTD}>
          2017海台青年會結合NGO和g0v黑客松，聚焦在全球化及台美中特殊國際政治下，台灣人在海外所能發揮的影響力。 <br />我們希望利用地利之便，一方面幫助台灣對外抗衡全球化浪潮和區域政治角力，一方面加速台灣內部轉型正義和社會改革的腳步！
         </p>
        <h3 className={styles.heading}> G0V HACKATHON </h3>
        <div className={styles.headingBottom} />
        <p className={styles.bodyTextOTD}>
         36 小時熱血衝刺，規劃行動方案、開發資訊與資料工具、認識十八般武藝的朋友！
        </p>
        <p className={styles.bodyTextOTD}>
          Hackathon 給人的印象就是coding…coding…coding…但參加過 g0v 黑客松的人都知道，程式只是專案的一部份；專案的完成，更仰賴議題的發掘、強大的宣傳、有效率的地面組織戰、或對開放資料做出有影響力的詮釋。廣義來說，社運組織的輿情監控、《圖文不符》的各種懶人包、開放政治獻金的監察院影印部隊，都是不含程式的專案呢！今年，我們想嘗試一個新想法，將 g0v 黑客松的概念帶進美東的 NGO 和社運模式！
        </p>
        <p className={styles.bodyTextOTD}>
          不要問為什麼沒有人做這個，先承認你就是「沒有人」，因為「沒有人」是萬能的！
        </p>
        <ul>
          <li>
            <span className={styles.bodyTextOTD}>
             所有專案初期保持開源，開放，共同協作的模式
            </span>
          </li>
          <li>
            <span className={styles.bodyTextOTD}>
             扭轉社運圈遇到議題先開冗長共識營的運作模式，兩天做出可行的成果、時間表、組織分工
           </span>
          </li>
          <li>
            <span className={styles.bodyTextOTD}>
              接力完成過去兩屆美東 g0v 中持續推動的專案
           </span>
          </li>
        </ul>
      </Col>
    );

    // all arguments are strings
    const OTDProgramBody = ({title, time, speakers, description}) => {
      const { open, clickedTitle } = this.state;
      const amIClicked = open && clickedTitle === title;
      return (
        <div>
          <div className={styles.OTDProgramBody} onClick={() => this.handleProgramClick(title)}>
            <Col md="6">
              <div style={{display: 'flex'}}>
                <img src={amIClicked ? minusSign : plusSign} className={styles.OTDPlusSign} />
                <div className={styles.OTDProgramDesc}>
                  {title}
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
                {speakers}
              </div>
            </Col>
          </div>
          <Motion defaultStyle={{ h: 0}} style={{ h: amIClicked ? spring(130) : spring(0)}}>
              {({ h }) =>
                <div className={styles.OTDProgramDetails} style={{height: h}}>
                  <p style={{margin: 30, marginTop: 20}}>{description}</p>
                </div>
              }
          </Motion>
        </div>
    )};

    const panelDiscussion = (
      <Col md="10" md-offset="1">
        <h3 className={styles.heading}> PANEL DISCUSSION </h3>
        <div className={styles.headingBottom} />
        <img src={july2img} />
        <div>
          <h3 className={styles.OTDProgramHeading}> 在美台灣施力點 <span className={styles.OTDProgramSubHeading}>因為我們在美國，有些事只有我們能做! </span></h3>
          {OTDProgramData.July2a.map(data => OTDProgramBody(data))}
        </div>
        <div>
          <h3 className={styles.OTDProgramHeading}> 組織經營工作坊 <span className={styles.OTDProgramSubHeading}>分享在美國組織行動的技巧與經驗 </span></h3>
          {OTDProgramData.July2b.map(data => OTDProgramBody(data))}
        </div>
        <img src={july3img} style={{marginTop: 50}}/>
        <div>
          <h3 className={styles.OTDProgramHeading}> 台美議題思辨 <span className={styles.OTDProgramSubHeading}>在行動時，怎麼才知道什麼才是對的方向？ </span></h3>
          {OTDProgramData.July3.map(data => OTDProgramBody(data))}
        </div>
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
            <Button color="primary" className={styles.OTDButton}>專案列表</Button>
            <Button color="primary" className={styles.OTDButton} style={{marginLeft: window.innerWidth < 500 ? 0 : 7}}>補助辦法</Button>
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
      </div>
    );
  }
}
