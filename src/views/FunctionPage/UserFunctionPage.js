import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, LogoutOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { useNavigate, Outlet} from "react-router-dom";




const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('体检预约', 'appoint', <DesktopOutlined />),
    getItem('我的', 'sub1', <UserOutlined />, [
        getItem('我的预约', 'myappoint'),
        getItem('我的信息', 'myinfo'),
    ]),
    getItem('体检报告', 'report', <FileOutlined />),
    getItem('退出系统', 'exit', <LogoutOutlined />),
];
const UserFunctionPage = () => {
    const navigate = useNavigate()
    const onClickMenu = (e) => {
        console.log(e)
        switch (e.key){
            case 'exit':
                navigate("/")
                break;

        }
    }
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
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

                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        Bill is a cat.
                    </div>
                    <Outlet></Outlet>
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

