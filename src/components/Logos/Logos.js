import React from 'react'
import { Col, Row } from 'antd'
import { ReactComponent as Uba } from '../../assets/uba.svg'
import { ReactComponent as Iisap } from '../../assets/iisap.svg'
import { ReactComponent as Uibaf } from '../../assets/uibaf.svg'
import { ReactComponent as Endo } from '../../assets/endo.svg'
import { ReactComponent as UbaOdonto } from '../../assets/uba_odonto.svg'
/* import { ReactComponent as Commit} from '../../assets/commit.svg' */

const Logos = () => <Row gutter={{ xs: 8, sm: 8, md: 12, lg: 12, xl: 12, xxl: 20 }} style={{ alignItems: 'center', justifyContent: 'center', minHeight:'80px' }}>
    <Col><Uba style={{ height: '70px' }} /></Col>
    <Col><Iisap style={{ height: '60px' }} /></Col>
    <Col><Uibaf style={{ height: '60px' }} /></Col>
    <Col><Endo style={{ height: '50px' }} /></Col>
    <Col><UbaOdonto style={{ height: '40px' }} /></Col>
{/*     <Col><a href="https://commite.ar/"><Commit  style={{height:'70px', width:'80px'}} aria-label="commit36"/></a></Col> */}
</Row>

export default Logos