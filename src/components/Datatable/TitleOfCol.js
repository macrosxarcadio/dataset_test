import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const TitleOfCol = ({ colTitle }) => {
    const { t } = useTranslation();
    const columname = t(colTitle);
    return (<div className="titleData" style={{ fontSize: '11px' }}>{columname}</div>)
}

export default TitleOfCol

TitleOfCol.propTypes = {
    colTitle: PropTypes.string.isRequired
}