import React from 'react';

import Button from 'muicss/lib/react/button';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';

import styles from '../styles.css';
import websiteIcon from '../images/g0v_NameIsTaiwan_website_icon.png';
import docIcon from '../images/known_icon.png';
import logo from '../images/NameIsTaiwan_logo.png';
import axios from 'axios';
import ReactS3Uploader from 'react-s3-uploader';

export default class LandingCH extends React.Component {
  constructor(prop, context) {
    super(prop, context);
    this.state = {
      organization: null,
      organizationEmail: null,
      situation: null,
      userName: null,
      userEmail: null,
      imgUrl: null
    };
  }

  _onChangeOrg = (event) => {
    this.setState({organization: event.target.value});
  }

  _onChangeOrgEmail = (event) => {
    this.setState({organizationEmail: event.target.value});
  }

  _onChangeSituation = (event) => {
    this.setState({situation: event.target.value});
  }

  _onChangeName = (event) => {
    this.setState({userName: event.target.value});
  }

  _onChangeEmail = (event) => {
    this.setState({userEmail: event.target.value});
  }

   _onChangeUrl = (event) => {
    this.setState({url: event.target.value});
  }

  _onSave = () => {
    axios.post('http://localhost:3001/api/topics', this.state)
    .then(response => {
      console.log(response);
      if (response.status === 200) {
        this.setState( { hasReported: true} );
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  _handleUploadFinish = (uploadResult) => {
    const imgUrl = `https://nationa-treasure-uploader.herokuapp.com${uploadResult.publicUrl}`;
    this.setState({ imgUrl });
  }

  render() {

    var fluidCol = {
      paddingLeft: 0,
      paddingRight: 0
    };

    var pMargin = {
      height: 6,
      width: "100%"
    };

    return (
      <div>

        <Container fluid={true} className={styles.landingBody}>
        	<Row>
	          <Col md="12" md-offset="0" style={fluidCol}>
              <div className={styles.hero}>
    	          <h3 className={styles.headingWhiteText}>你也曾遇過一下國籍被誤認的困擾嗎？</h3>
                <div className={styles.heroTextWrap}>
      	          <p className={styles.bodyWhiteText}>留學生申請簽證或學校，海外開戶，申請工作，填寫申請各式文件時，國籍找不到台灣(Taiwan/ROC) 而被迫選擇 PRC or Taiwan, Province of China?
海外的大秘寶需要熱血如你 一身絕技如你來參與 </p>
                </div>
            		<a href="#reportForm"><Button className={styles.heroBtn} color="primary">網頁回報</Button></a>
                <a href="https://github.com/acsalu/Kiminonawa"
                  target="_blank"><Button className={styles.heroBtn} color="primary">下載 Chrome Extensions</Button>
                </a>
              </div>
	          </Col>


          </Row>

          <Row>
            <Col style={fluidCol}>
              <div className={styles.redDivider}></div>
            </Col>
          </Row>


          <Row>
          	<Col md="6" md-offset="3">
              <div className={styles.iconWrap}>
            		<img src={websiteIcon} className={styles.icon} />
              </div>
              <div className={styles.bodyTextWrap}>
                <p>這些狀況都是多年來海外遊子不斷遇到的困擾與心酸，甚至造成許多不便之處．要改善這個狀況，需要大家站出來出聲反應，讓這些海外機關及更多人知道，我們來自台灣</p>
                <p>本網站設置的目的，是提供海外台人一個通報的平台，來改善這個狀況，集結群眾的力量為台灣正名。我們收到通報之後，經過查證屬實，將以北美FAPA(Formosan Association for Public Affairs)名義向該機關提出正名要求，並追蹤ヱ機構是否回應訴求．這些年北美FAPA致力於正名活動，已向許多官方及民間機構提出訴求並成功正名，其中包含：移民署，FDA，Apple...等等．</p>
                <div style={pMargin}></div>
                <p>不要再讓台灣人在海外被吃豆腐了，一起動起來為台灣正名！</p>
              </div>
          	</Col>

            <Col md="12" style={fluidCol}>
              <Divider></Divider>
            </Col>


            <Col md="8" md-offset="2" className={styles.eventInfo}>
              <div className={styles.iconWrap}>
                <img src={docIcon} className={styles.icon} />
              </div>
              <h1 id="reportForm" className={styles.docIconText}>網頁回報案件</h1>
              {this.state.hasReported ? 
                (
                  <div className={styles.bodyTextWrap}>
                    <p> 感謝您的通報，我們會立即處理！ </p>
                  </div>
                )
                :
                (
                  <Form>
                      <Col md="5" md-offset="1">
                        <legend><h6 className={styles.formtext}>網站所有者</h6></legend>
                        <Input hint="機構網站名稱, 如Costco" onChange={this._onChangeOrg}/>
                      </Col>
                      <Col md="5" md-offset="1">
                        <legend><h6 className={styles.formtext}>問題網址</h6></legend>
                        <Input hint="http://www.url.com/page" onChange={this._onChangeUrl} />
                      </Col>

                      <Col md="5" md-offset="1">
                        <legend><h6 className={styles.formtext}>您的姓名</h6></legend>
                        <Input hint="王小明" onChange={this._onChangeName} />
                      </Col>
                      <Col md="5" md-offset="1">
                        <legend><h6 className={styles.formtext}>您的信箱</h6></legend>
                        <Input hint="user@email.com" onChange={this._onChangeEmail} />
                      </Col>

                      <Col md="5" md-offset="1">
                        <legend><h6 className={styles.formtext}>公司負責人信箱 (Optional)</h6></legend>
                        <Input hint="company@email.com" onChange={this._onChangeOrgEmail} />
                      </Col>
                      <Col md="5" md-offset="1">
                        <legend><h6 className={styles.formtext}>上傳螢幕截圖 (Optional)</h6></legend>
                         <ReactS3Uploader
                          signingUrl="https://nationa-treasure-uploader.herokuapp.com/s3/sign"
                          accept="image/*"
                          onFinish={this._handleUploadFinish}
                          uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}
                          contentDisposition="auto"
                          />
                      </Col>
                      <Col md="10" md-offset="1">
                        <legend><h6 className={styles.formtext}>詳細敘述 (Optional)</h6></legend>
                        <Textarea hint="請詳細指出名稱誤植處" onChange={this._onChangeSituation} />
                      </Col>
                      <Col md="5" md-offset="5">
                        <Button className={styles.heroBtn} variant="raised" onClick={this._onSave}>回覆</Button>
                      </Col>
                  </Form>
                )
              }
            </Col>
          </Row>
        </Container>
			</div>
		);
	}
}
