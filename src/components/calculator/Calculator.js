import React, { useState } from 'react'
import { Form, Input, Button, Card, Row, Select, Col } from 'antd';
import './calculator.css';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { CloseCircleOutlined, CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import config from '../../config.json'
import MetricData from './MetricData';

const { Option } = Select;

const Calculator = ({ forensicData, setFactors, buttonState }) => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(null);
    const [form] = Form.useForm();
    const onFinishFailed = (errorInfo) => {
        // eslint-disable-next-line
        console.log('unsucces: ', errorInfo);
    }
    async function askForData(values) {
        setFactors(values)
        setLoading('LOADING');
        try {
            const response = await fetch(`${config.api.BASE_URL}`, {
                method: 'POST',
                head: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (response.ok || response.status === 200) {
                try {
                    const json = await response.json();
                    const toothData = { estAge: json.EdadEstimada, estCorrAge: json.EdadEstCorreg, LIm: json.LIm, LSm: json.LSm };
                    setLoading('OK');
                    forensicData(toothData);
                    return
                }
                catch (error) {
                    setLoading('ERROR')
                }
            }
        } catch (error) {
            // eslint-disable-next-line
            console.log('error fetch:', error)
        }
    }
    const onFinish = (values) => askForData(values)

    const checkAge = (_,value) => {
        if (value === '' || (value >= 0 && value <= 120) || value === undefined){
            return Promise.resolve();
        }
        if ((value < 0 || value >= 120)){
            return Promise.reject(new Error('Age must be between 0 and 120'));
        }
        return Promise.reject(new Error('Age must be a number'));
    }

    return (
        <Card className="site-card-border-less-wrapper bigCard" size="small"  >
            <Card
                title={t('description.context')}
                className="smallCard"
                size='small'
            >
                <Row >
                    <Col span={24}>
                        <Form
                            form={form}
                            onFinish={() => onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Row gutter={{ xs: 8, sm: 8, md: 12, lg: 12, xl: 12, xxl: 50 }}>
                                <Col>
                                    <Form.Item label={t('description.contextInfo.name')} name="name" rules={[{ required: true }]} initialValue=''>
                                        <Input style={{ width: '12em' }} />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item label={t('description.contextInfo.contact')} name="contact" rules={[{ type: 'email', required: true }]} initialValue=''>
                                        <Input style={{ width: '12em' }} />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item label={t('description.contextInfo.country')} name="country" rules={[{ required: true }]} initialValue=''>
                                        <Input style={{ width: '12em' }} />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item label={t('description.contextInfo.city')} name="city" rules={[{ required: true }]} initialValue=''>
                                        <Input style={{ width: '12em' }} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={{ xs: 8, sm: 8, md: 12, lg: 12, xl: 12, xxl: 50 }}>
                                <Col>
                                    <Form.Item label={t('description.contextInfo.institution')} name="institution" rules={[{ required: true }]} initialValue=''>
                                        <Input style={{ width: '12em' }} />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item label={t('description.contextInfo.origin')} name="origin" rules={[{ required: true }]} initialValue=''>
                                        <Input style={{ width: '12em' }} />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item label={t('description.contextInfo.chronology')} name="chronology" rules={[{ required: true }]} initialValue=''>
                                        <Input style={{ width: '8em' }} />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item label={t('description.contextInfo.code')} name="code" rules={[{ required: true }]} initialValue=''>
                                        <Input style={{ width: '8em' }} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={{ xs: 8, sm: 8, md: 12, lg: 12, xl: 32, xxl: 50 }}>
                                <Col>
                                    <Form.Item label={t('description.contextInfo.sex')} name="sex" rules={[{ required: true }]} initialValue=''>
                                        <Input style={{ width: '8em' }} />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item initialValue="" label={t('description.contextInfo.age')} name="age" rules={[{
                                        validator:checkAge,
                                    }]}>
                                        <Input style={{ width: '8em' }} />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item label={t('description.contextInfo.type')} name="type" rules={[{ required: true }]} initialValue=''>
                                        <Select
                                            placeholder={t('description.select')}
                                            style={{
                                                width: 250,
                                            }}
                                            onChange={<Input />}
                                        >
                                            <Option value={t('description.tooth.FURI')}>  {t('description.tooth.FURI')}</Option>
                                            <Option value={t('description.tooth.SULI')}>  {t('description.tooth.SULI')}</Option>
                                            <Option value={t('description.tooth.SURI')}>  {t('description.tooth.SURI')}</Option>
                                            <Option value={t('description.tooth.ULC')}>  {t('description.tooth.ULC')}</Option>
                                            <Option value={t('description.tooth.URC')}>  {t('description.tooth.URC')}</Option>
                                            <Option value={t('description.tooth.FULP')}>  {t('description.tooth.FULP')}</Option>
                                            <Option value={t('description.tooth.FURP')}>  {t('description.tooth.FURP')}</Option>
                                            <Option value={t('description.tooth.SULP')}>  {t('description.tooth.SULP')}</Option>
                                            <Option value={t('description.tooth.SURP')}>  {t('description.tooth.SURP')}</Option>
                                            <Option value={t('description.tooth.FLLI')}>  {t('description.tooth.FLLI')}</Option>
                                            <Option value={t('description.tooth.FLRI')}>  {t('description.tooth.FLRI')}</Option>
                                            <Option value={t('description.tooth.SLLI')}>  {t('description.tooth.SLLI')}</Option>
                                            <Option value={t('description.tooth.SLRI')}>  {t('description.tooth.SLRI')}</Option>
                                            <Option value={t('description.tooth.LLC')}>  {t('description.tooth.LLC')}</Option>
                                            <Option value={t('description.tooth.LRC')}>  {t('description.tooth.LRC')}</Option>
                                            <Option value={t('description.tooth.FLLP')}>  {t('description.tooth.FLLP')}</Option>
                                            <Option value={t('description.tooth.FLRP')}>  {t('description.tooth.FLRP')}</Option>
                                            <Option value={t('description.tooth.SLLP')}>  {t('description.tooth.SLLP')}</Option>
                                            <Option value={t('description.tooth.SLRP')}>  {t('description.tooth.SLRP')}</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item label={t('description.contextInfo.observation')} name="observation" initialValue=''>
                                        <Input style={{ width: '8em' }} />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>

                    </Col>

                </Row>

            </Card>
            <Card
                title={< MetricData />}
                size='small'
                className="smallCard"
            >
                <Row>
                    <Col span={24}>
                        <Form
                            form={form}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Row gutter={{ xs: 8, sm: 8, md: 12, lg: 12, xl: 32, xxl: 50 }}>
                                <Col>
                                    <Form.Item
                                        label="RL"
                                        tooltip={{ title: t('description.metricDataHelp.rl') }}
                                        name="rl"
                                        rules={[
                                            () => ({
                                                validator(some, value) {
                                                    if (value <= 25.00 && value >= 5.00) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('Out of range'));
                                                }
                                            })
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item
                                        label="PR"
                                        name="pr"
                                        tooltip={{ title: t('description.metricDataHelp.pr') }}
                                        rules={[
                                            () => ({
                                                validator(some, value) {
                                                    if (value <= 12.00 && value >= 0.00) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('Out of range'));
                                                }
                                            })
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item
                                        label="RDT"
                                        name="rdt"
                                        tooltip={{ title: t('description.metricDataHelp.rdt') }}
                                        rules={[
                                            () => ({
                                                validator(some, value) {
                                                    if (value <= 15.00 && value >= 0.00) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('Out of range'));
                                                }
                                            })
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item className='send-and-check'>
                                        <Button htmlType='submit' disabled={buttonState || loading === 'LOADING'} style={{alignSelf: 'flex-start'}}>{t('description.calculate')}</Button>
                                        {loading === 'LOADING' && <LoadingOutlined spin style={{ fontSize: '32px', marginLeft: '0.5em' }} />}
                                        {loading === 'OK' && <CheckCircleOutlined style={{ fontSize: '32px', marginLeft: '0.5em', color: 'green' }} />}
                                        {loading === 'ERROR' && <CloseCircleOutlined style={{ fontSize: '32px', marginLeft: '0.5em', color: 'RED' }} />}
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Card>
        </Card >
    )
}
export default Calculator

Calculator.propTypes = {
    forensicData: PropTypes.func.isRequired,
    setFactors: PropTypes.func.isRequired,
    buttonState: PropTypes.func.isRequired
}