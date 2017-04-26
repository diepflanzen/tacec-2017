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

const OTDProgramData = {
  July2a: [
    {
      title: '讓美國媒體對台灣的敘述更貼近真實',
      time: '14:00 - 14:50',
      speakers: '唐家婕 | 劉彥廷 | XXX',
      description: '美國媒體對台灣的報導常常充滿誤解，不少報導呈現出的台灣印象停留在台灣是中國內戰後分離的政權，並且認為台灣才是威脅兩岸和平的因子。台灣人民真正的國族認同，以及中國對台灣的打壓威脅常常被忽略。這樣的報導敘事有礙美國人真正了解台美中關係，並支持台灣。本場 Panel 將討論美國媒體報導台灣的模式以及背後的政治原因，並且從草根組織媒體關係經營的角度討論相應之道。'
    },
    {
      title: '如何爭取美國政策圈支持台灣',
      time: '15:00 - 15:50',
      speakers: 'Janice Chang | Louisa Chiang',
      description: '在華府，影響美國政策與國際政治作用力集中的三個領域分別為國會、國務院與智庫；而能夠以草根組織或公民力量影響的途徑則主要為國會遊說與智庫資訊揭露/政策建議。這場座談將邀請曾從事與智庫或國會相關工作的講者，分享各自領域的特性與政治力作用方式，了解非政府代表的組織和個人怎麼以自身力量槓桿美國與國際社會對台灣的政策走向。'
    },
    {
      title: '台美公民社會結盟的預期成效與挑戰',
      time: '16:00 - 16:50',
      speakers: 'Ciwang Teyra | 李紫彤',
      description: '在中華民國與美國政府政治交涉之外，各個公民 NGO 也在各種全球性議題上互相串連結盟。本場座談將以原住民權益、LGBTQ 人權為例，討論在政府主導的國際關係之外，公民團體可以怎麼進行國際串連，以及如何有效的藉由這些非政府組織串連來改善各族群的基本人權及生活。'
    },
  ],
  July2b: [
    {
      title: 'g0v 模式作為一種新組織經營法',
      time: '14:00 - 14:50',
      speakers: '蕭新晟',
      description: '從 2012 年第一個黑客松做出「中央政府預算視覺化」、到 318 後大松小松落玉盤的空前盛況，g0v 的無政府經營模式到底用了什麼樣的魔力召喚出神通廣大的鄉民？而美東的 g0v 社群從華府黑客松、紐澤西黑客松、紐約黑客松、到這次海台青社運松，各種美東土生土長的大小型專案又如何讓遠在海外的「沒有人」跨海對台灣社會改革作出驚人的貢獻呢？'
    },
    {
      title: '海外怎麼搞社運？從在地草根組織到全球串連',
      time: '15:00 - 15:50',
      speakers: '鍾佳君 | 徐歆惠 | 邱澗庚',
      description: '常常我們會問，你的社運「啟蒙」是什麼？得到的答案往往是因為朋友圈，或是參加了某次活動聽了某場演講。持續在地扎根的組織培力、議題關注、以及人脈網絡的建立都是必須的。但在承平時期，社運組織常常面臨靈感或資源不足等各種組織經營問題。這場 Panel 除了希望能藉由組織交流，讓各地潛在組織者找到長久經營的模式，也分享幾次大型串連活動的經驗，為之後可能的串連行動鋪路。'
    },
    {
      title: '草根組織網路行銷',
      time: '16:00 - 16:50',
      speakers: '蕭新晟',
      description: '對於組織者來說，我們總是希望能夠透過網路讓我們的理念觸及到更多我們的目標群眾，也希望這些人能夠被我們感動，並採取行動，如捐款、連署、轉貼文章、參加活動等。所以，好的行銷是運動成功的關鍵，這場 Panel 將分享如何有效地透過社群媒體、landing pages 等網路工具來行銷，提升觸及率以及轉換率。'
    },
  ],
  July3: [
    {
      title: '如何回應在國際戰略與經貿佈局下的台美中關係',
      time: '14:00 - 14:50',
      speakers: '賴中強 | 吳濬彥 | 林捷',
      description: '雖然公民團體往往無法躍升於國際政治競技場中第一線，但很可能是台灣面對全球化與新自由主義浪潮、跨國政商集團日益綿密的剝削網絡，在以國家為單位的全球治理現況中，捍衛基層人民權益的最後一道防線。本場 Panel 將討論在台美中戰略關係的角力中，公民團體如何回應在兩大強國對台灣施加的貿易與政治壓力。'
    },
    {
      title: '預留活動',
      time: '15:00 - 15:50',
      speakers: '預留講者',
      description: '預留敘述'
    },
  ]
}

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
        <h3 className={styles.heading}> OTD HACKATHON </h3>
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
