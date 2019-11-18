import React from 'react';
import { Input, Button, Icon, Avatar } from 'antd';
const { TextArea } = Input;
export default class Technology extends React.Component {
    render() {
        return (
            <>
                <div id="header" style={{
                    minHeight: '45px',
                    marginBottom: '30px'
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
                    }}>匿名投诉</span>
                </div>
                {/* <div>
                    请学员在下面输入要提交的问题,如有紧急事务,请拨打热线电话<p >000-12581</p>
                </div> */}
                <TextArea rows={7} />
                <div className="bnts" style={{
                    position: 'relative',
                }}> 
                    <Button type="primary" block style={{
                    width: '10%',
                    marginTop: '30px',
                    marginLeft: '500px'
                    }}>
                        提交
                    </Button>
                    <span style={{
                        dispaly: 'inline-block',
                        width: '300px'
                    }}></span>
                    <Button type="danger" block style={{
                    width: '10%',
                    marginTop: '30px',
                    marginLeft: '100px'
                    }}>
                        返回
                    </Button>
                    
                </div>
                <div className="icons-list">
                    <Icon type="home" />
                    <Icon type="setting" theme="filled" />
                    <Icon type="smile" theme="outlined" />
                    <Icon type="sync" spin />
                    <Icon type="smile" rotate={180} />
                    <Icon type="loading" />
                </div>,
                <Avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574057674815&di=16fb7a9ba720a7ed291d804e39591bf9&imgtype=0&src=http%3A%2F%2Fa-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F29%2F20180729104157_HsVPW.jpeg"  style={{
                        dispaly: 'block',
                        backgraundSize: '100px'
                    }}/>
            </>
        )
    }
}