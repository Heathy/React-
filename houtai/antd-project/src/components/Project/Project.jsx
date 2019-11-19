import React from 'react';
import '../../assets/css/Project.css'
import { Icon, Calendar, Statistic, Row, Col, Avatar, } from 'antd';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
export default class Technology extends React.Component {
    
    render() {
        return (
            <>
                <div id="header" style={{
                        minHeight: '45px'
                    }}>
                    <span style={{
                        lineHeight: '45px',
                        fontSize:'14px',
                        color: 'orange',
                        marginLeft: '15px',
                        marginRight: '8px',
                    }}>学员后台</span>
                    <Icon type="right" />
                    <span style={{
                        lineHeight: '45px',
                        fontSize:'14px',
                        marginLeft: '10px',
                    }}>项目上传</span>
                </div>
                <div className='update'>学员项目上传</div>
                <div className='timeList'>
                    <div style={{
                     width: 300, border: '1px solid #d9d9d9', borderRadius: 4 ,
                     }}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                    </div>
                    <div className='plans'>项目时间计划</div>
                </div>
                <div className='overtime'>
                    <Row gutter={16} style={{
                        display: 'fixed',
                        top: '-402px',
                        right: '-1002px'
                    }}>
                        <Col span={20}>
                        <Countdown title="距离项目的时间" value={deadline} format="D 天 H 时 m 分 s 秒" />
                        </Col>
                    </Row>
                </div>
                <div className='goplan'>
                    <Avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574057674815&di=16fb7a9ba720a7ed291d804e39591bf9&imgtype=0&src=http%3A%2F%2Fa-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F29%2F20180729104157_HsVPW.jpeg"  style={{
                        dispaly: 'block',
                        backgraundSize: '100px',
                        margin: '30px',
                        width: '100px',
                        height: '100px',
                        backgraundPosition: '-210px -20px'
                    }}/>
                </div>
                <div className='dianzan'>
                    <Row gutter={16}>
                        <Col span={12}>
                        <Statistic title="点赞量" value={1011} prefix={<Icon type="like" />} />
                        </Col>
                    </Row>
                </div>
                <div className='hope'>
                    -----有了对蓝天的憧憬，雄鹰振翅而飞，于是迎接它的是万里晴空-----
                </div>
                
            </>
        )
    }

}
function onPanelChange(value, mode) {
  console.log(value, mode);
}
