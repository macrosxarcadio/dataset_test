import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './calculator.css'

const MetricData = () => {
    const {t} = useTranslation(); 
    return (
    <div className='cajapadre'>
    <p className='titulo'>{t('description.metricData')}</p>
    <p className='subtitulo'>{t('description.recommendation')}</p>
    </div>    
); 
}

export default MetricData