import React, { useState, useEffect } from 'react'
import { Col, Row, PageHeader, Segmented, Modal, Input, Button } from 'antd'
import i18next from 'i18next'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useTranslation } from 'react-i18next';
import i18n from './i18n'
import Calculator from './components/calculator/Calculator'
import Datatable from './components/Datatable/Datatable'
import Logos from './components/Logos/Logos'

const App = () => {
  const { t } = useTranslation();
  const [forensicData, setForensicData] = useState();
  const [factors, setFactors] = useState();
  const [lang, setLang] = useState(i18next.language === 'en' ? 'English' : 'Español');
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [enableButton, setEnableButton] = useState(true);
  const [userCaptcha, setUserCaptcha] = useState();
  useEffect(() => loadCaptchaEnginge(6), []);

  const doSubmit = () => {
    if (validateCaptcha(userCaptcha) === true) {
      setIsModalVisible(false);
      setEnableButton(false);
    }
    else {
      setUserCaptcha('');
    }
  }
  const insertValue = (event) => {
    setUserCaptcha(event.target.value);
  }

  const setLangAction = () =>{
    i18n.changeLanguage(lang === 'English' ? 'es' : 'en');
    setLang(i18next.language === 'en' ? 'English' : 'Español');
  }

  return (
    <div className="App">
      <Row justify='center'>
        <Col span={22}>
          <Logos />
          <Row justify='center'>
            <Col style={{ display: 'flex', backgroundColor: '#ec7771', alignItems: 'center', borderRadius: '3px', width: '100%' }}>
              <Col span={22}>
                <PageHeader
                  className="site-page-header"
                  title="Forensic International Data Base v.2"
                  subTitle="(FIDB.2)"
                  style={{ padding: '0.1em', marginLeft: '0.5em' }} />
              </Col>
              <Col span={2} style={{ display: 'flex', justifyContent: 'end' }}><Segmented options={['English', 'Español']} value={lang} onChange={setLangAction} style={{ margin: '0.5em' }} defaultValue={i18next.language === 'en' ? 'English' : 'Español'} /></Col>
            </Col>
          </Row>
          <Row justify="center" aling="top" style={{ paddingTop: '2em' }}>
            <Col style={{ justifyContent: 'center', width: '100%' }}>
              <Calculator forensicData={setForensicData} setFactors={setFactors} buttonState={enableButton} />
            </Col>
          </Row>
          <Row justify="center" aling="top" style={{ paddingTop: '2em' }}>
            <Col style={{ justifyContent: 'center', fontSize: '11px' }}>
              <Datatable data={forensicData} factors={factors} />
            </Col>
          </Row>
          <Row justify="center" aling="top" style={{ paddingTop: '2em' }}>
            <Col style={{ justifyContent: 'center', fontSize: '11px' }}>
              <p>build by <a href="https://commite.ar/">Commit36</a></p>
            </Col>
          </Row>
          <Modal title={t('description.captchaTitle')} visible={isModalVisible} centered closable={false} footer={<Button onClick={() => doSubmit()} >{t('description.captchaButton')}</Button>}>
            <LoadCanvasTemplate reloadText={t('description.captchaReload')} />
            <Input style={{ marginTop: '1em', marginBottom: '1em' }} onChange={insertValue} value={userCaptcha} />
          </Modal>
        </Col>
      </Row >
    </div >
  );
}

export default App
