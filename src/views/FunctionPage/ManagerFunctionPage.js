import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
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
    getItem('数据汇总', 'sub1', <PieChartOutlined />, [
        getItem('用户预约记录', '1'),
        getItem('医生反馈记录', '2'),
    ]),
    getItem('用户操作', 'sub2', <TeamOutlined />, [
        getItem('添加用户', '3'),
        getItem('删除用户', '4'),
        getItem('修改用户', '5'),
    ]),
    getItem('医生操作', 'sub3', <TeamOutlined />, [
        getItem('添加医生', '6'),
        getItem('删除医生', '7'),
        getItem('修改医生', '8'),
    ]),
    getItem('体检报告生成', '9', <FileOutlined />),
];
const ManagerFunctionPage = () => {
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
                <div
                    style={{
                        height: 32,
                        margin: 16,
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        Bill is a cat.
                    </div>
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
export default ManagerFunctionPage;

