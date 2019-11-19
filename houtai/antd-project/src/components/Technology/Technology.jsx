import React from 'react';
import '../../assets/css/Technology.css';
import { Icon, Input, Button   } from 'antd';
const { TextArea } = Input;
export default class Technology extends React.Component {
    render() {
        return (
            <>
                <div className="header" style={{
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
                    }}>技术问题</span>
                </div>
               <div className="underline"></div>
               <div className="content">
                    <div>
                        <span className="sexname">学员姓名:</span>
                        <span className="name">小明</span>
                    </div>
                    <span className="content_ques">问题内容:</span>
                    <TextArea rows={4} style={{
                        display: 'inline-block',
                        marginTop: '37px',
                        width: '502px',
                        height: '85px'
                    }}/>
               </div>
               <div>
                   <Button type="primary" style={{
                       marginLeft: '500px',
                       marginTop: '30px'
                   }}><Icon type="check" />提问</Button>
                   <Button type="danger" style={{
                       marginLeft: '100px',
                   }}><Icon type="undo" />返回</Button>
               </div>
            </>
        )
    }
}