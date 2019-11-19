import React from 'react';
import { Icon, Input, Menu, Dropdown, Pagination } from 'antd';
import '../../assets/css/Indent.css';

const { Search } = Input;
export default class Indent extends React.Component {
    state = {
        visible: false,
    };

    handleMenuClick = e => {
        if (e.key === '3') {
            this.setState({ visible: false });
        }
    };

    handleVisibleChange = flag => {
        this.setState({ visible: flag });
    };
    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
                <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
                <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
            </Menu>
        );
        return (
            <>
                <div className="Rightbox">
                    <div className="headerbox">
                        <span className="span1">订单管理</span>
                        <Icon type="double-right" />
                        <span className="span2">后台管理订单管理</span>
                    </div>

                    <div className="selectbox">
                        <div className="selectleft_input">
                            <span className="product">产品名称 :</span>
                            <Search
                                placeholder="请输入产品的订单号"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                            />
                            <span className=" classify">产品分类 :</span>
                            <div className="selmuen" >
                                <Dropdown
                                    overlay={menu}
                                    onVisibleChange={this.handleVisibleChange}
                                    visible={this.state.visible}
                                >
                                    <a className="ant-dropdown-link" href="###" style={{
                                        color: '#dda91a',
                                        paddingLeft: '6px',
                                        paddingTop: '2px',

                                    }}>
                                        请选择你的商品分类 <Icon type="down" style={{
                                            paddingLeft: '20px'
                                        }} />
                                    </a>
                                </Dropdown>
                            </div>

                        </div>
                        <div className="search">
                            <Icon type="search" style={{
                                fontSize: '20px',
                                paddingTop: '10px'
                            }} />
                            <span>查询</span>
                        </div>

                    </div>

                    <div className="fromgood">
                        <div className="frgood">后台管理商品列表</div>
                        <div className="gooddel">
                            <Icon type="delete" style={{
                                fontSize: '18px',
                                width: '18px',
                                marginTop: '4px',
                                paddingLeft: '6px'
                            }} />
                            <span style={{
                                marginLeft: '5px'
                            }}>批量删除</span>
                        </div>
                        <div className="goodadd">
                            <Icon type="plus-circle" style={{
                                fontSize: '18px',
                                width: '18px',
                                marginTop: '4px',
                                paddingLeft: '6px'
                            }} />
                            <span style={{
                                marginLeft: '7px',
                                paddingLeft: '5px'
                            }}>添加</span>
                        </div>
                        <div style={{
                            border: '1px solid #ccc',
                            marginTop: '5px'
                        }}></div>

                        <div className="InquireSelectTable">
                            <table className="PublicTableCss">
                                <thead>
                                    <tr>
                                        <td>
                                            <input id="inputcheck" className="inputcheck" type="checkbox" name="inputcheck" />
                                            <label for="inputcheck"></label>
                                            <span>全选</span>
                                        </td>
                                        <td>ID</td>
                                        <td>产品图片</td>
                                        <td>产品名称</td>
                                        <td>产品描述</td>
                                        <td>产品价格</td>
                                        <td>产品品牌</td>
                                        <td>产品型号</td>
                                        <td>产品详情缩略图</td>
                                        <td>操作</td>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input id="aa" className="inputcheck" type="checkbox" name="inputcheck" />
                                            <label for="aa"></label>
                                        </td>
                                        <td>1</td>
                                        <td>
                                            <div class="productImgBox">

                                            </div>
                                        </td>
                                        <td>新鲜的橙子</td>
                                        <td>新鲜的橙子真的很好吃新鲜的橙子真的很好吃新鲜的橙子真的很好吃</td>
                                        <td>1200.00元</td>
                                        <td>华兹</td>
                                        <td>e3000-L</td>
                                        <td>
                                            <div class="productImgBox">

                                            </div>
                                        </td>

                                        <td>

                                            <div class="PublicTableBtnIcon Color3Btn Js_edit">
                                                <i class="iconfont icon-tubiaozhizuomobanyihuifu-"></i>
                                                <span className='edit'>编辑</span>
                                            </div>

                                            <div class="PublicTableBtnIcon Color4Btn Js_delete">
                                                <i class="iconfont icon-shanchu"></i>
                                                <span className='del'>删除</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input id="aa" className="inputcheck" type="checkbox" name="inputcheck" />
                                            <label for="aa"></label>
                                        </td>
                                        <td>1</td>
                                        <td>
                                            <div class="productImgBox">

                                            </div>
                                        </td>
                                        <td>新鲜的橙子</td>
                                        <td>新鲜的橙子真的很好吃新鲜的橙子真的很好吃新鲜的橙子真的很好吃</td>
                                        <td>1200.00元</td>
                                        <td>华兹</td>
                                        <td>e3000-L</td>
                                        <td>
                                            <div class="productImgBox">

                                            </div>
                                        </td>

                                        <td>

                                            <div class="PublicTableBtnIcon Color3Btn Js_edit">
                                                <i class="iconfont icon-tubiaozhizuomobanyihuifu-"></i>
                                                <span className="edit">编辑</span>
                                            </div>

                                            <div class="PublicTableBtnIcon Color4Btn Js_delete">
                                                <i class="iconfont icon-shanchu"></i>
                                                <span className="del">删除</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <div className='pages'>
                            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                            <br />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}