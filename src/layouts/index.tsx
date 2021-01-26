import React, { useState, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Layout, Menu, ConfigProvider } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import styled from 'styled-components';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import zhCN from 'antd/es/locale/zh_CN';

const queyClient = new QueryClient();

const Logo = styled.div`
  height: 64px;
  padding: 16px;
  display: flex;
  justify-content: center;
  img {
    height: 100%;
  }
`;

export default (props: PropsWithChildren<any>) => {
  const [collapsed, setCollapsed] = useState(false);

  function onCollapse(collapsed: boolean) {
    setCollapsed(collapsed);
  }

  return (
    <QueryClientProvider client={queyClient}>
      <ConfigProvider locale={zhCN}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <Logo>
              <img src={require('@/assets/img/ran2.png')} alt="logo"></img>
            </Logo>

            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />}>
                Files
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: '#fff' }} />
            <Content>{props.children}</Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </QueryClientProvider>
  );
};
