import React from 'react';

import styles from '../styles.css';

import aboutImg from '../images/02_about_03.png';
import tacecLogo from '../images/tacec_logo.png';
import tangLogo from '../images/tang_logo.png';
import otdLogo from '../images/otd_logo.png';

const textStyle = styles.bodyTextAbout

function Paragraph (props) {
  return <p className={textStyle}>{props.children}</p>
}
function Item (props) {
  return <span className={textStyle}>{props.children}</span>
}
function Itemize (props) {
  return <ul>{props.children.map((item, index) => <li key={index}>{item}</li>)}</ul>
}

// 同一個方框框 [ ] 包住的東西每一項必須有獨立的 key.
// 可以是任何字串，只要同一個方框裡面都不一樣就好。
const AboutData = Object.freeze({
  aboutImageSource: aboutImg,
  aboutImageAlternativeText: {
    en: 'About icon',
    zh: 'About 圖標',
  },
  organizations: [
    {
      name: {
        en: "TACEC",
        zh: "TACEC",
      },
      logoImageSource: tacecLogo,
      logoImageAlternativeText: {
        en: "TACEC Logo",
        zh: "TACEC 標誌",
      },
      introduction: {
        en: [
          <Paragraph key="p1">
            The first Taiwanese American Conference-East Cost (TACEC) was held in 1970 at Downingtown, Pennsylvania. It was a summer retreat for the area's Christian families but has turned into an event for the entire Taiwanese American community. Over the years, the conference has expanded its programs to encompass cultural and social activities, as well as issues related to human rights, the environment and current events in Taiwan. The number of participants has steadily grown, numbering over 2,000 in the late 80s and 90s.
          </Paragraph>
          ,
          <Paragraph key="p2">
            TACEC is hosted by Taiwanese Communities in five different areas: New York, New Jersey, Boston, Washington and Philadelphia (including south Jersey and Delaware). Each region is on a five year rotation and takes turns chairing the TACEC board that overseas the operation of TACEC.
          </Paragraph>
          ,
          <Paragraph key="p3">
            The conference now has a participation of about 600 - 800 people annually, with the majority being comprised of first generation Taiwanese Americans. Many second generation Taiwanese Americans who now have children have eagerly expressed interest in developing TACEC programs for their children and in boosting participation among their generational peers.
          </Paragraph>
        ],
        zh: [],
      },
      mission: {
        en: [
          <Itemize key="p1">
            <Item>
              To stimulate public interest in the cultural, religious, educational, social economic and other activities of the Taiwanese Americans.
            </Item>
            <Item>
              To enhance the Taiwanese cultural and religious heritage among Taiwanese Americans.
            </Item>
            <Item>
              To facilitate social contacts and exchanges among Taiwanese Americans and to promote friendship, mutual assistance and cooperation within the Taiwanese American community and between Taiwanese and other ethnic community.
            </Item>
            <Item>
              To organize and hold an annual conference or workshops at various college campus in the Northeastern region for the consideration and discussion of various topics relevant to life in the United States and issues related to current and future development of Taiwan.
            </Item>
          </Itemize>
        ],
        zh: [],
      },
    },
    {
      name: {
        en: "TANG",
        zh: "TANG",
      },
      logoImageSource: tangLogo,
      logoImageAlternativeText: {
        en: "TANG Logo",
        zh: "TACEC 標誌",
      },
      introduction: {
        en: [
          <Paragraph key="p1">
            TANG is an all-volunteer organization focused on creating a nurturing community for Taiwanese American youth. We mentor our TA siblings and encourage them to become involved members of society by exploring our four themes: Identity, Community, Growth, and Family.  We also see ourselves as a convener for our 1st, 2nd, and 3rd generation Taiwanese Americans, providing a rare opportunity for families and old friends to reunite. We serve community members of all ages, with programs geared towards children age 3-6 up through Taiwanese American parents in their 30s-40s with children.
          </Paragraph>
          ,
          <Paragraph key="p2">
            TANG traces its roots back to TACEC (Taiwanese American Conference East Coast), a conference formed by the first wave of Taiwanese immigrants arriving in America in the 70’s and 80’s. Though it began as a retreat for families living in the Northeast, TACEC’s focus soon grew to incorporate issues related to human rights and advancing freedom and democracy on the island nation of Taiwan. Parents attending TACEC brought their children in tow, creating an impromptu community for second generation Taiwanese Americans. These youth eventually organized to create their own programming and served as one of the nation’s earliest communities for native born Taiwanese Americans, formally becoming TANG (Taiwanese American Next Generation) in 2003.
          </Paragraph>
        ],
        zh: [],
      },
      mission: {
        en: [
          <Paragraph key="p1">
            For the youth to be enriched by a loving Taiwanese community, so they can obtain a stronger sense of self and passionately pursue their convictions.
          </Paragraph>
        ],
        zh: [],
      },
    },
    {
      name: {
        en: "OTD",
        zh: "OTD",
      },
      logoImageSource: otdLogo,
      logoImageAlternativeText: {
        en: "OTD Logo",
        zh: "OTD 標誌",
      },
      introduction: {
        en: [
          <Paragraph key="p1">
            Overseas Taiwanese for Democracy (OTD) is an alliance of students and young professionals who is devoted to the democratic development of Taiwan that has formed since the global solidarity actions for Sunflower Movement in 2014. In the past three years, members of OTD have established Cafe Philo (an intellectual and cultural salon), g0v (coders for government transparency), and study groups,  and planned numerous documentary screenings and street protests on the issues of textbook reforms and marriage equality.  OTD calls attention to local issues, and builds international channels of communication between civic societies, in hopes that Taiwan will continue to strive as a democratic society. OTD believes that the development of civic consciousness shall lead Taiwan grow into an equal and just society regardless of ethnicity, gender, sexuality, and class, and a sovereign nation that is built upon the foundations of comprehensive social justice.
          </Paragraph>
        ],
        zh: [],
      },
      mission: {
        en: [
          <Paragraph key="p1">
            Establish a political community of oversea Taiwanese students and young professionals, enhance local community ties, and advocate of for the development of Taiwanese independence, democracy, and human rights.  
          </Paragraph>
        ],
        zh: [],
      },
    },
  ],
});

export default AboutData;
