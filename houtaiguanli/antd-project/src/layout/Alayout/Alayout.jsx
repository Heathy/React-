import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// 匿名投诉
import Complaint from '../../components/Complaint/Complaint'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const Acontent = () => {
    return (
        <Content style={{ padding: '0 14px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout style={{ padding: '4px 0', background: '#fff' }}>
                <Sider width={180} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    学员后台
                                </span>
                            }
                        >
                            <Menu.Item key="1"><Link to="/nav1/option1">匿名投诉</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/nav1/option2">技术问题</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/nav1/option3">项目上传</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/nav1/option4">VIP</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="order" />
                                    订单管理
                                </span>
                            }
                        >
                            <Menu.Item key="5"><Link to="/nav1/option5">订单列表</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                                <span>
                                    <Icon type="Administrator" />
                                    管理员管理
                                </span>
                            }
                        >
                            <Menu.Item key="6"><Link to="/nav1/option6">管理员列表</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/nav1/option7">角色管理</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/nav1/option8">权限分类</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/nav1/option9">权限管理</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                                    <Icon type="system" />
                                    系统统计
                                </span>
                            }
                        >
                            <Menu.Item key="10"><Link to="/nav1/option10">折线图</Link></Menu.Item>
                            <Menu.Item key="11"><Link to="/nav1/option11">柱状图</Link></Menu.Item>
                            <Menu.Item key="12"><Link to="/nav1/option12">地图</Link></Menu.Item>
                            <Menu.Item key="13"><Link to="/nav1/option13">饼图</Link></Menu.Item>
                            <Menu.Item key="14"><Link to="/nav1/option14">雷达图</Link></Menu.Item>
                            <Menu.Item key="15"><Link to="/nav1/option14">k线图</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={
                                <span>
                                    <Icon type="Administrator" />
                                    资金管理
                                </span>
                            }
                        >
                            <Menu.Item key="10"><Link to="/nav1/option10">银行卡管理</Link></Menu.Item>
                            <Menu.Item key="11"><Link to="/nav1/option11">充值记录</Link></Menu.Item>
                            <Menu.Item key="12"><Link to="/nav1/option12">支付方式</Link></Menu.Item>
                            <Menu.Item key="13"><Link to="/nav1/option13">用户资金管理</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={
                                <span>
                                    <Icon type="Administrator" />
                                    物流管理
                                </span>
                            }
                        >
                            <Menu.Item key="14"><Link to="/nav1/option14">发货管理</Link></Menu.Item>
                            <Menu.Item key="15"><Link to="/nav1/option15">网点管理</Link></Menu.Item>
                            <Menu.Item key="16"><Link to="/nav1/option16">退货管理</Link></Menu.Item>
                            <Menu.Item key="17"><Link to="/nav1/option17">快递单号查询</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={
                                <span>
                                    <Icon type="Administrator" />
                                    财务中心
                                </span>
                            }
                        >
                            <Menu.Item key="18"><Link to="/nav1/option18">应收/预付款项</Link></Menu.Item>
                            <Menu.Item key="19"><Link to="/nav1/option19">现金流管理</Link></Menu.Item>
                            <Menu.Item key="20"><Link to="/nav1/option20">产出成本/费用支出</Link></Menu.Item>
                            <Menu.Item key="21"><Link to="/nav1/option21">企业年终预算</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 14px', minHeight: 280 }}>
                    <Switch>
                        <Route path="/nav1/option1">
                            <Complaint />
                        </Route>
                        <Route path="/nav1/option2">
                            <div>option2</div>
                        </Route>
                        <Route path="/nav1/option3">
                            <div>option3</div>
                        </Route>
                        <Route path="/nav1/option4">
                            <div>option4</div>
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </Content>
    )
}


export default class Alayout extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Header className="header" style={{
                        height: '50px'
                    }}>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '50px' }}
                        >
                            <Menu.Item key="1">
                                <Link to="/nav1">学生管理</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/nav2">教学管理</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/nav3">成绩管理</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Switch>
                        <Route path="/nav1">
                            <Acontent />
                        </Route>
                        <Route path="/nav2">
                            <div>nav2</div>
                        </Route>
                        <Route path="/nav3">
                            <div>nav3</div>
                        </Route>
                    </Switch>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Router>
        )
    }
}