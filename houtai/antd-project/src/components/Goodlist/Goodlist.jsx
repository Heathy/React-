import React from 'react';
import '../../assets/css/Goodlist.css'
export default class Goodlist extends React.Component {
    render() {
        return (
            <>
                <div className="RightBox">
                    <div className="PublicContentBox">

                        <div className="PublicPointToAgeText">
                            <span className="span1">订单管理 </span> <span className="span2">后台订单管理列表</span>
                        </div>

                        <div className="InquireBox clearfix">
                            <div className="InquireleftBox">
                                <div className="Text">订单号：</div>
                                <div className="InputDiv">   <input className="phoneInput" placeholder="请输入你需要查询的订单号" /></div>
                            </div>
                            <div className="PublicBtnIcon Color1Btn fr">
                                <i className="iconfont icon-icon-chaxun"></i>
                                <span>查询</span>
                            </div>
                        </div>

                        <div className="InquireTableBox">
                            <div className="headbox">
                                <div className="headboxtext">
                                    <span className="span1">后台订单管理列表</span>
                                </div>

                                <div className="PublicBtnIcon Color5Btn">
                                    <i className="iconfont  icon-shanchu"></i>
                                    <span>批量删除</span>
                                </div>


                            </div>



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
                                            <td>姓名</td>
                                            <td>手机号</td>
                                            <td>地址</td>
                                            <td>应付金额</td>
                                            <td>订单编号</td>
                                            <td>支付方式</td>
                                            <td>交易支付单号</td>
                                            <td>下单时间</td>
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
                                            <td>尚能大大</td>
                                            <td>17612164871</td>
                                            <td>上海市杨浦区宁国路503号3栋C08-C09</td>
                                            <td>1200.00元</td>
                                            <td>201711024866544846</td>
                                            <td>支付宝</td>
                                            <td>201711024866544846</td>
                                            <td>2017-11-01 21:15:23</td>

                                            <td>

                                                <div className="PublicTableBtnIcon Color3Btn Js_edit">
                                                    <i className="iconfont icon-tubiaozhizuomobanyihuifu-"></i>
                                                    <span>编辑</span>
                                                </div>

                                                <div className="PublicTableBtnIcon Color4Btn Js_delete">
                                                    <i className="iconfont icon-shanchu"></i>
                                                    <span>删除</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <input id="aa" className="inputcheck" type="checkbox" name="inputcheck" />
                                                <label for="aa"></label>
                                            </td>
                                            <td>1</td>
                                            <td>尚能大大</td>
                                            <td>17612164871</td>
                                            <td>上海市杨浦区宁国路503号3栋C08-C09</td>
                                            <td>1200.00元</td>
                                            <td>201711024866544846</td>
                                            <td>支付宝</td>
                                            <td>201711024866544846</td>
                                            <td>2017-11-01 21:15:23</td>

                                            <td>

                                                <div className="PublicTableBtnIcon Color3Btn Js_edit">
                                                    <i className="iconfont icon-tubiaozhizuomobanyihuifu-"></i>
                                                    <span>编辑</span>
                                                </div>

                                                <div className="PublicTableBtnIcon Color4Btn Js_delete">
                                                    <i className="iconfont icon-shanchu"></i>
                                                    <span>删除</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <input id="aa" className="inputcheck" type="checkbox" name="inputcheck" />
                                                <label for="aa"></label>
                                            </td>
                                            <td>1</td>
                                            <td>尚能大大</td>
                                            <td>17612164871</td>
                                            <td>上海市杨浦区宁国路503号3栋C08-C09</td>
                                            <td>1200.00元</td>
                                            <td>201711024866544846</td>
                                            <td>支付宝</td>
                                            <td>201711024866544846</td>
                                            <td>2017-11-01 21:15:23</td>

                                            <td>

                                                <div className="PublicTableBtnIcon Color3Btn Js_edit">
                                                    <i className="iconfont icon-tubiaozhizuomobanyihuifu-"></i>
                                                    <span>编辑</span>
                                                </div>

                                                <div className="PublicTableBtnIcon Color4Btn Js_delete">
                                                    <i className="iconfont icon-shanchu"></i>
                                                    <span>删除</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <input id="aa" className="inputcheck" type="checkbox" name="inputcheck" />
                                                <label for="aa"></label>
                                            </td>
                                            <td>1</td>
                                            <td>尚能大大</td>
                                            <td>17612164871</td>
                                            <td>上海市杨浦区宁国路503号3栋C08-C09</td>
                                            <td>1200.00元</td>
                                            <td>201711024866544846</td>
                                            <td>支付宝</td>
                                            <td>201711024866544846</td>
                                            <td>2017-11-01 21:15:23</td>

                                            <td>

                                                <div className="PublicTableBtnIcon Color3Btn Js_edit">
                                                    <i className="iconfont icon-tubiaozhizuomobanyihuifu-"></i>
                                                    <span>编辑</span>
                                                </div>

                                                <div className="PublicTableBtnIcon Color4Btn Js_delete">
                                                    <i className="iconfont icon-shanchu"></i>
                                                    <span>删除</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <input id="aa" className="inputcheck" type="checkbox" name="inputcheck" />
                                                <label for="aa"></label>
                                            </td>
                                            <td>1</td>
                                            <td>尚能大大</td>
                                            <td>17612164871</td>
                                            <td>上海市杨浦区宁国路503号3栋C08-C09</td>
                                            <td>1200.00元</td>
                                            <td>201711024866544846</td>
                                            <td>支付宝</td>
                                            <td>201711024866544846</td>
                                            <td>2017-11-01 21:15:23</td>

                                            <td>

                                                <div className="PublicTableBtnIcon Color3Btn Js_edit">
                                                    <i className="iconfont icon-tubiaozhizuomobanyihuifu-"></i>
                                                    <span>编辑</span>
                                                </div>

                                                <div className="PublicTableBtnIcon Color4Btn Js_delete">
                                                    <i className="iconfont icon-shanchu"></i>
                                                    <span>删除</span>
                                                </div>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>

                            </div>

                            <div className="PageNumber">
                                <div className="NumbersBox">
                                    <div className="LeftArrow">
                                        上一页
                            </div>
                                    <ul>
                                        <li className="Select">1</li>
                                        <li className="">2</li>
                                        <li className="">...</li>
                                        <li className="">4</li>
                                        <li className="">5</li>
                                    </ul>
                                    <div className="RightArrow ">
                                        下一页
                            </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </>
        )
    }
}