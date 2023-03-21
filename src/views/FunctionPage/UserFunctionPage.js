import {DesktopOutlined, FileOutlined, UserOutlined, LogoutOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { useNavigate, Outlet} from "react-router-dom";




const {  Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('体检预约', 'userAppointment', <DesktopOutlined />),
    getItem('我的', 'sub1', <UserOutlined />, [
        getItem('我的预约', 'userInfoAppointment'),
        getItem('我的信息', 'userInfo'),
    ]),
    getItem('体检报告', 'userResult', <FileOutlined />),
    getItem('退出系统', 'exit', <LogoutOutlined />),
];
const UserFunctionPage = () => {
    const navigate = useNavigate()
    const onClickMenu = (e) => {
        switch (e.key){
            case 'userAppointment':
                navigate("/UserFunctionPage/userAppointment");
                break;
            case 'userInfo':
                navigate("/UserFunctionPage/userInfo");
                break;
            case 'userInfoAppointment':
                navigate("/UserFunctionPage/userInfoAppointment");
                break;
            case 'userResult':
                navigate("/UserFunctionPage/userResult");
                break;
            case 'exit':
                navigate("/");
                break;
            default:
                break;
        }
    }
    const [collapsed, setCollapsed] = useState(false);
    // const {
    //     token: { colorBgContainer },
    // } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu
                    style={{marginTop: '16px'}}
                    onClick={onClickMenu} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">

                <Content
                    style={{
                        margin: '16px 16px',

                    }}
                >

                <Outlet>

                </Outlet>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Yjaun ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default UserFunctionPage;

