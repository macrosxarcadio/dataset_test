import { Table } from 'antd'
import React, { useEffect, useState } from 'react';
import './datatable.css';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'
import TitleOfCol from './TitleOfCol';

const Datatable = ({ data, factors }) => {
    const { t } = useTranslation();
    const [dataProcesed, setDataProcesed] = useState([]);
    useEffect(() => {
        if (data !== undefined) {
            const dataEjecution = {
                estAge: data.estAge,
                estCorrAge: data.estCorrAge,
                LIm: data.LIm,
                LSm: data.LSm,
                name: factors.name,
                observation: factors.observation,
                city: factors.city,
                country: factors.country,
                institution: factors.institution,
                origin: factors.origin,
                chronology: factors.chronology,
                code: factors.code,
                sex: factors.sex,
                age: factors.age,
                type: factors.type,
                rl: factors.rl,
                pr: factors.pr,
                rdt: factors.rdt,
                key: 0
            }
            setDataProcesed((prevEstate) => [...prevEstate, dataEjecution]);
        };
    }
        , [data]);
    const columns = [
        {
            title: <TitleOfCol colTitle='description.contextInfo.country' />,
            dataIndex: 'country',
            key: 'country',
            width: '6em',
            fixed: 'left'
        },
        {
            title: <TitleOfCol colTitle='description.contextInfo.city' />,
            dataIndex: 'city',
            key: 'city',
            width: '4em',
        },
        {
            title: <TitleOfCol colTitle='description.contextInfo.institution' />,
            dataIndex: 'institution',
            key: 'institution',
            width: '6em',
        },
        {
            title: <TitleOfCol colTitle='description.contextInfo.origin' />,
            dataIndex: 'origin',
            key: 'origin',
            width: '6em',
        },
        {
            title: <TitleOfCol colTitle='description.contextInfo.chronology' />,
            dataIndex: 'chronology',
            key: 'chronology',
            width: '6em'

        },
        {
            title: <TitleOfCol colTitle='description.contextInfo.code' />,
            dataIndex: 'code',
            key: 'code',
            width: '5em',
        },
        {
            title: <TitleOfCol colTitle='description.contextInfo.observation' />,
            dataIndex: 'observation',
            key: 'observation',
            width: '7em',
        },
        {
            title: <TitleOfCol colTitle='description.contextInfo.sex' />,
            dataIndex: 'sex',
            key: 'sex',
            width: '4em',
        },
        {
            title: <TitleOfCol colTitle='description.contextInfo.age' />,
            dataIndex: 'age',
            key: 'age',
            width: '7em',
        },
        {
            title: <TitleOfCol colTitle='description.contextInfo.type' />,
            dataIndex: 'type',
            key: 'type',
            width: '9em',
        },
        {
            title: 'RL',
            dataIndex: 'rl',
            key: 'rl',
            width: '4em',
            fixed: 'right'
        },
        {
            title: 'PR',
            dataIndex: 'pr',
            key: 'pr',
            width: '4em',
            fixed: 'right'
        },
        {
            title: 'RDT',
            dataIndex: 'rdt',
            key: 'rdt',
            width: '4em',
            fixed: 'right'
        },
        {
            title: <TitleOfCol colTitle='description.tableResults.estAge' />,
            dataIndex: 'estAge',
            key: 'estAge',
            width: '5em',
            fixed: 'right'
        },
        {
            title: <TitleOfCol colTitle='description.tableResults.estCorrAge' />,
            dataIndex: 'estCorrAge',
            key: 'estCorrAge',
            width: '5em',
            fixed: 'right'
        },
        {
            title: <TitleOfCol colTitle='description.tableResults.LIm' />,
            dataIndex: 'LIm',
            key: 'LIm',
            width: '5em',
            fixed: 'right'
        },
        {
            title: <TitleOfCol colTitle='description.tableResults.LSm' />,
            dataIndex: 'LSm',
            key: 'LSm',
            width: '5em',
            fixed: 'right'
        },
    ];
    return (<><Table style={{ fontSize: '11px' }} rowKey={record => record.uid} dataSource={dataProcesed} columns={columns} bordered size="middle" scroll={{ y: '50vh', x: '1200px' }} pagination={false} /><p>{t('description.tablefoot')}</p></>);
}

export default Datatable

Datatable.propTypes = {
    data: PropTypes.arrayOf.isRequired,
    factors: PropTypes.arrayOf.isRequired,
}