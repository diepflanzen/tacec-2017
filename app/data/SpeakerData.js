import React from 'react';

import styles from '../styles.css';

import 劉彥廷 from './speaker-profile/劉彥廷.jpg';
import 杜荷洲 from './speaker-profile/杜荷洲.jpg';

// 同一個方框框 [ ] 包住的東西每一項必須有獨立的 key.
// 可以是任何字串，只要同一個方框裡面都不一樣就好。
//
//
// spakers: [{
//   id: string, // to link with program
//   name: {en: string, zh: string},
//   affliation: ({en: string, zh: string} || null),
//   intro: {en: string, zh: string},
//   profile: string,
//   profileProps:
// }]
const SpeakerData = Object.freeze({
  speakers: [
    {
      id: '劉彥廷',
      name: {
        en: '劉彥廷',
        zh: '劉彥廷',
      },
      affliation: {
        en: '紐約哲學星期五、海外台灣青年陣線',
        zh: '紐約哲學星期五、海外台灣青年陣線',
      },
      intro: {
        en: '因人脈廣闊故有「美東王金平，紐約彭于晏」之稱，2014年參與初始籌辦紐約哲五，至今紐哲已經超過 1000 人次參加。2016 年號招志工主辦紐約 g0v，也吸引超過 100 人參與。「聲援婚姻平權」、「營救李明哲」等紐約街頭運動發起人，也曾投書刊登在如《想想論壇》、《菜市場政治學》、《報導者》等海內外平面媒體。',
        zh: '因人脈廣闊故有「美東王金平，紐約彭于晏」之稱，2014年參與初始籌辦紐約哲五，至今紐哲已經超過 1000 人次參加。2016 年號招志工主辦紐約 g0v，也吸引超過 100 人參與。「聲援婚姻平權」、「營救李明哲」等紐約街頭運動發起人，也曾投書刊登在如《想想論壇》、《菜市場政治學》、《報導者》等海內外平面媒體。',
      },
      profileImageSource: 劉彥廷,
      profileImageExtraProps: null,
    },
    {
      id: '杜荷洲',
      name: {
        en: '杜荷洲',
        zh: '杜荷洲',
      },
      affliation: {
        en: '台灣人公共事務會麻州分會',
        zh: '台灣人公共事務會麻州分會',
      },
      intro: {
        en: '台北長大，成長在一個” 美麗島時還沒出生，野百合時還太小，野草莓時已出國，太陽花時年已過三十” 的世代；一個台灣主體意識雖已漸漸萌芽，但還是徹底接受了完整的黨國教育的世代。我的夢想是希望台灣能夠正正常常的享有一個「國家」的身分。我覺得，既然我們人在美國，就應該做只有在海外才能為台灣做的事: 將台灣介紹到世界的舞台上. 2011 年到Boston工作後，加入FAPA草根民運的行列，向美國大眾介紹台灣, 也到國會遊說有利於台灣及台美關係的法案。我也是CafePhilo@Boston的義工，還有Boston Taiwanese Biotechnology Association (BTBA) 的創會會員之一。',
        zh: '台北長大，成長在一個” 美麗島時還沒出生，野百合時還太小，野草莓時已出國，太陽花時年已過三十” 的世代；一個台灣主體意識雖已漸漸萌芽，但還是徹底接受了完整的黨國教育的世代。我的夢想是希望台灣能夠正正常常的享有一個「國家」的身分。我覺得，既然我們人在美國，就應該做只有在海外才能為台灣做的事: 將台灣介紹到世界的舞台上. 2011 年到Boston工作後，加入FAPA草根民運的行列，向美國大眾介紹台灣, 也到國會遊說有利於台灣及台美關係的法案。我也是CafePhilo@Boston的義工，還有Boston Taiwanese Biotechnology Association (BTBA) 的創會會員之一。',
      },
      profileImageSource: 杜荷洲,
      profileImageExtraProps: null,
    },
  ]
});

export default SpeakerData;
