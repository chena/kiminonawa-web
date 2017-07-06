import React from 'react';

import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import styles from '../styles.css';
import taiwanIcon from '../images/taiwan_icon.png';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Container className={styles.pageBody}>
          <Row className={styles.pageTop}>
          	<Col md="4" md-offset="4">
          		<img src={taiwanIcon} className={styles.icon} />
          		<h3 className={styles.heading}>關於正名</h3>
          		<p className={styles.bodyText}>
                以下提供關於台灣正名相關資訊
              </p>
          	</Col>
          </Row>
          <Row>
          	<Col md="8" md-offset="2">
          		<div className={styles.greenDivider} />
          	</Col>
          </Row>
          <Row>
          	<Col md="8" md-offset="2">
          		<div className={styles.aboutSection}>
          			<h3 className={styles.staffCardHeading}>為什麼我們不喜歡Taiwan, Province of China？</h3>
          			<p className={styles.bodyText}>Taiwan, Province of China暗指台灣是中國的一省。但以目前狀況（de facto）來說，台灣並非為中國的一省，而是與中國不同的兩個主權。</p>
          		</div>
          	</Col>
            <Col md="8" md-offset="2">
              <div className={styles.aboutSection}>
                <h3 className={styles.staffCardHeading}>中國聲稱台灣是中國的一省，是否合理？</h3>
                <p className={styles.bodyText}>事實上並不合理。台灣的歷史大概可概分為：</p>
                <ol>
                  <li>史前時期</li>
                  <li>荷蘭時期</li>
                  <li>明鄭時期</li>
                  <li>清領時期</li>
                  <li>日治時期</li>
                  <li>中華民國統治時期</li>
                </ol>
                <p>其中，台灣被中國方面政權統治僅只有清領時期與中華民國統治時期，共XX年，僅佔台灣歷史XX%。</p>
                <p>因此，中國方面聲稱台灣是中國的一部分，事實上並不合理。</p>
                <p>如果台灣不屬於中國，為何國名寫「Republic of China」？</p>
                <p>Republic of China是中華民國的國名。在中國清朝結束統治後，將政府改制為民主政府，國名為中華民國，英文名稱為Republic of China。</p>
                <p>在1945年二次世界大戰結束後，由於日本放棄臺灣的統治權，因此台灣地區被中華民國接收代管。</p>
                <p>但在1949年，由於中國共產黨不喜歡當時的統治者國民黨，因此在當時蘇俄支持下聚集軍事力量，推翻當時國民黨於中國地區的政權。當時國民黨將剩餘的資源聚集起來運往台灣，希望能從台灣聚集力量後，重新發起戰爭，收回中國地區的失土。</p>
                <p>但在經過幾十年的演變後，目前中華民國已無能力重新開啟內戰；但中國卻聲稱台灣屬於中國，其實並不合理。</p>
              </div>
            </Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.aboutSection}>
          			<h3 className={styles.staffCardHeading}>所謂的一中原則究竟是什麼？</h3>
          			<p className={styles.bodyText}>過往，台灣的國民黨政權堅持「中國只有一個」，而共產黨也堅持「中國只有一個」，因此在1992年時，雙方進行了會談。雖然會談上沒有談出共識，但在xxxx年，因為選舉的需要，？？喊出了「九二共識」，對台灣方面來說，這個共識是「一個中國，各自表述」，但中國卻堅持其中的「一個中國」，並堅持他們是唯一的正統代理。事實上，台灣（中華民國）與中國只是中國土地上不同時期的統治者，兩者並不相同。</p>
          		</div>
          	</Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.aboutSection}>
          			<h3 className={styles.staffCardHeading}>台灣人是中國人嗎？</h3>
          			<p className={styles.bodyText}>A根據台灣2016年最新兩份民調結果顯示，聯合報民調僅有一成比例之台灣民眾認為自己也是中國人，七成三的台灣民眾認為是自己是台灣人。新國策智庫民調則指出，八成六台灣民眾認為自己是台灣人，僅有近7%比例的民眾認為自己是中國人。</p>
                <p>由於中國的政權並非民主政體，因此台灣人也不希望被中國統一。</p>
          		</div>
          	</Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.aboutSection}>
          			<h3 className={styles.staffCardHeading}>我們該怎麼辦</h3>
          			<p className={styles.bodyText}>請幫忙把Taiwan, Province of China改為Taiwan即可。</p>
          		</div>
          	</Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.aboutSection}>
          			<h3 className={styles.staffCardHeading}>我們是follow聯合國的命名（ISO3166-2）原則，真的可以改嗎？</h3>
          			<p className={styles.bodyText}>有另外一個命名原則與這個不一樣，是FIPS 10-4，可以參照這個原則，會對台灣更友善。謝謝！</p>
                <div className={styles.letterBox}>
                  <p>Dear Sir or Madam,</p>
                  <p>It seems your web service is using the country list with the ISO3166-2 list.</p>
                  <p>It is advised to use country names in the GENC[1] standard (formly known as FIPS 10-4) to avoid controversy of Taiwan and to be able to include Kosovo.</p>
                  <p>[1] https://www.fgdc.gov/standards/news/GENC</p>
                </div>
          		</div>
          	</Col>
            <Col md="8" md-offset="2">
              <div className={styles.aboutSection}>
                <h3 className={styles.staffCardHeading}>如果改名以後，中國的使用者生氣怎麼辦？</h3>
                <p className={styles.bodyText}>一個國家的認同不應該取決於其他國家人民的喜好。</p>
              </div>
            </Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.aboutSection}>
          			<h3 className={styles.staffCardHeading}>相關資料</h3>
                <p className={styles.bodyText}>資料1: 老外看兩岸關係(經典影片重製)</p>
                <style>{"\
                  .video-container {\
                    position:relative;\
                    padding-bottom:56.25%;\
                    padding-top:30px;\
                    height:0;\
                    overflow:hidden;\
                  }\
                  .video-container iframe, .video-container object, .video-container embed {\
                    position:absolute;\
                    top:0;\
                    left:0;\
                    width:100%;\
                    height:100%;\
                  }\
                "}</style>
                <div className="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/PCaJiNjyjDk" frameborder="0" allowfullscreen></iframe></div>
          			<p className={styles.bodyText}>資料2: <a href="https://zh.wikipedia.org/wiki/%E5%8F%B0%E7%81%A3%E6%AD%B7%E5%8F%B2" target="_blank">臺灣歷史Wiki</a></p>
          		</div>
          	</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
